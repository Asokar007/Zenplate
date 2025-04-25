'use client'

import { FileUpload } from '@/components/FileUpload'
import { FileUploader } from '@/components/FileUploader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { toast } from 'sonner'

export default function TestStoragePage() {
  const [uploadStatus, setUploadStatus] = useState<string>('')

  const handleUploadComplete = (url: string) => {
    setUploadStatus(`File uploaded successfully! URL: ${url}`)
    toast.success('File uploaded successfully!')
    console.log('Uploaded file URL:', url)
  }

  const handleUploadError = (error: Error) => {
    setUploadStatus(`Error uploading file: ${error.message}`)
    toast.error('Failed to upload file')
    console.error('Upload error:', error)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Simple File Upload Test</CardTitle>
          </CardHeader>
          <CardContent>
            <FileUpload />
            {uploadStatus && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <pre className="text-sm">{uploadStatus}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced File Upload Test</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Profile Image Upload</h3>
                <FileUploader
                  type="profile"
                  userId="test-user-123"
                  onUploadComplete={handleUploadComplete}
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Meal Plan Upload</h3>
                <FileUploader
                  type="mealplan"
                  userId="test-user-123"
                  onUploadComplete={handleUploadComplete}
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Recipe Image Upload</h3>
                <FileUploader
                  type="recipe"
                  userId="test-user-123"
                  recipeId="test-recipe-123"
                  onUploadComplete={handleUploadComplete}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 