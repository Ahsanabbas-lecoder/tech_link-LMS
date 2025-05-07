export interface Course {
    id: string
    title: string
    description: string
    category: string
    instructor: string
    duration: string
    level: 'Beginner' | 'Intermediate' | 'Advanced'
    thumbnail?: string
    modules?: Module[]
  }
  
  export interface Module {
    id: string
    title: string
    lessons: Lesson[]
  }
  
  export interface Lesson {
    id: string
    title: string
    duration: string
    type: 'video' | 'reading' | 'quiz'
    completed?: boolean
  }