import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import {
  UseFormRegister,
  FieldValues,
  Path,
  Merge,
  FieldError,
  Control,
  FieldErrorsImpl,
} from 'react-hook-form';
import { FieldType } from '../input';

interface DropzonInterface<TFormValues extends FieldValues> {
  label: string;
  register?: UseFormRegister<TFormValues>;
  name: Path<TFormValues>;
  control?: Control<TFormValues>;
  error?:
    | Merge<FieldError, (FieldError | undefined)[]>
    | Merge<FieldError, (Merge<FieldError, FieldErrorsImpl> | undefined)[]>
    | undefined;

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
}

const Dropzone = <TFormValues extends FieldValues>(
  props: DropzonInterface<TFormValues>,
  ref: React.Ref<HTMLInputElement>
) => {
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
    ...rest
  } = props;
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const onDrop: any = useCallback(
    (acceptedFiles: File[], rejectedFiles: [string]) => {
      setSelectedImages((prevState) => [
        ...prevState,
        ...acceptedFiles.map((file) => ({
          file,
          id: URL.createObjectURL(file),
        })),
      ]);
      // Handle onChange from react-hook-form
      if (onChange) onChange(acceptedFiles);
    },
    [onChange]
  );

  const maxFileSize = 5 * 1024 * 1024; // 5 MB
  const acceptedFiles = '.png,.jpg,.jpeg,.gif';

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    // accept: acceptedFiles,
    maxFiles: 10, // Limit number of files
    maxSize: maxFileSize,
  });

  const onUpload = async () => {
    setUploadStatus('Uploading....');
    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append('file', image);
    });
    try {
      //   const response = await axios.post(
      //     'https://cloudinary-react-dropzone.vercel.app/api/upload',
      //     formData
      //   );
      //   console.log(response.data);
      setUploadStatus('upload successful');
    } catch (error) {
      console.log('imageUpload' + error);
      setUploadStatus('Upload failed..');
    }
  };

  const removeImage = (id: any) => {
    setSelectedImages((prevState) =>
      prevState.filter((image: any) => image.id !== id)
    );
  };

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
          <input
            id={id}
            disabled={disabled ?? false}
            {...getInputProps()}
            // {...(register ? register(name) : {})}
            value={value}
            type={type ?? 'file'}
            ref={ref}
            {...rest}
          />
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
                  src={image.id}
                  alt=""
                />

                {/* <button
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                onClick={() => removeImage(image.id)}
              >
                X
              </button> */}
              </div>
            ))}
        </div>
        {selectedImages.length > 0 && (
          <div className="">
            <button onClick={onUpload}>Upload to Cloudinary</button>
            <p>{uploadStatus}</p>
          </div>
        )}

        {error && (
          <p className="text-base text-red-500 font-medium mt-1 inline-block">
            {error.message}
          </p>
        )}
      </div>
    </>
  );
};

export default forwardRef(Dropzone);
