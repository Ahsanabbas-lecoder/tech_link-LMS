export interface Course {
    id: string;
    title: string;
    description: string;
    category: string;
    instructor: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    thumbnail?: string;
  }
