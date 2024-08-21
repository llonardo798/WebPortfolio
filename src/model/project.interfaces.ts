export interface Project {
    id: number;
    name: string;
    description: string;
    descriptionLarge: string;
    technologies: string[];
    imagePaths: string[];

    publicUrl: string;
    videoUrl: string;
    githubUrl: string;
    importance: number;
}