"use client"
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { DocumentPlusIcon } from '@heroicons/react/24/outline'
import '@/app/ExamesEConsultas/global.css';

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
    <div {...getRootProps()} className="upcelbutton flex bg-[#A65C41] rounded-3xl w-1/2 h-[7rem] p-5 mt-10 cursor-pointer gap-5">
      <input {...getInputProps()} />
      <p className='textupcel mont text-black font-medium text-3xl ml-12 text-center'>Clique aqui para adicionar seus exames em pdf!</p>
      <img src="/images/Upload.svg"/>
      
    </div>
  );
};

export default FileUpload;
