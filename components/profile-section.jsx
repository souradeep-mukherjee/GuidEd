import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfileSection() {
  return (
    <>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted mb-4">
            <img
              src="/placeholder.svg?height=96&width=96"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = ""
                e.currentTarget.classList.add("flex", "items-center", "justify-center", "bg-muted")
                const icon = document.createElement("div")
                icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-muted-foreground"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
                e.currentTarget.appendChild(icon)
              }}
            />
          </div>
          <h3 className="font-medium text-lg">Alex Johnson</h3>
          <p className="text-sm text-muted-foreground mb-4">@alexjohnson</p>

          <div className="w-full space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span className="font-medium">68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-2xl font-bold">4</p>
                <p className="text-xs text-muted-foreground">Active Courses</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Learning Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Daily Goal</span>
              <span className="font-medium">2/3 hours</span>
            </div>
            <Progress value={66} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Weekly Streak</span>
              <span className="font-medium">5 days</span>
            </div>
            <div className="flex justify-between gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div key={day} className={`h-2 flex-1 rounded-full ${day <= 5 ? "bg-primary" : "bg-muted"}`} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

