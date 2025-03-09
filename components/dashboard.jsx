'use client';
import TopBar from "@/components/top-bar"
import ProfileSection from "@/components/profile-section"
import CourseSection from "@/components/course-section"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <ProfileSection />
          </div>
          <div className="lg:col-span-8 space-y-6">
            <CourseSection />
          </div>
        </div>
      </div>
    </div>
  )
}

