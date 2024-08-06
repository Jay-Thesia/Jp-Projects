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
  // projectImages: yup
  //   .mixed()
  //   .test('fileType', 'Unsupported File Format', (value) => {
  //     if (!value) return false;
  //     const files = Array.isArray(value) ? value : [value];
  //     return files.every((file) =>
  //       ['image/jpeg', 'image/png'].includes(file.type)
  //     );
  //   })
  //   .test('fileSize', 'File Size is too large', (value) => {
  //     if (!value) return false;
  //     const files = Array.isArray(value) ? value : [value];
  //     return files.every((file) => file.size <= 2 * 1024 * 1024); // 2MB
  //   })
  //   .required('Project Images is required'),
});

export default projectSchema;
