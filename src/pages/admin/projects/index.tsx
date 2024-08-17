import React, { useEffect, useMemo, useState } from 'react';
import {
  useDeleteProjectAPI,
  useGetProjectAPI,
} from './services/project.service';
import Table from 'components/comman/table';
import { DeleteIcon, EditIcon } from 'components/assets/svg';
import Modal from 'components/shared/modal';
import Button from 'components/comman/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { ProjectInterface } from '../types';
import projectSchema from './validations/project.validation';
import Input from 'components/comman/input';
import ProjectModal from './components/projectModal';

const AdminProjects = () => {
  // * * * * * * * * Hooks * * * * *
  const [projectData, setProjectData] = useState([]);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [selectedProjectData, setSelectedProjectData] =
    useState<ProjectInterface>({
      projectName: '',
      projectType: '',
      projectDescription: '',
      projectImages: [],
      projectLocation: '',
      projectConstructionArea: 0,
    });
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  // const {
  //   control,
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors: EditErrors, isDirty },
  // } = useForm<ProjectInterface>({
  //   resolver: yupResolver(projectSchema),
  //   defaultValues: {
  //     projectName: '',
  //     projectType: '',
  //     projectImages: [],
  //     projectLocation: '',
  //     projectDescription: '',
  //     projectConstructionArea: 0,
  //   },
  // });

  // * * * * API CALLS * * * *
  const { getProjectAPI, isLoading: ProjectLoader } = useGetProjectAPI();
  const {
    deleteProjectAPI,
    isError,
    isLoading: DeleteProjectLoader,
  } = useDeleteProjectAPI();

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'projectName',
      },
      {
        Header: 'Type',
        accessor: 'projectType',
      },

      {
        Header: 'Description',
        accessor: 'projectDescription',

        Cell: ({ value }: any) => (
          <>
            <div className=" max-w-32 max-h-32 overflow-hidden overflow-ellipsis whitespace-nowrap">
              {value}
            </div>
          </>
        ),
      },
      {
        Header: 'Location',
        accessor: 'projectLocation',
      },
      {
        Header: 'Construction Area',
        accessor: 'projectConstructionArea',
      },
      // {
      //   Header: 'Project Images',
      //   accessor: 'projectImages',
      // },
      {
        Header: 'Edit',
        accessor: 'edit_action',
        Cell: (row) => (
          <div className="flex justify-center cursor-pointer">
            <EditIcon
              onClick={() => {
                setSelectedProjectData(row.row.original);
                setEditModalVisible(true);
              }}
            />
          </div>
        ),
      },
      {
        Header: 'Delete',
        accessor: 'delete_action',
        Cell: (row: any) => (
          <div className="flex justify-center cursor-pointer">
            <DeleteIcon
              onClick={() => {
                setSelectedProjectData(row.row.original);
                setDeleteModalVisible(true);
              }}
            />
          </div>
        ),
      },
    ],
    []
  );

  const deleteProject = async (selectedProject: any) => {
    try {
      let data: any = await deleteProjectAPI({}, {}, selectedProject._id);

      if (data.status == 200) {
        setDeleteModalVisible(false);

        setProjectData((prev) =>
          prev.filter((curr: ProjectInterface, index: number) => {
            return curr._id != selectedProject._id;
          })
        );

        setSelectedProjectData((prev) => ({
          ...prev,
          ...{ projectLocation: '' },
        }));
      }
    } catch (error) {
      console.log(`Error in deleting project ::: ${error}`);
    }
  };

  useEffect(() => {
    (async () => {
      let { data: projectGet, error } = await getProjectAPI();

      if (error) {
        console.error(`Error when fetching the projects`);
        return;
      }
      console.log('esofjsoi');

      setProjectData(projectGet);
    })();
  }, [selectedProjectData]);

  return (
    <div className=" mt-10">
      <div className="mx-10  flex justify-between">
        <div className=" text-2xl">Project Data</div>
        <Button variant="darkFill" onClick={() => setAddModalVisible(true)}>
          Add
        </Button>
      </div>
      <Table columns={columns} data={projectData} />

      {/* Add modal  */}
      {addModalVisible && (
        <ProjectModal projectData={undefined} onClose={setAddModalVisible} />
      )}

      {/* edit modal */}
      {editModalVisible && selectedProjectData && (
        <ProjectModal
          projectData={selectedProjectData}
          onClose={setEditModalVisible}
          isEdit={true}
          setSelectedProjectData={setSelectedProjectData}
        />
      )}

      {/* delete modal */}
      {deleteModalVisible && selectedProjectData && (
        <Modal
          title="Delete Project"
          close={() => setDeleteModalVisible(false)}
        >
          <div className="mb-10 font-bold text-lg">
            Are you sure you want to delete this project ?
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2 ">
            <Button
              className="w-full"
              // isLoading={loader}
              type="reset"
              variant="darkFill"
              onClick={() => setDeleteModalVisible(false)}
            >
              Cancel
            </Button>

            <Button
              className="w-full"
              isLoading={false}
              isDisabled={false}
              type="submit"
              variant="danger"
              onClick={async () => await deleteProject(selectedProjectData)}
            >
              Delete
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AdminProjects;
