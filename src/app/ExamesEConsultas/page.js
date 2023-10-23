"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu';
import Form from '@/components/ConsultaForm.jsx';
import Upload from '@/components/FileUpload.jsx';
import { DocumentIcon } from '@heroicons/react/24/outline'
import { DocumentPlusIcon } from '@heroicons/react/24/outline'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function ExamesEConsultas() {
    
    // antes de editar
    const [pdfFiles, setPdfFiles] = useState([]);
  
    useEffect(() => {
        const storedPdfFiles = JSON.parse(localStorage.getItem('pdfFiles') || '[]');
        setPdfFiles(storedPdfFiles);
    }, []);
    useEffect(() => {
        localStorage.setItem('pdfFiles', JSON.stringify(pdfFiles));
    }, [pdfFiles]);

    const handleFileUpload = (file) => {
      // Lida com o arquivo carregado aqui, por exemplo, enviando-o para o servidor
      setPdfFiles([...pdfFiles, file]);
    };
    const viewPdf = (pdfFile) => {
        if (pdfFile) {
          // Cria uma URL temporária para visualização do PDF no navegador
          const pdfUrl = URL.createObjectURL(pdfFile);
          window.open(pdfUrl, '_blank');
        }
      };
    
    const downloadPdf = (pdfFile) => {
        if (pdfFile) {
            // Cria um link de download para o PDF
            const pdfUrl = URL.createObjectURL(pdfFile);
            const a = document.createElement('a');
            a.href = pdfUrl;
            a.download = pdfFile.name;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    const removePdf = (index) => {
        // Remova o PDF pelo índice na matriz de PDFs
        const updatedPdfFiles = [...pdfFiles];
        updatedPdfFiles.splice(index, 1);
        setPdfFiles(updatedPdfFiles);
    };

// ---------------------------------- FIREBASE -------------------------------------------
const [user, setUser] = useState(null);
useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      setUser(authUser); // Define o usuário no estado se estiver autenticado
      if (authUser) {
        console.log("Email do usuário:", authUser.email);
        console.log("Email do usuário:", authUser.uid);

      } else {
        console.log("Usuário não autenticado");
      }
    });
  }, []);

    

    return (
        <>
        <section className='flex flex-col'>
            <nav className='flex items-center justify-between bg-[#B483BB] p-4'>
                <div className='flex items-center'>
                    <img className='imagemlogo' src="/images/Logo.svg"></img>
                </div>
                <div className='flex items-center'>
                    <UserMenu></UserMenu>
                </div>
            </nav>
            <div className=' flex bg-[#AF75BF] items-center justify-center h-20' >
                <ul className='lg:gap-48 flex textonav'>
                    <Link href='/HomePaciente'><li>Home</li></Link>
                    <Link href='/ExamesEConsultas'><li>Exames & Consultas</li></Link>
                    <Link href='/SaudeEBemEstar'><li>Saúde & Bem estar</li></Link>
                    <Link href='/Artigos'><li>Artigos</li></Link>
                </ul>
            </div>
            <h1 className='mont text-black font-medium text-4xl mt-20 ml-12'>
                Registrar próxima Consulta
            </h1>
            <Form user={user} ></Form>
            <h1 className='uploadcel mont text-black font-medium text-4xl mt-20 ml-12 text-center'>
                Upload de exames
            </h1>
            {/* npm install react-dropzone que eu usei */}
            {/* <div className='flex flex-col items-center justify-center'>
                <Upload onFileUpload={handleFileUpload} />
                {pdfFiles.length > 0 ? (
                    <div className='flex flex-col  gap-10 mt-10'>
                        <h2 className='text-black mont'>PDF(s) Carregado(s):</h2>
                        <ul className='flex flex-wrap justify-center items-center gap-10'>
                            {pdfFiles.map((pdfFile, index) => (
                            <li key={index} className='flex flex-col bg-[#A65C41] gap-10 p-5 rounded-3xl justify-center items-center w-80 h-96'>
                                <p className='break-words font-bold mont'>Nome do arquivo: {pdfFile.name}</p>
                                <p>Tamanho do arquivo: {pdfFile.size} bytes</p>
                                <img src='/images/ImgPDF.svg' className='w-28'></img>
                                <div className='flex flex-col gap-2'>
                                    <button className='mont' onClick={() => viewPdf(pdfFile)}>Visualizar PDF</button>
                                    <button className='mont' onClick={() => downloadPdf(pdfFile)}>Baixar PDF</button>
                                    <button className='mont' onClick={() => removePdf(index)}>Remover PDF</button>
                                </div>
                            </li>
                            
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className='text-black text-xl mt-10 mb-12'>Nenhum PDF carregado.</p>
                )}
            </div> */}
            {/* <DocumentPlusIcon className='text-black w-7 '></DocumentPlusIcon> */}
            
        </section>
        </>
    )
}