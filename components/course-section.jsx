import { Clock, BookOpen, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "Learn the fundamentals of machine learning algorithms and applications.",
    progress: 75,
    totalLessons: 12,
    completedLessons: 9,
    estimatedTime: "2 hours left",
    category: "AI & ML",
    image: "/placeholder.svg?height=100&width=180",
  },
  {
    id: 2,
    title: "Blockchain Development",
    description: "Build decentralized applications using smart contracts and blockchain technology.",
    progress: 45,
    totalLessons: 10,
    completedLessons: 4,
    estimatedTime: "4 hours left",
    category: "Blockchain",
    image: "/placeholder.svg?height=100&width=180",
  },
  {
    id: 3,
    title: "Advanced Data Structures",
    description: "Master complex data structures and algorithms for efficient problem solving.",
    progress: 30,
    totalLessons: 15,
    completedLessons: 4,
    estimatedTime: "6 hours left",
    category: "Computer Science",
    image: "/placeholder.svg?height=100&width=180",
  },
  {
    id: 4,
    title: "Web3 Fundamentals",
    description: "Understand the core concepts of Web3 and decentralized internet.",
    progress: 10,
    totalLessons: 8,
    completedLessons: 1,
    estimatedTime: "5 hours left",
    category: "Blockchain",
    image: "/placeholder.svg?height=100&width=180",
  },
]

export default function CourseSection() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Active Courses</CardTitle>
          <Button variant="ghost" size="sm" className="text-sm">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="grid gap-4">
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border">
              <div className="sm:w-[180px] h-[100px] rounded-md overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <Badge variant="secondary" className="w-fit">
                    {course.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      {course.completedLessons}/{course.totalLessons} lessons
                    </span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-1">
                  <div className="flex items-center">
                    <BookOpen className="mr-1 h-4 w-4" />
                    <span>
                      {course.completedLessons}/{course.totalLessons} lessons
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{course.estimatedTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button className="w-full">Explore More Courses</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Recommended For You</CardTitle>
          <Button variant="ghost" size="sm" className="text-sm">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="rounded-lg border p-3 flex flex-col gap-2">
                <div className="h-[100px] rounded-md bg-muted mb-2"></div>
                <Badge variant="outline" className="w-fit">
                  AI & ML
                </Badge>
                <h4 className="font-medium">Advanced Neural Networks</h4>
                <div className="flex items-center text-sm text-muted-foreground mt-auto">
                  <Award className="mr-1 h-4 w-4" />
                  <span>Intermediate</span>
                  <span className="mx-2">•</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>8 hours</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}

