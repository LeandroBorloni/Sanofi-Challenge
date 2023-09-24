import React from 'react';
import Link from 'next/link';
import './global.css';
import Metas from '@/components/Metas.jsx';
import UserMenu from '@/components/UserMenu';
import Chatbot from '@/components/WatsonAssistantChat.jsx';

export default function HomePaciente() {
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
            <h1 className='mont text-black italic text-4xl text-center mt-12'>
                Bem-vindo (a) de volta, Camila!
            </h1>
            <div className='bg-[#D3A7D9] cardverde mt-20 rounded-3xl ml-10 p-5'>
                <h2 className='text-black text-center mont text-3xl font-normal'>Lembrete! <br></br>Sua próxima consulta é:</h2>
                <div className='bg-[#AF75BF] lg:w-4/5 lg:h-2/5 rounded-3xl p-5 mt-5 lg:ml-5'>
                    <ul>
                        <li><p className='mont text-black text-2xl text-normal leading-10'>Dia: 30/09/2023</p></li>
                        <li><p className='mont text-black text-2xl text-normal leading-10'>Médico: Dr. Fabio Pimentel</p></li>
                        <li><p className='mont text-black text-2xl text-normal leading-10'>Especialidade: Clínico geral</p></li>
                    </ul>
                </div>
                <h3 className='mont text-black font-light text-2xl mt-5 ml-8'>Gostaria de modificar suas consultas?</h3>
                <div className='lg:mt-10 flex justify-center items-center bg-[#FCECF5] botaocard rounded-3xl ml-72'>
                    <span className='text-black text-normal text-center text-2xl'>Modificar Consulta</span>
                </div>
            </div>

            <div className='flex flex-row-reverse'>
                <div className='bg-[#D3A7D9] cardverde mt-20 rounded-3xl mr-10 p-5'>
                    <h2 className='text-black text-center mont text-3xl font-normal bg-[#AF75BF] rounded-3xl pt-4 pb-4'>Suas metas hoje são:</h2>
                    <Metas></Metas>
                </div>
            </div>
            


            <div className='flex flex-col bg-[#D3A7D9] cardverde mt-20 rounded-3xl ml-10 p-5 mb-28'>
                <h2 className='text-black mont text-3xl font-normal p-5 bg-[#AF75BF] rounded-3xl text-center'>Artigo do dia: </h2>
                <div className='divcelartigos flex h-2/3 pt-20'>
                    <p className='textocelartigos mont text-black text-2xl leading-10 text-medium w-4/6 pr-10 pl-4'>Leia nosso artigo sobre atividades físicas para descobrir como incorporar exercícios em sua rotina diária e melhorar sua saúde geral.</p>
                    <Link href='/AtvFisica'>
                        <div className='cardartigo flex flex-col bg-[#A65C41]'>
                            <img src='/images/atividade_fisica.svg'></img>
                            <div className='flex bg-white items-center justify-center'>
                                <p className='mont font-normal text-black text-xl'>Atividade Física</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='mont font-normal text-center text-sm w-2/3 pt-3'>Um Passo Vital para uma Vida Saudável</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Chatbot></Chatbot>
        </section>
        </>
    )
}