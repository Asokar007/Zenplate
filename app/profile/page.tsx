'use client'

import { useState } from 'react'
import { FileUploader } from '@/components/FileUploader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ProfilePage() {
  const [user, setUser] = useState({
    id: 'user-123', // Replace with actual user ID from auth
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl: null as string | null
  })

  const handleProfileUpdate = async (url: string) => {
    setUser(prev => ({ ...prev, avatarUrl: url }))
    // Here you would typically make an API call to update the user's profile
    // await updateUserProfile({ avatarUrl: url })
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-8">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatarUrl || undefined} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <FileUploader
                type="profile"
                userId={user.id}
                onUploadComplete={handleProfileUpdate}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={user.name}
                onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <Button
              onClick={() => {
                // Here you would typically make an API call to update the user's information
                // await updateUserProfile({ name: user.name, email: user.email })
              }}
            >
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 