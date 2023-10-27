"use client"
import React, { useState } from 'react';

import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline'
import './global.css';
import Calendario from '@/components/MonthlyCalendar.jsx';
import Semanal from '@/components/WeeklyCalendar.jsx';
import UserMenu from '@/components/UserMenu';
import Metas from '@/components/Metas.jsx';
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Josefin_Sans } from 'next/font/google';

export default function SaudeEBemEstar() {
    const [calendarioSelecionado, setCalendarioSelecionado] = useState('semanal'); // Inicialmente, exibe o calendário semanal

    const mostrarCalendario = (calendario) => {
        setCalendarioSelecionado(calendario);
    };
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
                <div className='flex flex-col justify-center items-center mt-10 gap-10'>
                    <h1 className='checkcel mont text-black text-4xl'>Checklist Personalizado</h1>
                    <p className='mont text-black text-center text-2xl italic px-8'>Monte sua rotina de forma personalizada para o seu dia-a-dia! Estabeleça metas diárias e semanais para manter sua saúde integrada. Física, mental e espiritual.</p>
                    <img src='/images/LineCadastro.svg'></img>
                </div>
                {/* <div className='metascel flex flex-col w-1/3 ml-10 mt-20'>
                    <div className=' bg-[#7AA188] rounded-t-3xl h-16'>
                        <h2 className='mont text-normal text-black text-center text-3xl leading-10 mt-2'>Suas metas são:</h2>
                    </div>
                    <div className='metasbgcel flex flex-col bg-[#8EBF9F] rounded-b-3xl h-[20rem]'>
                        <Metas></Metas>
                    </div>
                </div> */}

                <div className='flex flex-col justify-center items-center mt-20'>
                    <h1 className='metastextcel mont text-black text-3xl'>Adicione metas para seus dias!</h1>
                </div>

                <div className='buttoncelcalend flex mt-12 gap-10 ml-5 mb-16 justify-center items-center'>
                    <button
                        className={`bgcalencel flex justify-center items-center bg-[#7AA188] w-1/6 h-[4rem] rounded-3xl ${calendarioSelecionado === 'semanal' ? 'bg-green-500' : 'bg-[#7AA188]'}`}
                        onClick={() => mostrarCalendario('semanal')}
                    >
                        <span className='mont text-normal text-black text-center text-2xl leading-10'>Semanal</span>
                    </button>
                    <button
                        className={`bgcalencel flex justify-center items-center bg-[#7AA188] w-1/6 h-[4rem] rounded-3xl ${calendarioSelecionado === 'mensal' ? 'bg-green-500' : 'bg-[#7AA188]'}`}
                        onClick={() => mostrarCalendario('mensal')}
                    >
                        <span className='mont text-normal text-black text-center text-2xl leading-10'>Mensal</span>
                    </button>
                </div>

                {calendarioSelecionado === 'semanal' ? (
                    <Semanal className='mt-20'></Semanal>
                ) : (
                    <Calendario></Calendario>
                )}
            </section>
        </>
    )
}