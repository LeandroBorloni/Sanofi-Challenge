import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { DocumentPlusIcon } from '@heroicons/react/24/outline'

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Chamada de uma função passada como prop quando um arquivo é carregado
      if (acceptedFiles.length > 0) {
        const uploadedFile = acceptedFiles[0];
        onFileUpload(uploadedFile);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf', // Aceita apenas arquivos PDF
    multiple: false, // Permite apenas um arquivo por vez
  });

  return (
    <div {...getRootProps()} className="border-dashed border-2 p-4 bg-[#B483BB]  mt-20">
      <input {...getInputProps()} />
      <p>Arraste e solte um arquivo PDF aqui ou clique para selecionar um.</p>
      <DocumentPlusIcon className='text-black w-7 cursor-pointer'></DocumentPlusIcon>
    </div>
  );
};

export default FileUpload;
