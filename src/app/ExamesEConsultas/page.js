import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu';
import Form from '@/components/ConsultaForm.jsx';

export default function ExamesEConsultas() {
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
                <ul className='flex gap-48 textonav'>
                    <Link href='/HomePaciente'><li>Home</li></Link>
                    <Link href='/ExamesEConsultas'><li>Exames & Consultas</li></Link>
                    <Link href='/SaudeEBemEstar'><li>Saúde & Bem estar</li></Link>
                    <Link href='/Artigos'><li>Artigos</li></Link>
                </ul>
            </div>
            <h1 className='mont text-black font-medium text-4xl mt-20 ml-12'>
                Registrar próxima Consulta
            </h1>
            <div className='flex items-center justify-center mt-20'>
                <div className='flex flex-col bg-[#AF75BF] rounded-3xl w-4/5 h-[35rem] p-10'>
                    <form id="consultaForm">
                        <div className='grid grid-cols-2 gap-10 '>
                            <div className='flex w-[100%]'>
                                <label htmlFor='dataConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Data da Consulta/Exame: </label>
                                <input id='dataConsulta' type="date" className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                            </div>
                            <div className='flex w-[100%]'>
                                <label htmlFor='crmConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>CRM do médico (opcional) :</label>    
                                <input id='crmConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                            </div>
                            
                            
                            <div className='flex col-span-2 '>
                                <label htmlFor='nomeConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Nome do Médico: </label>
                                <input id='nomeConsulta' type="text" className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                            </div>

                            <div className='flex w-[100%]'>
                                <label htmlFor='especialidadeConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Especialidade do Médico: </label>
                                <input id='especialidadeConsulta' type="text" className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                            </div>
                            <div className='flex w-[100%]'>
                                <label htmlFor='enderecoConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2'>Endereço da Consulta : </label>
                                <input id='enderecoConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                            </div>
                              
                            <div className='flex w-[100%]'>
                                <label htmlFor='obsConsulta' className='bg-[#EAD5FB] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/4'>Observações: </label>
                                <input id='obsConsulta' type="text" className='bg-[#EAD5FB] text-center text-black mont rounded-r-3xl p-5 font-light w-3/4 text-2xl'></input>
                            </div>
                            <div className='flex w-[100%] justify-center '>
                                <div className='flex bg-[#7A5597] rounded-3xl w-1/2 justify-center items-center'>
                                    <span className='mont font-light text-2xl'>Salvar Consulta</span>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            <h1 className='mont text-black font-medium text-4xl mt-20 ml-12'>
                Próximas consultas
            </h1>
            <div className='flex'>
                <div className='flex items-center mt-10 ml-40'>
                    <div className='flex flex-col bg-[#AF75BF] rounded-3xl w-[40rem] h-[20rem] p-5'>
                        <ul className='mt-5'>       
                            <li><p className='mont text-black text-3xl text-normal leading-10 mb-5'>Dia: 30/09/2023</p></li>
                            <li><p className='mont text-black text-3xl text-normal leading-10 mb-5'>Médico: Dr. Fabio Pimentel</p></li>
                            <li><p className='mont text-black text-3xl text-normal leading-10'>Especialidade: Clínico geral</p></li>
                        </ul>
                        <p className='mont text-black text-3xl text-normal text-center mt-10'>Endereço: Hospital Saúde - Rua Medicina Vesti, 123</p>
                    </div>
                </div>
                
                <div className='flex items-center mt-10 ml-40'>
                    <div className='flex flex-col bg-[#AF75BF] rounded-3xl w-[40rem] h-[20rem] p-5'>
                        <ul className='mt-5'>       
                            <li><p className='mont text-black text-3xl text-normal leading-10 mb-5'>Dia: 30/09/2023</p></li>
                            <li><p className='mont text-black text-3xl text-normal leading-10 mb-5'>Médico: Dr. Fabio Pimentel</p></li>
                            <li><p className='mont text-black text-3xl text-normal leading-10'>Especialidade: Clínico geral</p></li>
                        </ul>
                        <p className='mont text-black text-3xl text-normal text-center mt-10'>Endereço: Hospital Saúde - Rua Medicina Vesti, 123</p>
                    </div>
                </div>
            </div>
            <h1 className='mont text-black font-medium text-4xl mt-20 ml-12'>
                Histórico de consultas 
            </h1>
            <div className='flex'>
                <div className='flex items-center mt-10 ml-40'>
                    <div className='flex flex-col bg-[#8EBF9F] rounded-3xl w-[40rem] h-[20rem] p-5'>
                        <ul className='mt-5'>       
                            <li><p className='mont text-black text-3xl text-normal leading-10 mb-5'>Dia: 30/09/2023</p></li>
                            <li><p className='mont text-black text-3xl text-normal leading-10 mb-5'>Médico: Dr. Fabio Pimentel</p></li>
                            <li><p className='mont text-black text-3xl text-normal leading-10'>Especialidade: Clínico geral</p></li>
                        </ul>
                        <p className='mont text-black text-3xl text-normal text-center mt-10'>Endereço: Hospital Saúde - Rua Medicina Vesti, 123</p>
                    </div>
                </div>
                
                <div className='flex items-center mt-10 ml-40'>
                    <div className='flex flex-col bg-[#8EBF9F] rounded-3xl w-[40rem] h-[20rem] p-5'>
                        <ul className='mt-5'>       
                            <li><p className='mont text-black text-3xl text-normal leading-10 mb-5'>Dia: 30/09/2023</p></li>
                            <li><p className='mont text-black text-3xl text-normal leading-10 mb-5'>Médico: Dr. Fabio Pimentel</p></li>
                            <li><p className='mont text-black text-3xl text-normal leading-10'>Especialidade: Clínico geral</p></li>
                        </ul>
                        <p className='mont text-black text-3xl text-normal text-center mt-10'>Endereço: Hospital Saúde - Rua Medicina Vesti, 123</p>
                    </div>
                </div>
            </div>
            <h1 className='mont text-black font-medium text-4xl mt-20 ml-12 text-center'>
                Upload de exames
            </h1>
            <div className='flex flex-col bg-[#A65C41] rounded-3xl w-1/2 h-[5rem] p-5 mt-10 '>
                <div className='flex justify-center'>
                    <h1 className='mont text-black font-medium text-4xl mr-3'>
                        Clique aqui para adicionar seus exames em pdf!
                    </h1>
                    <img className='w-7' src='/images/Upload.svg'></img>
                </div>
            </div>


            <Form></Form>
        </section>
        </>
    )
}