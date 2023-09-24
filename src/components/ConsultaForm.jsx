"use client"
import React, { useState } from 'react';
import '../app/ExamesEConsultas/global.css';
import { TrashIcon } from '@heroicons/react/24/outline'


function ConsultaForm() {
  const [dataConsulta, setDataConsulta] = useState('');
  const [nomeConsulta, setNome] = useState('');
  const [crmConsulta, setCrm] = useState('');
  const [especialidadeConsulta, setEspecialidadeMedico] = useState('');
  const [enderecoConsulta, setEnderecoConsulta] = useState('');
  const [obsConsulta, setObs] = useState('');
  const [consultas, setConsultas] = useState([]); // Array de consultas
  const [consultasProximas, setConsultasProximas] = useState([]);
  const [consultasPassadas, setConsultasPassadas] = useState([]);

  //Quando o usuário chama essa função, essa função retornaria uma div
  const cadastroConsulta = (e) => {
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
  return (
    <>
    <div>
        <div className='flex items-center justify-center mt-20'>
            <div className='flex flex-col bg-[#AF75BF] rounded-3xl w-4/5 h-[35rem] p-10'>
            <form onSubmit={cadastroConsulta} id="consultaForm">
                <div className='grid grid-cols-2 gap-10 '>
                <div className='flex w-[100%]'>
                    <label htmlFor='dataConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Data da Consulta/Exame: </label>
                    <input id='dataConsulta'
                    type="date"
                    value={dataConsulta}
                    onChange={(e) => setDataConsulta(e.target.value)}
                    className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>
                <div className='flex w-[100%]'>
                    <label htmlFor='crmConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>CRM do médico (opcional) :</label>
                    <input id='crmConsulta'
                    value={crmConsulta}
                    onChange={(e) => setCrm(e.target.value)}
                    className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>


                <div className='flex col-span-2 '>
                    <label htmlFor='nomeConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Nome do Médico: </label>
                    <input id='nomeConsulta'
                    value={nomeConsulta}
                    onChange={(e) => setNome(e.target.value)}
                    type="text" className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>

                <div className='flex w-[100%]'>
                    <label htmlFor='especialidadeConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Especialidade do Médico: </label>
                    <input id='especialidadeConsulta'
                    value={especialidadeConsulta}
                    onChange={(e) => setEspecialidadeMedico(e.target.value)}
                    type="text" className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>
                <div className='flex w-[100%]'>
                    <label htmlFor='enderecoConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Endereço da Consulta : </label>
                    <input id='enderecoConsulta'
                    value={enderecoConsulta}
                    onChange={(e) => setEnderecoConsulta(e.target.value)}
                    className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                </div>

                <div className='flex w-[100%]'>
                    <label htmlFor='obsConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/4'>Observações: </label>
                    <input id='obsConsulta'
                    value={obsConsulta}
                    onChange={(e) => setObs(e.target.value)}
                    type="text" className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-3/4 text-2xl'></input>
                </div>
                <div className='flex w-[100%] justify-center '>
                    <button className='flex bg-[#7A5597] rounded-3xl w-1/2 justify-center items-center'>
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
                <h1 className='mont text-3xl text-black text-center mt-10'>
                Próximas Consultas
                </h1>
            )}

            <div className='flex flex-wrap justify-center items-center gap-20 mt-5'>
                {consultasProximas.map((consulta, index) => (
                <div key={index} className='consulta-item relative'>
                    <div className='flex flex-col bg-[#AF75BF] rounded-3xl w-[40rem] h-[20rem] p-5'>
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
            
                        <TrashIcon className='text-black cursor-pointer absolute top-5 right-5 mt-2 mr-2 w-7 ' onClick={() => handleDeleteConsulta(index, "proximas")} />
   
                    </div>
                </div>
                ))}
            </div> 

            {/* Histórico consultas */}
            {consultasPassadas.length > 0 && (
                <div>
                    <h1 className='mont text-3xl text-black text-center mt-10'>
                        Histórico de Consultas
                    </h1>

                    <div className='flex flex-wrap justify-center items-center gap-20 mt-5'>
                        {consultasPassadas.map((consulta, index) => (
                        <div key={index} className='consulta-item relative'>
                            <div className='flex flex-col bg-[#8EBF9F] rounded-3xl w-[40rem] h-[20rem] p-5'>
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
