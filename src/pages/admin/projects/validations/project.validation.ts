import * as yup from 'yup';
const projectSchema = yup.object({
  projectName: yup.string().required('Project name is required'),
  projectType: yup.string().required('Project type is required'),

  projectDescription: yup.string().required('Project Description is required'),
  projectLocation: yup.string().required('Project location is required'),
  projectConstructionArea: yup
    .number()
    .min(1, 'Project Area is greater than 0')
    .required('Project Area is required'),
  projectImages: yup
    .array()
    .of(
      yup.object().shape({
        file: yup.mixed().required('File is required'),
        id: yup.string().required('ID is required'),
      })
    )
    .min(1, 'At least one project image is required')
    .required('Project Images is required'),
});

export default projectSchema;
