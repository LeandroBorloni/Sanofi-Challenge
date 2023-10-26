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
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage";


export default function ExamesEConsultas() {
    
    // antes de editar
    const [pdfFiles, setPdfFiles] = useState([]);
    const [user, setUser] = useState(null);
    const handleFileUpload = async (file) => {
        const auth = getAuth();
        const user = auth.currentUser;
        try {
          const storage = getStorage();
          const storageRef = ref(storage, `exames/${user.uid}/${file.name}`);
      
          // Realiza o upload do arquivo para o Firebase Storage
          await uploadBytes(storageRef, file);
      
          // Atualize o estado dos arquivos PDF (se necessário)
          // Como o Firebase Storage é baseado na nuvem, você pode optar por não manter o controle local dos arquivos.
          // Se você desejar, pode adicionar um estado ou usar a referência do arquivo para exibi-los posteriormente.
          // Se você optar por manter um controle local, você pode fazer algo como:
           setPdfFiles([...pdfFiles, file]);
      
          console.log('Arquivo enviado com sucesso para o Firebase Storage');
        } catch (error) {
          console.error('Erro ao fazer upload do arquivo:', error);
        }
      };
      
      const fetchPdfFiles = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        try {
          const storage = getStorage();
          const examesRef = ref(storage, `exames/${user.uid}`); // Referência à pasta de exames
          // Liste todos os itens na pasta 'exames'
          const files = await listAll(examesRef);
            
          // Mapeie os arquivos retornados para obter os nomes
          const pdfFilePromises = files.items.map(async (file) => {
            // Obtenha o URL do arquivo
            const url = await getDownloadURL(file);
            return {
              name: file.name,
              url: url, // Armazene o URL
            };
          });
          
    
          // Aguarde a conclusão de todas as promessas
          const pdfFilesData = await Promise.all(pdfFilePromises);
          
          // Atualize o estado com os dados dos arquivos
          setPdfFiles(pdfFilesData);
        } catch (error) {
          console.error('Erro ao buscar os arquivos do Firebase Storage:', error);
        }
      };
      
      const viewPdf = (pdfFile) => {
        if (pdfFile) {
            window.open(pdfFile.url, '_blank');
        }
    };
    
    const downloadPdf = async (pdfFile) => {
        if (pdfFile) {
            try {
                const response = await fetch(pdfFile.url);
                const blob = await response.blob();
    
                const a = document.createElement('a');
                const url = window.URL.createObjectURL(blob);
                
                a.href = url;
                a.download = pdfFile.name;
                a.style.display = 'none';
                
                document.body.appendChild(a);
                a.click();
                
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } catch (error) {
                console.error('Erro ao fazer download do PDF:', error);
            }
        }
    };
    
    
    const removePdf = async (index) => {
        try {
            const pdfFile = pdfFiles[index];
            if (pdfFile) {
                const auth = getAuth();
                const user = auth.currentUser;
                const storage = getStorage();
                const fileRef = ref(storage, `exames/${user.uid}/${pdfFile.name}`);
    
                // Exclua o arquivo no Firebase Storage
                await deleteObject(fileRef);
    
                // Remova o PDF da matriz local
                const updatedPdfFiles = [...pdfFiles];
                updatedPdfFiles.splice(index, 1);
                setPdfFiles(updatedPdfFiles);
    
                console.log('PDF removido com sucesso do Firebase Storage');
            }
        } catch (error) {
            console.error('Erro ao remover o PDF:', error);
        }
    };
    

    // ---------------------------------- FIREBASE -------------------------------------------
    
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (authUser) => {
        setUser(authUser); // Define o usuário no estado se estiver autenticado
        if (authUser) {
            console.log("Email do usuário:", authUser.email);
            console.log("Email do usuário:", authUser.uid);
            fetchPdfFiles();
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
             <div className='flex flex-col items-center justify-center'>
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
                                    {/* <button className='mont' onClick={() => downloadPdf(pdfFile)}>Baixar PDF</button> */}
                                    <button className='mont' onClick={() => removePdf(index)}>Remover PDF</button>
                                </div>
                            </li>
                            
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className='text-black text-xl mt-10 mb-12'>Nenhum PDF carregado.</p>
                )}
            </div> 
             {/* <DocumentPlusIcon className='text-black w-7 '></DocumentPlusIcon>  */}
            
        </section>
        </>
    )
}