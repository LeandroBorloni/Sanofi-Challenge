"use client"
import React, { useState, useEffect } from 'react';
import '../app/ExamesEConsultas/global.css';
import { TrashIcon } from '@heroicons/react/24/outline'
import { collection, addDoc, query, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 
import {db} from '../app/firebase.js';

function ConsultaForm() {
    const [dataConsulta, setDataConsulta] = useState('');
    const [nomeConsulta, setNome] = useState('');
    const [crmConsulta, setCrm] = useState('');
    const [especialidadeConsulta, setEspecialidadeMedico] = useState('');
    const [enderecoConsulta, setEnderecoConsulta] = useState('');
    const [obsConsulta, setObs] = useState('');
    const [consultasProximas, setConsultasProximas] = useState([]);
    const [consultasPassadas, setConsultasPassadas] = useState([]);
  
    //Quando o usuário chama essa função, essa função retornaria uma div
    function cadastroConsulta(e){
      e.preventDefault();
      
      // Processar os dados conforme necessário
      // Por exemplo, você pode validar os campos aqui
      
      // Adicionar a nova consulta ao array de consultas
      const novaConsulta = {
        dataConsulta,
        nomeConsulta,
        especialidadeConsulta,
        enderecoConsulta,
        obsConsulta,
      };
      
      const dataConsultaDate = new Date(dataConsulta);
      const dataAtual = new Date();
      
      if (dataConsultaDate > dataAtual) {
          // Consulta no futuro, adicione-a às "Próximas Consultas"
          setConsultasProximas([...consultasProximas, novaConsulta]);
      } else {
          // Consulta no passado, adicione-a às "Consultas Passadas"
          setConsultasPassadas([...consultasPassadas, novaConsulta]);
      }
  
      limparCampos(); // Limpa os campos após adicionar a consulta
      };
  
      const limparCampos = () => {
          setDataConsulta('');
          setNome('');
          setCrm('');
          setEspecialidadeMedico('');
          setEnderecoConsulta('');
          setObs('');
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
      
      useEffect(() => {
          const consultasProximasStorage = localStorage.getItem('consultasProximas');
          if (consultasProximasStorage) {
            setConsultasProximas(JSON.parse(consultasProximasStorage));
          }
      
          const consultasPassadasStorage = localStorage.getItem('consultasPassadas');
          if (consultasPassadasStorage) {
            setConsultasPassadas(JSON.parse(consultasPassadasStorage));
          }
      }, []);
  
      useEffect(() => {
          localStorage.setItem('consultasProximas', JSON.stringify(consultasProximas));
          localStorage.setItem('consultasPassadas', JSON.stringify(consultasPassadas));
      }, [consultasProximas, consultasPassadas]);
  
      //------------------------------- DATABASE ---------------------------------------
      const [consultas, setConsultas] = useState([])
      const [newConsulta, setNewConsulta] = useState({data:'', nome:'', especialidade:'',endereco:'',obs:'',crm:'' })
      // Add Item na base de dados
      const addItem = async (e) => {
          e.preventDefault()
          if (newConsulta.data !='' &&  newConsulta.nome !='' &&  newConsulta.especialidade !='' &&  newConsulta.endereco !='' &&  newConsulta.obs !='' &&  newConsulta.crm !=''){
              //setConsultas([...consultas, newConsulta])
              await addDoc(collection(db, 'consultas'), {
                  data: newConsulta.data,
                  nome: newConsulta.nome,
                  especialidade: newConsulta.especialidade ,                
                  endereco: newConsulta.endereco ,
                  obs: newConsulta.obs ,
                  crm: newConsulta.crm
              })
              setNewConsulta({data:'', nome:'', especialidade:'',endereco:'',obs:'',crm:'' })
          }
      }
      // Ler Item na base de dados
  
      useEffect(()=>{
          const q = query(collection(db, 'consultas'))
          onSnapshot(q, (QuerySnapshot) => {
              let consultasArr = []
  
              QuerySnapshot.forEach((doc) => {
                  consultasArr.push({...doc.data(), id: doc.id })
              });
              setConsultas(consultasArr)
          })
      },[])
      // Deletar Item na base de dados
      const excluirConsulta = async (id) => {
          await deleteDoc(doc(db, 'consultas', id))
      }

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
            {consultas.length > 0 && (
                <h1 className='mont text-3xl text-black text-center mt-10 font-medium'>
                Próximas Consultas
                </h1>
            )}

            <div className='flex flex-wrap justify-center items-center gap-20 mt-5'>
                {consultas.map((consulta, index) => (
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
            
                        <TrashIcon className='text-black cursor-pointer absolute top-5 right-5 mt-2 mr-2 w-7 ' onClick={() => excluirConsulta(consulta.id)} />
   
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

                    <div className='flex flex-wrap justify-center items-center gap-20 mt-5'>
                        {consultasPassadas.map((consulta, index) => (
                        <div key={index} className='consulta-item relative'>
                            <div className='resocel flex flex-col bg-[#8EBF9F] rounded-3xl w-[40rem] h-[20rem] p-5'>
                                <ul className='mt-5'>
                                    <li>
                                    <p className='mont text-black text-3xl text-normal leading-10'>
                                        Dia: {consulta.dataConsulta}
                                    </p>
                                    </li>
                                    <li>
                                    <p className='mont text-black text-3xl text-normal leading-10'>
                                        Médico: {consulta.nomeConsulta}
                                    </p>
                                    </li>
                                    <li>
                                    <p className='mont text-black text-3xl text-normal leading-10'>
                                        Especialidade: {consulta.especialidadeConsulta}
                                    </p>
                                    </li>
                                    <li>
                                        <p className='mont text-black text-3xl text-normal leading-10'>
                                            Observação: {consulta.obsConsulta}
                                        </p>
                                    </li>
                                </ul>
                                <p className='mont text-black text-3xl text-normal text-center mt-10'>
                                    Endereço: {consulta.enderecoConsulta}
                                </p>
                                <TrashIcon className='text-black cursor-pointer absolute top-5 right-5 mt-2 mr-2 w-7 ' onClick={() => handleDeleteConsulta(index, "passadas")} />
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
