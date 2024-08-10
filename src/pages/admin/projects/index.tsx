import React, { useEffect, useMemo, useState } from 'react';
import { useGetProjectAPI } from './services/project.service';
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
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);

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
          <div className="flex justify-center">
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
          <div className="flex justify-center">
            <DeleteIcon />
          </div>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    (async () => {
      let { data: projectGet, error } = await getProjectAPI();

      if (error) {
        console.error(`Error when fetching the projects`);
        return;
      }

      setProjectData(projectGet);
    })();
  }, []);

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
        />
      )}
    </div>
  );
};

export default AdminProjects;
