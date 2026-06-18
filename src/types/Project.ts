export interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  backgroundColor: string;
  isNew?: boolean;
}