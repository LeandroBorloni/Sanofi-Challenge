import React from 'react';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline'
import './global.css';
import Calendario from '@/components/MonthlyCalendar.jsx';
import Semanal from '@/components/WeeklyCalendar.jsx';
import UserMenu from '@/components/UserMenu';
import Metas from '@/components/Metas.jsx';
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function SaudeEBemEstar() {
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
            <div className='flex flex-col justify-center items-center mt-10 gap-10'>
                <h1 className='mont text-black text-3xl'>Checklist Personalizado</h1>
                <p className='mont text-black text-center text-xl italic w-1/2'>Monte sua rotina de forma personalizada para o seu dia-a-dia! Estabeleça metas diárias e semanais para manter sua saúde integrada. Física, mental e espiritual.</p>
                <img src='/images/LineCadastro.svg'></img>
            </div>
            <div className='flex flex-col w-1/3 ml-10 mt-20'>
                <div className=' bg-[#7AA188] rounded-t-3xl '>
                    <h2 className='mont text-normal text-black text-center text-2xl leading-10'>Suas metas hoje são:</h2>
                </div>
                <div className='flex flex-col bg-[#8EBF9F] rounded-b-3xl h-[20rem]'>
                    <Metas></Metas>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-20'>
                <h1 className='mont text-black text-3xl'>Adicione metas para seus dias!</h1>

                <div className='flex justify-between w-3/4 mt-20'>
                    <div className=' bg-[#7AA188] rounded-t-3xl w-2/5 flex justify-between items-center'>
                        <h2 className='mont text-normal text-black text-center text-2xl leading-10 flex-grow'>Saúde Física</h2>
                        <ChevronDownIcon className='w-10 text-black mr-5'></ChevronDownIcon>
                    </div>
                    <div className=' bg-[#7AA188] rounded-t-3xl w-2/5 flex justify-between items-center'>
                        <h2 className='mont text-normal text-black text-center text-2xl leading-10 flex-grow'>Hidratação</h2>
                        <ChevronDownIcon className='w-10 text-black mr-5'></ChevronDownIcon>
                    </div>
                </div>

                <div className='flex justify-between w-3/4 mt-20'>
                    <div className='bg-[#7AA188] rounded-t-3xl w-2/5 flex justify-between items-center'>
                        <h2 className='mont text-normal text-black text-center text-2xl leading-10 flex-grow'>Saúde mental</h2>
                        <ChevronDownIcon className='w-10 text-black mr-5'></ChevronDownIcon>
                    </div>
                    <div className=' bg-[#7AA188] rounded-t-3xl w-2/5 flex justify-between items-center'>
                        <h2 className='mont text-normal text-black text-center text-2xl leading-10 flex-grow'>Espiritualidade</h2>
                        <ChevronDownIcon className='w-10 text-black mr-5'></ChevronDownIcon>
                    </div>
                </div>

                <div className='flex flex-col bg-[#D3A7D9] rounded-3xl w-1/6 items-center mt-20 h-[10rem]'>
                    <h2 className='mont text-normal text-black text-center text-2xl leading-10'>Adicionar a data:</h2>
                </div>

                <div className='flex flex-col bg-[#AF75BF] rounded-3xl w-1/4 h-[3rem] justify-center items-center mt-20'>
                    <h2 className='mont text-normal text-black text-center text-3xl leading-10'>Registrar Mudanças:</h2>
                </div>
            </div>

            <div className='flex mt-20 gap-10'>
                <div className='flex justify-center items-center bg-[#7AA188] w-1/6 h-[4rem] rounded-3xl'>
                    <h2 className='mont text-normal text-black text-center text-2xl leading-10'>Semanal</h2>
                </div>
                <div className='flex justify-center items-center bg-[#7AA188] w-1/6 rounded-3xl'>
                    <h2 className='mont text-normal text-black text-center text-2xl leading-10'>Mensal</h2>
                </div>
            </div>
            
            <Calendario></Calendario>
            <Semanal className='mt-20'></Semanal>
        </section>
        </>
    )
}