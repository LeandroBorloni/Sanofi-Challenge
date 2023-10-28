"use client"
import React, { useState, useEffect } from 'react';
import '../app/ExamesEConsultas/global.css';
import { TrashIcon } from '@heroicons/react/24/outline'
import { collection, addDoc, query, onSnapshot, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";

import {db} from '../app/firebase.js';
import toast from 'react-hot-toast';

function ConsultaForm({user}) {
    const [dataConsulta, setDataConsulta] = useState('');
    const [nomeConsulta, setNome] = useState('');
    const [crmConsulta, setCrm] = useState('');
    const [especialidadeConsulta, setEspecialidadeMedico] = useState('');
    const [enderecoConsulta, setEnderecoConsulta] = useState('');
    const [obsConsulta, setObs] = useState('');
    const [consultasProximas, setConsultasProximas] = useState([]);
    const [consultasPassadas, setConsultasPassadas] = useState([]);

    //Quando o usuário chama essa função, essa função retornaria uma div
    function cadastroConsulta(e) {

        e.preventDefault();
    
      
        limparCampos();
      }
      
    
        const limparCampos = () => {
            setDataConsulta('');
            setNome('');
            setCrm('');
            setEspecialidadeMedico('');
            setEnderecoConsulta('');
            setObs('');
            setNewConsulta({
                data: '',
                nome: '',
                especialidade: '',
                endereco: '',
                obs: '',
                crm: '',
              });
        };
    
        const handleDeleteConsulta = (index, type) => {
            if (type === "proximas") {
                const updatedConsultasProximas = [...consultasProximas];
                updatedConsultasProximas.splice(index, 1);
                setConsultasProximas(updatedConsultasProximas);
            } else if (type === "passadas") {
                const updatedConsultasPassadas = [...consultasPassadas];
                updatedConsultasPassadas.splice(index, 1);
                setConsultasPassadas(updatedConsultasPassadas);
            }
        };
      
      //------------------------------- DATABASE ---------------------------------------
    const [consultas, setConsultas] = useState([])
    const [newConsulta, setNewConsulta] = useState({data:'', nome:'', especialidade:'',endereco:'',obs:'',crm:'' })
    // Add Item na base de dados
    const addItem = async () => {
        console.log("Função addItem chamada ")
        if (!user) {
          toast.error("Usuário não autenticado. Não é possível adicionar consulta.");
          return;
        }
      
        const novaConsulta = {
          data: newConsulta.data,
          nome: newConsulta.nome,
          especialidade: newConsulta.especialidade,
          endereco: newConsulta.endereco,
          obs: newConsulta.obs,
          crm: newConsulta.crm,
        };
      
        try {
          const userDocRef = doc(db, 'usuarios', user.uid);
          const userDocSnapshot = await getDoc(userDocRef);
      
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();

            if (!userData.consultas) {
              userData.consultas = [];
            }
            
            userData.consultas.push(novaConsulta);
      
            await setDoc(userDocRef, userData);
            toast.success("Consulta adicionada com sucesso!");
      
            // Atualize o estado 'consultas' com as consultas do usuário
            setConsultas(userData.consultas);
            setNewConsulta({ data: '', nome: '', especialidade: '', endereco: '', obs: '', crm: '' });
            
            const dataConsultaDate = new Date(novaConsulta.data);
            const dataAtual = new Date();
            if (dataConsultaDate > dataAtual) {
              setConsultasProximas([...consultasProximas, novaConsulta]);
            } else {
              setConsultasPassadas([...consultasPassadas, novaConsulta]);
            }
        } 
        else {
          toast.error("Documento do usuário não encontrado.");
        }
    } catch (error) {
      console.log("Erro ao adicionar consulta:", error);
    }
      };
    
    
    // Ler Item na base de dados
    useEffect(() => {
        if (!user) {
          return; // Não há usuário autenticado, então não há nada para buscar
        }
        const fetchData = async () => {
          try {
            const userDocRef = doc(db, 'usuarios', user.uid);
            const userDocSnapshot = await getDoc(userDocRef);
      
            if (userDocSnapshot.exists()) {
              const userData = userDocSnapshot.data();
      
              if (userData.consultas) {
                const consultasProximasTemp = [];
                const consultasPassadasTemp = [];
      
                userData.consultas.forEach((consulta, i) => {
                  const dataConsultaDate = new Date(consulta.data);
                  const dataAtual = new Date();
      
                  if (dataConsultaDate > dataAtual) {
                    const consultaComId = { ...consulta, id: userDocSnapshot.id };
                    consultasProximasTemp.push(consultaComId);
                  } else {
                    const consultaComId = { ...consulta, id: userDocSnapshot.id };
                    consultasPassadasTemp.push(consultaComId);
                  }
                });
      
                setConsultasProximas(consultasProximasTemp);
                setConsultasPassadas(consultasPassadasTemp);
              } else {
                setConsultas([]); // Defina um array vazio se o usuário não tiver consultas
              }
            } else {
              toast.error("Documento do usuário não encontrado.");
            }
          } catch (error) {
            toast.error("Erro ao buscar consultas do usuário:", error);
          }
        };
      
        fetchData(); // Chame a função fetchData para buscar os dados quando o usuário estiver disponível.
      }, [user]);
      
      

    
    // Deletar Item na base de dados
    const excluirConsulta = async (data, nome) => {
        if (!user) {
          toast.error("Usuário não autenticado. Não é possível excluir consulta.");
          return;
        }
      
        try {
          const userDocRef = doc(db, 'usuarios', user.uid);
          const userDocSnapshot = await getDoc(userDocRef);
      
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
      
            if (userData.consultas) {
                // Verifique se a consulta com o ID especificado existe no array
                const consultaIndex = userData.consultas.findIndex((consulta) => consulta.data === data && consulta.nome === nome );
                
                if (consultaIndex !== -1) {
                    // Remova a consulta com o ID correspondente
                    userData.consultas.splice(consultaIndex, 1);
        
                    // Atualize o documento do usuário no banco de dados
                    await setDoc(userDocRef, userData);
        
                    // Atualize o estado 'consultas' com as consultas do usuário, removendo a consulta excluída
                    setConsultas(userData.consultas);

                    const updatedProximas = userData.consultas.filter(
                      (consulta) => new Date(consulta.data) > new Date()
                    );
                    const updatedPassadas = userData.consultas.filter(
                        (consulta) => new Date(consulta.data) <= new Date()
                    );
                    setConsultasProximas(updatedProximas);
                    setConsultasPassadas(updatedPassadas);

                    toast.success("Consulta excluída com sucesso!");
                } else {
                    toast.error("Consulta com o ID especificado não encontrada.");
                }
            } else {
              toast.error("Nenhuma consulta encontrada para o usuário.");
            }
        } else {
            toast.error("Documento do usuário não encontrado.");
        }
    } catch (error) {
        toast.error("Erro ao excluir consulta:", error);
    }
};
      
    

  return (
    <>
    <div>
        <div className='flex items-center justify-center mt-20'>
            <div className='divcel flex flex-col bg-[#AF75BF] rounded-3xl w-4/5 h-[35rem] p-10'>
            <form onSubmit={cadastroConsulta} id="consultaForm">
                <div className='gridcel grid grid-cols-2 gap-10 '>
                <div className='datacel flex w-[100%]'>
                    <label htmlFor='dataConsulta' className='textcel bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Data da Consulta/Exame: </label>
                    <input id='dataConsulta'
                    type="date"
                    value={newConsulta.data}
                    onChange={(e) => setNewConsulta({...newConsulta, data: e.target.value})}
                    className='textcelinput bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>
                <div className='datacel flex w-[100%]'>
                    <label htmlFor='crmConsulta' className='textcelcrm bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>CRM do médico (opcional) :</label>
                    <input id='crmConsulta'
                    value={newConsulta.crm}
                    onChange={(e) => setNewConsulta({...newConsulta, crm: e.target.value})}
                    className='textcelinput bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>


                <div className='datacel flex col-span-2 '>
                    <label htmlFor='nomeConsulta' className='textcel bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Nome do Médico: </label>
                    <input id='nomeConsulta'
                    value={newConsulta.nome}
                    onChange={(e) => setNewConsulta({...newConsulta, nome: e.target.value})}
                    type="text" className='textcelinput bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>

                <div className='datacel flex w-[100%]'>
                    <label htmlFor='especialidadeConsulta' className='textcelespec bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Especialidade do Médico: </label>
                    <input id='especialidadeConsulta'
                    value={newConsulta.especialidade}
                    onChange={(e) => setNewConsulta({...newConsulta, especialidade: e.target.value})}
                    type="text" className='textcelinput bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>
                <div className='datacel flex w-[100%]'>
                    <label htmlFor='enderecoConsulta' className='textcel bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Endereço da Consulta : </label>
                    <input id='enderecoConsulta'
                    value={newConsulta.endereco}
                    onChange={(e) => setNewConsulta({...newConsulta, endereco: e.target.value})}
                    className='textcelinput bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>

                <div className='datacel flex w-[100%]'>
                    <label htmlFor='obsConsulta' className='textcel bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Observações: </label>
                    <input id='obsConsulta'
                    value={newConsulta.obs}
                    onChange={(e) => setNewConsulta({...newConsulta, obs: e.target.value})}
                    type="text" className='textcelinput bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-3/4 text-2xl'></input>
                </div>
                <div className='flex w-[100%] justify-center '>
                    <button
                     onClick={addItem}
                     className='flex bg-[#7A5597] rounded-3xl w-1/2 justify-center items-center'>
                    <span className='mont font-light text-2xl'>Salvar Consulta</span>
                    </button>
                </div>

                </div>
            </form>
            </div>
        </div>
        {/* Encerra o formulario */}

        <div className='flex flex-col w-100% items-center justify-center'>
            
            {/* Próximas consultas */}
            {consultasProximas.length > 0 && (
                <h1 className='mont text-3xl text-black text-center mt-10 font-medium'>
                Próximas Consultas
                </h1>
            )}

            <div id='proximas_consultas' className='flex flex-wrap justify-center items-center gap-20 mt-5'>
                {consultasProximas.map((consulta, index) => (
                <div key={index} className='consulta-item relative'>
                    <div className='resocel flex flex-col bg-[#AF75BF] rounded-3xl w-[40rem] h-[20rem] p-5'>
                        <ul className='mt-5'>
                            <li>
                                <p className='mont text-black text-3xl text-normal leading-10'>
                                    Dia: {consulta.data}
                                </p>
                            </li>
                            <li>
                                <p className='mont text-black text-3xl text-normal leading-10'>
                                    Médico: {consulta.nome}
                                </p>
                            </li>
                            <li>
                                <p className='mont text-black text-3xl text-normal leading-10'>
                                    Especialidade: {consulta.especialidade}
                                </p>
                            </li>
                            <li>
                                <p className='mont text-black text-3xl text-normal leading-10'>
                                    Observação: {consulta.obs}
                                </p>
                            </li>
                        </ul>
                        <p className='mont text-black text-3xl text-normal text-center mt-10'>
                            Endereço: {consulta.endereco}
                        </p>
            
                        <TrashIcon className='text-black cursor-pointer absolute top-5 right-5 mt-2 mr-2 w-7 ' onClick={() => excluirConsulta(consulta.data, consulta.nome)} />
   
                    </div>
                </div>
                ))}
            </div> 

            {/* Histórico consultas */}
            {consultasPassadas.length > 0 && (
                <div>
                    <h1 className='mont text-3xl text-black text-center mt-10 font-medium'>
                        Histórico de Consultas
                    </h1>

                    <div id='historico_consultas' className='flex flex-wrap justify-center items-center gap-20 mt-5'>
                        {consultasPassadas.map((consulta, index) => (
                        <div key={index} className='consulta-item relative'>
                            <div className='resocel flex flex-col bg-[#8EBF9F] rounded-3xl w-[40rem] h-[20rem] p-5'>
                                <ul className='mt-5'>
                                    <li>
                                    <p className='mont text-black text-3xl text-normal leading-10'>
                                        Dia: {consulta.data}
                                    </p>
                                    </li>
                                    <li>
                                    <p className='mont text-black text-3xl text-normal leading-10'>
                                        Médico: {consulta.nome}
                                    </p>
                                    </li>
                                    <li>
                                    <p className='mont text-black text-3xl text-normal leading-10'>
                                        Especialidade: {consulta.especialidade}
                                    </p>
                                    </li>
                                    <li>
                                        <p className='mont text-black text-3xl text-normal leading-10'>
                                            Observação: {consulta.obs}
                                        </p>
                                    </li>
                                </ul>
                                <p className='mont text-black text-3xl text-normal text-center mt-10'>
                                    Endereço: {consulta.endereco}
                                </p>
                                <TrashIcon className='text-black cursor-pointer absolute top-5 right-5 mt-2 mr-2 w-7 ' onClick={() => excluirConsulta(consulta.data, consulta.nome)} />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Aqui em cima acaba o histórico */}
        </div>

    </div>
    </>
  );
}

export default ConsultaForm;
