'use client'

import { useState } from 'react'
import { 
  uploadProfileImage, 
  uploadMealPlan, 
  uploadRecipeImage,
  getPublicUrl,
  getSignedUrl
} from '@/lib/storage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

type UploadType = 'profile' | 'mealplan' | 'recipe'

interface FileUploaderProps {
  type: UploadType
  userId: string
  recipeId?: string
  onUploadComplete?: (url: string) => void
}

export function FileUploader({ type, userId, recipeId, onUploadComplete }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      
      // Create preview URL for images
      if (selectedFile.type.startsWith('image/')) {
        setPreviewUrl(URL.createObjectURL(selectedFile))
      }
    }
  }

  const handleUpload = async () => {
    if (!file) return

    try {
      setUploading(true)
      setProgress(0)

      let uploadResult
      switch (type) {
        case 'profile':
          uploadResult = await uploadProfileImage(file, userId)
          break
        case 'mealplan':
          uploadResult = await uploadMealPlan(file, userId)
          break
        case 'recipe':
          if (!recipeId) throw new Error('Recipe ID is required for recipe uploads')
          uploadResult = await uploadRecipeImage(file, userId, recipeId)
          break
      }

      // Simulate upload progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      // Get the appropriate URL based on upload type
      let fileUrl
      if (type === 'profile') {
        fileUrl = getPublicUrl('public', uploadResult.path)
      } else {
        fileUrl = await getSignedUrl('private', uploadResult.path)
      }

      setProgress(100)
      onUploadComplete?.(fileUrl)
      toast.success('File uploaded successfully!')
    } catch (error) {
      console.error('Error uploading file:', error)
      toast.error('Failed to upload file')
    } finally {
      setUploading(false)
    }
  }

  return (
    <Card className="p-4 space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          {type === 'profile' && 'Upload Profile Picture'}
          {type === 'mealplan' && 'Upload Meal Plan'}
          {type === 'recipe' && 'Upload Recipe Image'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {type === 'profile' && 'Upload a profile picture to personalize your account'}
          {type === 'mealplan' && 'Upload your meal plan document (PDF, DOC, etc.)'}
          {type === 'recipe' && 'Upload an image for your recipe'}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Input
            type="file"
            onChange={handleFileChange}
            accept={
              type === 'profile' || type === 'recipe'
                ? 'image/*'
                : '.pdf,.doc,.docx,.txt'
            }
            className="max-w-sm"
          />
          <Button
            onClick={handleUpload}
            disabled={!file || uploading}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </Button>
        </div>

        {uploading && (
          <Progress value={progress} className="w-full" />
        )}

        {previewUrl && (
          <div className="mt-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="max-w-xs rounded-lg"
            />
          </div>
        )}
      </div>
    </Card>
  )
} 