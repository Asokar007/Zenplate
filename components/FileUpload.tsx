'use client'

import { useState } from 'react'
import { uploadFile, getPublicUrl } from '@/lib/storage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setError(null) // Clear any previous errors
    }
  }

  const handleUpload = async () => {
    if (!file) return

    try {
      setUploading(true)
      setError(null)
      
      // Upload to 'zenpublic' bucket with a unique filename
      const path = `${Date.now()}-${file.name}`
      const uploadResult = await uploadFile(file, 'zenpublic', path)
      
      if (!uploadResult) {
        throw new Error('Upload failed: No data returned')
      }
      
      // Get the public URL
      const publicUrl = getPublicUrl('zenpublic', path)
      setUploadedUrl(publicUrl)
      
      toast.success('File uploaded successfully!')
    } catch (error: any) {
      // Extract error message from the error object
      const errorMessage = error?.message || 
                          error?.cause?.message || 
                          'Failed to upload file. Please check your Supabase configuration and try again.'
      
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Input
          type="file"
          onChange={handleFileChange}
          className="max-w-sm"
        />
        <Button
          onClick={handleUpload}
          disabled={!file || uploading}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </Button>
      </div>
      
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
      
      {uploadedUrl && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">File uploaded successfully!</p>
          <a
            href={uploadedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            View uploaded file
          </a>
        </div>
      )}
    </div>
  )
} 