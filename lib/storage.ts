import { createClient } from './supabase'
import { StorageError } from '@supabase/storage-js'

// Types for different storage paths
export type StoragePath = 
  | 'zenpublic/images'
  | 'zenprivate/meal-plans'
  | 'zenprivate/recipes'

// Helper to generate unique filenames
const generateUniqueFilename = (file: File, prefix?: string) => {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 8)
  const safeFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
  return `${prefix ? `${prefix}-` : ''}${timestamp}-${randomString}-${safeFilename}`
}

// Upload functions for specific content types
export const uploadProfileImage = async (file: File, userId: string) => {
  const path = `zenpublic/images/profiles/${userId}/${generateUniqueFilename(file, 'profile')}`
  return uploadFile(file, 'zenpublic', path)
}

export const uploadMealPlan = async (file: File, userId: string) => {
  const path = `zenprivate/meal-plans/${userId}/${generateUniqueFilename(file, 'mealplan')}`
  return uploadFile(file, 'zenprivate', path)
}

export const uploadRecipeImage = async (file: File, userId: string, recipeId: string) => {
  const path = `zenprivate/recipes/${userId}/${recipeId}/${generateUniqueFilename(file, 'recipe')}`
  return uploadFile(file, 'zenprivate', path)
}

// Base upload function
export const uploadFile = async (file: File, bucket: string, path: string) => {
  const supabase = createClient()
  
  try {
    // Verify the client is properly initialized
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      if (error.message.includes('jwt')) {
        throw new Error('Authentication error. Please check your Supabase configuration.')
      }
      if (error.message.includes('row-level security')) {
        throw new Error('Permission denied. Please check your storage bucket policies.')
      }
      throw new Error(`Storage Error: ${error.message}`)
    }

    if (!data) {
      throw new Error('Upload failed: No data returned from Supabase')
    }

    return data
  } catch (error: any) {
    // Enhance the error with more context
    const enhancedError = new Error(
      `Failed to upload to ${bucket}: ${error.message || 'Unknown error'}`
    )
    enhancedError.cause = error
    throw enhancedError
  }
}

// Get public URL with cache control
export const getPublicUrl = (bucket: string, path: string) => {
  const supabase = createClient()
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path, {
      download: false
    })

  return data.publicUrl
}

// Get signed URL for private files
export const getSignedUrl = async (bucket: string, path: string, expiresIn: number = 3600) => {
  const supabase = createClient()
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(path, expiresIn)

  if (error) {
    throw new Error(`Failed to get signed URL: ${error.message}`)
  }

  return data.signedUrl
}

export const deleteFile = async (bucket: string, path: string) => {
  const supabase = createClient()
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path])

  if (error) {
    throw new Error(`Failed to delete file: ${error.message}`)
  }
}

export const listFiles = async (bucket: string, path: string = '') => {
  const supabase = createClient()
  const { data, error } = await supabase.storage
    .from(bucket)
    .list(path)

  if (error) {
    throw new Error(`Failed to list files: ${error.message}`)
  }

  return data
} 