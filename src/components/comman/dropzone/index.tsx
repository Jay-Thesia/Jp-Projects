import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDropzone } from 'react-dropzone';

import {
  UseFormRegister,
  FieldValues,
  Path,
  Merge,
  FieldError,
  Control,
  FieldErrorsImpl,
  UseFormSetError,
  UseFormClearErrors,
} from 'react-hook-form';
import { FieldType } from '../input';
import { ProjectInterface } from 'pages/admin/types';

interface DropzonInterface<TFormValues extends FieldValues> {
  label: string;
  register?: UseFormRegister<TFormValues>;
  name: Path<TFormValues>;
  control?: Control<TFormValues>;
  error?:
    | Merge<FieldError, (FieldError | undefined)[]>
    | Merge<FieldError, (Merge<FieldError, FieldErrorsImpl> | undefined)[]>
    | undefined
    | any;

  setValue?: (value: string | undefined) => void;
  onChange?: (value: any) => void;
  isLoading?: boolean;
  value?: any;
  id?: string;
  className?: string;
  disabled?: boolean;
  type?: FieldType;
  variantBottomLine?: 'dark' | 'ocean';
  variant?: boolean;
  labelClass?: string;
  onDrop: (updatedFiles: { file: File; id: string }) => void;
  selectedImages: any[];
  onRemoveImage: any;
  isEdit: boolean;
  setError: UseFormSetError<ProjectInterface>;
  clearError: UseFormClearErrors<ProjectInterface>;
}

function Dropzone<TFormValues extends FieldValues>(
  props: DropzonInterface<TFormValues>
) {
  const {
    id,
    label,
    name,
    className,
    register,
    disabled,
    error,
    value,
    type,
    labelClass,
    variant,
    onChange,
    onDrop,
    selectedImages,
    onRemoveImage,
    isEdit,
    setError,
    clearError,
    ...rest
  } = props;

  const [uploadStatus, setUploadStatus] = useState('');

  const onDropHandler: any = useCallback(
    (acceptedFiles: File[], rejectedFiles: [{ [key: string]: any }]) => {
      if (rejectedFiles.length > 0) {
        setError('projectImages', {
          type: 'manual',
          message: rejectedFiles
            .map((file) => file.errors.map((error: any) => error.message))
            .flat()
            .join(', '),
        });
      } else {
        clearError('projectImages');
      }

      const newFiles: any = acceptedFiles.map((file) => ({
        file,
        id: URL.createObjectURL(file),
      }));
      onDrop(newFiles);
    },
    [onDrop]
  );

  const maxFileSize = 2 * 1024 * 1024; // 2 MB

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: onDropHandler,
    maxFiles: 10, // Limit number of files
    maxSize: maxFileSize,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': [],
      'image/webp': [],
      'image/heic': [],
      'image/jfif': [],
    },
  });

  // const onUpload = async () => {
  //   setUploadStatus('Uploading....');
  //   const formData = new FormData();
  //   selectedImages?.forEach((image) => {
  //     formData.append('file', image);
  //   });
  //   try {
  //     //   const response = await axios.post(
  //     //     'https://cloudinary-react-dropzone.vercel.app/api/upload',
  //     //     formData
  //     //   );
  //     //   console.log(response.data);
  //     setUploadStatus('upload successful');
  //   } catch (error) {
  //     console.log('imageUpload' + error);
  //     setUploadStatus('Upload failed..');
  //   }
  // };

  // const removeImage = (id: any) => {
  //   setSelectedImages((prevState) =>
  //     prevState.filter((image: any) => image.id !== id)
  //   );
  // };

  const style = useMemo(
    () => ({
      ...(isDragAccept ? { borderColor: '#00e676' } : {}),
      ...(isDragReject ? { borderColor: '#ff1744' } : {}),
    }),
    [isDragAccept, isDragReject]
  );

  return (
    <>
      {label ? (
        <label
          className={`${variant ? '' : 'text-dark text-base'} ${
            labelClass ? labelClass : ''
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      ) : (
        ''
      )}
      <div className="container">
        <div
          className="w-full h-40 mt-2 bg-gray-400 border-dashed border-2 border-black cursor-pointer flex justify-center items-center font-bold text-black"
          {...getRootProps({ style })}
        >
          <input disabled={disabled ?? false} {...getInputProps()} />{' '}
          {/* {...rest} is not need check */}
          {isDragActive ? (
            <p>Drop file(s) here ...</p>
          ) : (
            <p>Drag and drop file(s) here, or click to select files</p>
          )}
        </div>
        <div className="flex mt-4 ">
          {selectedImages.length > 0 &&
            selectedImages.map((image, index) => (
              <div key={image.id} className="relative inline-block mr-4">
                <img
                  className="w-12 h-12 border-dotted border-3 border-black"
                  src={image.id.includes('blob') ? image.id : image.file}
                  alt=""
                />

                <button
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                  onClick={() => onRemoveImage(image.id)}
                >
                  X
                </button>
              </div>
            ))}
        </div>
        {/* {selectedImages.length > 0 && (
          <div className="">
            <button onClick={onUpload}>Upload to Cloudinary</button>
            <p>{uploadStatus}</p>
          </div>
        )} */}

        {error && (
          <p className="text-base text-red-500 font-medium mt-1 inline-block">
            {error.message}
          </p>
        )}
      </div>
    </>
  );
}

export default Dropzone;
