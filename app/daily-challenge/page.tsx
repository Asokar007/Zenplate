"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Star, Medal } from "lucide-react"
import { toast } from "sonner"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ErrorBoundary } from "@/components/error-boundary"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

interface Challenge {
  title: string
  description: string
  points: number
  completed: boolean
  category: string
}

const defaultChallenges: Challenge[] = [
  {
    title: "Mindful Eating Practice",
    description: "Take 5 minutes to eat your next meal without distractions. Focus on the taste, texture, and aroma of your food.",
    points: 50,
    completed: false,
    category: "Mindfulness"
  },
  {
    title: "Hydration Check",
    description: "Drink at least 8 glasses of water today and track your intake.",
    points: 30,
    completed: false,
    category: "Health"
  },
  {
    title: "Nutrition Knowledge",
    description: "Learn about one new superfood and how to incorporate it into your diet.",
    points: 40,
    completed: false,
    category: "Education"
  },
  {
    title: "Meal Planning",
    description: "Plan your meals for tomorrow, focusing on balanced nutrition.",
    points: 60,
    completed: false,
    category: "Planning"
  },
  {
    title: "Physical Activity",
    description: "Take a 15-minute walk or do a short workout session.",
    points: 45,
    completed: false,
    category: "Fitness"
  },
  {
    title: "Gratitude Journal",
    description: "Write down three things you're grateful for today.",
    points: 35,
    completed: false,
    category: "Mindfulness"
  }
]

export default function DailyChallengePage() {
  const [isMounted, setIsMounted] = useState(false)
  const [streak, setStreak] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)
  const [challenges, setChallenges] = useState<Challenge[]>(defaultChallenges)
  const [todayChallenge, setTodayChallenge] = useState<Challenge>(defaultChallenges[0])

  useEffect(() => {
    try {
      setIsMounted(true)
      // Load saved data from localStorage
      const savedStreak = localStorage.getItem('challengeStreak')
      const savedPoints = localStorage.getItem('totalPoints')
      const savedChallenges = localStorage.getItem('challenges')
      const savedTodayChallenge = localStorage.getItem('todayChallenge')

      if (savedStreak) setStreak(parseInt(savedStreak))
      if (savedPoints) setTotalPoints(parseInt(savedPoints))
      if (savedChallenges) setChallenges(JSON.parse(savedChallenges))
      if (savedTodayChallenge) setTodayChallenge(JSON.parse(savedTodayChallenge))
    } catch (error) {
      console.error("Error loading saved data:", error)
      toast.error("Failed to load saved data. Starting fresh.")
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('challengeStreak', streak.toString())
        localStorage.setItem('totalPoints', totalPoints.toString())
        localStorage.setItem('challenges', JSON.stringify(challenges))
        localStorage.setItem('todayChallenge', JSON.stringify(todayChallenge))
      } catch (error) {
        console.error("Error saving data:", error)
        toast.error("Failed to save progress. Please try again.")
      }
    }
  }, [isMounted, streak, totalPoints, challenges, todayChallenge])

  const handleCompleteChallenge = (challengeIndex: number) => {
    try {
      const updatedChallenges = [...challenges]
      if (!updatedChallenges[challengeIndex].completed) {
        updatedChallenges[challengeIndex].completed = true
        setChallenges(updatedChallenges)
        setTotalPoints(prev => prev + updatedChallenges[challengeIndex].points)
        setStreak(prev => prev + 1)
        toast.success(`Challenge completed! +${updatedChallenges[challengeIndex].points} points`)
      }
    } catch (error) {
      toast.error("Failed to complete challenge. Please try again.")
      console.error("Error completing challenge:", error)
    }
  }

  const handleCompleteTodayChallenge = () => {
    try {
      if (!todayChallenge.completed) {
        setTodayChallenge(prev => ({ ...prev, completed: true }))
        setTotalPoints(prev => prev + todayChallenge.points)
        setStreak(prev => prev + 1)
        toast.success(`Today's challenge completed! +${todayChallenge.points} points`)
      }
    } catch (error) {
      toast.error("Failed to complete today's challenge. Please try again.")
      console.error("Error completing today's challenge:", error)
    }
  }

  if (!isMounted) {
    return <LoadingSpinner />
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#E8F5E9] flex flex-col">
        {/* Breadcrumbs */}
        <div className="container py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Daily Challenge</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <main className="flex-1 container py-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237BAE7F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#333333] mb-8">Daily Challenge</h1>
            <div className="text-center mb-12">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-white/80 backdrop-blur-sm border-[#7BAE7F]/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-[#333333]">Current Streak</h3>
                        <p className="text-3xl font-bold text-[#7BAE7F]">{streak} days</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[#7BAE7F]/10 flex items-center justify-center">
                        <Flame className="h-8 w-8 text-[#7BAE7F]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-[#7BAE7F]/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-[#333333]">Total Points</h3>
                        <p className="text-3xl font-bold text-[#7BAE7F]">{totalPoints}</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[#7BAE7F]/10 flex items-center justify-center">
                        <Star className="h-8 w-8 text-[#7BAE7F]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-[#7BAE7F]/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-[#333333]">Level</h3>
                        <p className="text-3xl font-bold text-[#7BAE7F]">{Math.floor(totalPoints / 100) + 1}</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[#7BAE7F]/10 flex items-center justify-center">
                        <Medal className="h-8 w-8 text-[#7BAE7F]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Today's Challenge */}
            <Card className="mb-8 bg-white/80 backdrop-blur-sm border-[#7BAE7F]/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#333333]">Today's Featured Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-[#7BAE7F]">{todayChallenge.title}</h3>
                    <span className="px-3 py-1 rounded-full text-sm bg-[#7BAE7F]/10 text-[#7BAE7F]">
                      {todayChallenge.category}
                    </span>
                  </div>
                  <p className="text-[#4f5d75]">{todayChallenge.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#4f5d75]">{todayChallenge.points} points</span>
                    <Button 
                      className="bg-[#7BAE7F] hover:bg-[#7BAE7F]/90 text-white"
                      disabled={todayChallenge.completed}
                      onClick={handleCompleteTodayChallenge}
                    >
                      {todayChallenge.completed ? "Completed" : "Mark as Complete"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Challenges */}
            <Card className="bg-white/80 backdrop-blur-sm border-[#7BAE7F]/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#333333]">Weekly Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#4f5d75]">Weekly Progress</span>
                    <span className="text-[#7BAE7F] font-semibold">
                      {challenges.filter(c => c.completed).length}/{challenges.length} completed
                    </span>
                  </div>
                  <Progress 
                    value={(challenges.filter(c => c.completed).length / challenges.length) * 100} 
                    className="h-2" 
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {challenges.map((challenge, index) => (
                      <Card key={index} className="bg-white/50 border-[#7BAE7F]/10">
                        <CardContent className="pt-6">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-[#333333]">{challenge.title}</h4>
                              <span className="px-2 py-1 rounded-full text-xs bg-[#7BAE7F]/10 text-[#7BAE7F]">
                                {challenge.category}
                              </span>
                            </div>
                            <p className="text-sm text-[#4f5d75]">{challenge.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-[#4f5d75]">{challenge.points} points</span>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="border-[#7BAE7F] text-[#7BAE7F]"
                                onClick={() => handleCompleteChallenge(index)}
                                disabled={challenge.completed}
                              >
                                {challenge.completed ? "Completed" : "Complete Challenge"}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  )
} 