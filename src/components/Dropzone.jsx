import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Dropzone({ onChange, options }) {
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      console.log(rejectedFiles);
      if (rejectedFiles.length > 0) {
        console.log(rejectedFiles[0].errors[0].message);
        return;
      }
      onChange(acceptedFiles[0]);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    ...options,
  });

  return (
    <div
      {...getRootProps()}
      className="flex items-center justify-center flex-col h-full w-full aspect-video border-2 border-dashed py-10 px-5 cursor-pointer hover:border-black duration-200"
    >
      <input {...getInputProps()} />

      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="text-indigo-600 font-medium">
          Choose files or drag and drop
        </div>
      )}
    </div>
  );
}
