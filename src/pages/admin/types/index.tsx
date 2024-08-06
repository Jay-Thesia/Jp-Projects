// export type ProjectType = {
//   projectName: string;
//   projectType: string;
//   projectDescription: string;
//   projectLocation: string;
//   projectConstructionArea: number;
//   projectImages: string[] | undefined;
// };

export interface ProjectTypeInterface {
  id?: string;
  projectName: string;
  projectType: string;
  projectDescription: string;
  projectLocation: string;
  projectConstructionArea: number;
  // projectImages: any | File | File[]; //FIXME: any remove
  [key: string]: unknown;
}
