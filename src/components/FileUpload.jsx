"use client"
import { useState, useEffect } from 'react';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import toast from 'react-hot-toast';

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          console.error('Usuário não autenticado');
          return;
        }

        const storage = getStorage();
        const storageRef = ref(storage, `exames/${user.uid}/${file.name}`);

        await uploadBytes(storageRef, file);

        onFileUpload(file);
        toast.success('Upload de arquivo com sucesso! Carregando...')
      } catch (error) {
        toast.error("Erro ao fazer o upload do arquivo:", error);
      }
    }
  };

  return (
    <div className="upcelbutton flex bg-[#A65C41] rounded-3xl w-1/2 h-100 p-5 mt-10 cursor-pointer gap-5 justify-center ">
      <label className="textupcel mont text-black font-medium text-3xl">
        Clique aqui para adicionar seus exames em PDF!
        <input type="file" accept=".pdf" style={{ display: 'none' }} onChange={handleFileChange} />
      </label>
      {/* <img src="../images/upload.svg" alt="Upload Icon" /> */}
    </div>
  );
};

export default FileUpload;

