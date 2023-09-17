import React from 'react';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline'
import './global.css';

export default function ExamesEConsultas() {
    return (
        <>
        <section className='flex flex-col'>
            <nav className='flex items-center justify-between bg-[#B483BB] p-4'>
                <div className='flex items-center'>
                    <Link href='./'><img className='imagemlogo' src="/images/Logo.svg"></img></Link>
                </div>
                <div className='flex items-center'>
                    <Link href='/Login'><UserIcon className='w-9 text-black icon mb-2'></UserIcon></Link>
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
        </section>
        </>
    )
}