import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/comman/button';
import Input from 'components/comman/input';
import Modal from 'components/shared/modal';
import { ProjectTypeInterface } from 'pages/admin/types';
import React, { Dispatch, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import projectSchema from '../validations/project.validation';
import Dropzone from 'components/comman/dropzone';

interface ProjectFormInterface {
  projectData: ProjectTypeInterface | undefined;
  onSave?: () => void;
  onClose: Dispatch<React.SetStateAction<boolean>>;
  isEdit?: boolean;
}
const ProjectModal = (props: ProjectFormInterface) => {
  const { projectData, onClose, onSave, isEdit = false } = props;

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProjectTypeInterface>({
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

  const onSubmitEditProject = async (data: any) => {
    try {
      const formData = new FormData();

      console.log('🚀 ~ onSubmitEditProject ~ data:', data);
      console.log(projectData?.id);
      return true;
    } catch (error: unknown) {
      console.error(`Error on submitting the project edit form ::: ${error} `);
    }
  };

  const onSubmitAddProject = async (data: any) => {
    try {
      const formData = new FormData();

      console.log('🚀 ~ onSubmitAddProject ~ data:', data);
      return true;
    } catch (error: unknown) {
      console.error(`Error on submitting the project edit form ::: ${error} `);
    }
  };

  useEffect(() => {
    if (isEdit && projectData) {
      reset(projectData); // Reset form with projectData when editing
    }
  }, [isEdit, projectData, reset]);

  return (
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
            <Input<ProjectTypeInterface>
              {...field}
              label="Project Name"
              variant={false}
              type="text"
              id="projectName"
              //   name="projectName"
              register={register}
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
            <Input<ProjectTypeInterface>
              {...field}
              label="Project Type"
              variant={false}
              type="text"
              id="projectType"
              //   name="projectType"
              register={register}
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
              <Input<ProjectTypeInterface>
                {...field}
                label="Project Description"
                variant={false}
                type="textarea"
                id="projectDescription"
                // name="projectDescription"
                register={register}
                error={errors.projectDescription}
                placeholder="Enter your project description"
                variantBottomLine="ocean"
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
              //   name="projectLocation"
              register={register}
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
              //   name="projectConstructionArea"
              register={register}
              error={errors.projectConstructionArea}
              placeholder="Enter your project area"
              variantBottomLine="ocean"
            />
          )}
        />

        {/* <Controller
          name="projectImages"
          control={control}
          render={({ field }) => {
       
            console.log('🚀 ~ ProjectModal ~ field:', field);
            return (
              <Dropzone
                {...filed}
                label="Project Images"
                type="file"
                id="projectImages"
                register={register}
                error={errors.projectImages}
                ref={field.ref}
              />
            );
          }}
        /> */}

        <div className="grid grid-cols-2 gap-4 mt-2 ">
          <Button
            className="w-full"
            // isLoading={loader}
            type="reset"
            variant="darkFill"
            onClick={() => {}}
          >
            Cancel
          </Button>

          <Button
            className="w-full"
            // isLoading={loader}
            type="submit"
            variant="darkFill"
            onClick={(e) => {
              console.log('click');
              console.log('object :>> ');
              console.log('statusss', projectData);
            }}
          >
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProjectModal;
