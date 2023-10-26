import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import '../app/ExamesEConsultas/global.css';

import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const uploadedFile = acceptedFiles[0];

      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          console.error('Usuário não autenticado');
          return;
        }
        
        const userUid = user.uid;
        const storage = getStorage();
        const storageRef = ref(storage, `exames/${user.uid}/${uploadedFile.name}`);
        
        // Realiza o upload do arquivo para o Firebase Storage
        await uploadBytes(storageRef, uploadedFile);

        // Chama a função de callback passada como prop para lidar com o upload do arquivo
        onFileUpload(uploadedFile);
      } catch (error) {
        console.error("Erro ao fazer o upload do arquivo:", error);
      }
    }
  }, [onFileUpload]);
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf', // Aceita apenas arquivos PDF
    multiple: false, // Permite apenas um arquivo por vez
  });

  return (
    <div {...getRootProps()} className="upcelbutton flex bg-[#A65C41] rounded-3xl w-1/2 h-[7rem] p-5 mt-10 cursor-pointer gap-5">
      <input {...getInputProps()} />
      <p className='textupcel mont text-black font-medium text-3xl ml-12 text-center'>Clique aqui para adicionar seus exames em PDF!</p>
      <img src="/images/Upload.svg"/>
    </div>
  );
};

export default FileUpload;
