import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/comman/button';
import Input from 'components/comman/input';
import Modal from 'components/shared/modal';
import { ImageInterface, ProjectInterface } from 'pages/admin/types';
import React, { Dispatch, useEffect, useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import projectSchema from '../validations/project.validation';
import Dropzone from 'components/comman/dropzone';
import {
  useCreateProjectAPI,
  useEditProjectAPI,
  useGetProjectAPI,
} from '../services/project.service';
import { readFileAsBase64 } from 'helpers';
import SiteLoader from 'components/comman/loader/SiteLoader';

interface ProjectFormInterface {
  projectData: ProjectInterface | undefined;
  onSave?: () => void;
  onClose: Dispatch<React.SetStateAction<boolean>>;
  isEdit?: boolean;
  setSelectedProjectData?: React.Dispatch<
    React.SetStateAction<ProjectInterface>
  >;
}
const ProjectModal = (props: ProjectFormInterface) => {
  const {
    projectData,
    onClose,
    onSave,
    isEdit = false,
    setSelectedProjectData,
  } = props;

  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  // const { getProjectAPI, isLoading, isError } = useGetProjectAPI();
  const {
    createProjectAPI,
    isLoading: createProjectLoader,
    isError: createProjectError,
    isSuccess: createProjectSuccess,
  } = useCreateProjectAPI();

  const {
    editProjectAPI,
    isLoading: editProjectLoader,
    isError,
    isSuccess: editProjectSuccess,
  } = useEditProjectAPI();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
    getValues,
    setValue,
    setError,
    clearErrors,
  } = useForm<ProjectInterface>({
    resolver: yupResolver(projectSchema),
    defaultValues: {
      projectName: '',
      projectType: '',
      projectDescription: '',
      projectImages: [],
      projectLocation: '',
      projectConstructionArea: 0,
    },
  });

  const handleDrop = (newFiles: any) => {
    const currentFiles = getValues('projectImages');
    setValue('projectImages', [...currentFiles, ...newFiles], {
      shouldDirty: true,
    });
    setSelectedImages((prevState) => [...prevState, ...newFiles]);
  };

  const handleRemoveImage = (id: string) => {
    const currentFiles = getValues('projectImages');
    setValue(
      'projectImages',
      currentFiles.filter((file: { id: string }) => file.id !== id)
    );
    setSelectedImages((prevState) =>
      prevState.filter((image) => image.id !== id)
    );
  };
  const onSubmitEditProject = async (value: ProjectInterface, error: any) => {
    try {
      const formData = new FormData();

      // formData.append('id', value._id!);
      formData.append('projectName', value.projectName);
      formData.append('projectType', value.projectType);
      formData.append('projectLocation', value.projectLocation);
      formData.append('projectDescription', value.projectDescription);
      formData.append(
        'projectConstructionArea',
        String(value.projectConstructionArea)
      );

      // Convert all images to Base64
      const base64Images: any[] = await Promise.all(
        selectedImages.map((image: { file: File; id: string }) => {
          return image.id.includes('blob')
            ? readFileAsBase64(image.file) //new image
            : image; //existing image
        })
      );

      // Convert the array to a JSON string
      const base64ImagesJson = JSON.stringify(base64Images);
      formData.append('projectImages', base64ImagesJson);

      let { data } = await editProjectAPI(
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
        value._id ? value._id : ''
      );

      if (data) {
        onClose(false);
        setSelectedProjectData &&
          setSelectedProjectData((prev) => ({ ...prev, ...value }));
      }
      return true;
    } catch (error: unknown) {
      console.error(`Error on submitting the project edit form ::: ${error} `);
      return false;
    }
  };

  const onSubmitAddProject = async (value: ProjectInterface) => {
    try {
      const formData = new FormData();

      formData.append('projectName', value.projectName);
      formData.append('projectType', value.projectType);
      formData.append('projectLocation', value.projectLocation);
      formData.append('projectDescription', value.projectDescription);
      formData.append(
        'projectConstructionArea',
        String(value.projectConstructionArea)
      );
      // Convert all images to Base64
      const base64Images: (string | ArrayBuffer | null)[] = await Promise.all(
        selectedImages.map((image: { file: File; id: string }) =>
          readFileAsBase64(image.file)
        )
      );

      // Convert the array to a JSON string
      const base64ImagesJson = JSON.stringify(base64Images);
      formData.append('projectImages', base64ImagesJson);

      let data: any = await createProjectAPI(formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (data.status == 200) {
        onClose(false);
      }
      return true;
    } catch (error: unknown) {
      console.error(`Error on submitting the project edit form ::: ${error} `);
    }
  };

  useEffect(() => {
    if (isEdit && projectData) {
      reset(projectData);

      let editImages = projectData.projectImages?.map((currImage: any) => ({
        file: currImage?.secure_url,
        id: currImage?.asset_id,
        type: `image/${currImage?.format}`,
        size: currImage?.bytes,
      }));

      const currentFiles = getValues('projectImages');

      setValue('projectImages', [...editImages]);

      setSelectedImages((prev) => [...prev, ...editImages]);
      // Reset form with projectData when editing
    }
  }, [isEdit, projectData, reset]);

  return (
    <>
      <Modal
        title={isEdit ? 'Edit Project' : 'Create Project'}
        close={() => onClose(false)}
      >
        <form
          onSubmit={handleSubmit(
            isEdit ? onSubmitEditProject : onSubmitAddProject
          )}
          className="grid grid-cols-1 gap-6"
        >
          <Controller
            name="projectName"
            control={control}
            render={({ field }) => (
              <Input<ProjectInterface>
                {...field}
                label="Project Name"
                variant={false}
                type="text"
                id="projectName"
                error={errors.projectName}
                placeholder="Enter your Project name"
                variantBottomLine="ocean"
              />
            )}
          />

          {/* TODO: conver this field to select dropdown */}

          <Controller
            name="projectType"
            control={control}
            render={({ field }) => (
              <Input<ProjectInterface>
                {...field}
                label="Project Type"
                variant={false}
                type="text"
                id="projectType"
                error={errors.projectType}
                placeholder="Enter your project type"
                variantBottomLine="ocean"
              />
            )}
          />

          <Controller
            name="projectDescription"
            control={control}
            render={({ field }) => {
              return (
                <Input<ProjectInterface>
                  {...field}
                  label="Project Description"
                  variant={false}
                  type="textarea"
                  id="projectDescription"
                  error={errors.projectDescription}
                  placeholder="Enter your project description"
                  variantBottomLine="ocean"
                  fieldLimit={10000}
                  rows={5}
                />
              );
            }}
          />

          <Controller
            name="projectLocation"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Project Location"
                variant={false}
                type="text"
                id="projectLocation"
                error={errors.projectLocation}
                placeholder="Enter your project location"
                variantBottomLine="ocean"
              />
            )}
          />

          <Controller
            name="projectConstructionArea"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Project Area (sq. ft.)"
                variant={false}
                type="number"
                id="projectConstructionArea"
                error={errors.projectConstructionArea}
                placeholder="Enter your project area"
                variantBottomLine="ocean"
              />
            )}
          />

          <Controller
            name="projectImages"
            control={control}
            render={({ field }) => {
              return (
                <Dropzone
                  {...field}
                  label="Project Images"
                  type="file"
                  id="projectImages"
                  error={errors.projectImages}
                  onDrop={handleDrop}
                  selectedImages={selectedImages}
                  onRemoveImage={handleRemoveImage}
                  isEdit={isEdit}
                  setError={setError}
                  clearError={clearErrors}
                />
              );
            }}
          />

          <div className="grid grid-cols-2 gap-4 mt-2 ">
            <Button
              className="w-full"
              // isLoading={loader}
              type="reset"
              variant="darkFill"
              onClick={() => onClose(false)}
            >
              Cancel
            </Button>

            <Button
              className="w-full"
              isLoading={createProjectLoader || editProjectLoader}
              // isDisabled={createProjectLoader ?? false}

              isDisabled={!isDirty || createProjectLoader || editProjectLoader}
              type="submit"
              variant="darkFill"
            >
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ProjectModal;
