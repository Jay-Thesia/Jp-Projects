// export type ProjectType = {
//   projectName: string;
//   projectType: string;
//   projectDescription: string;
//   projectLocation: string;
//   projectConstructionArea: number;
//   projectImages: string[] | undefined;
// };

export interface ProjectInterface {
  id?: string;
  projectName: string;
  projectType: string;
  projectDescription: string;
  projectLocation: string;
  projectConstructionArea: number;
  projectImages: any | File | File[]; //FIXME: any remove
  _id?: string;
  [key: string]: unknown;
}

export interface ImageInterface {
  file: File;
  id: string;
}
