export interface iProject {
  name: string;
  url: string;
  description: string;
  developerNotes?: string;
  technologies?: string[];
  disabled?: boolean;
}
