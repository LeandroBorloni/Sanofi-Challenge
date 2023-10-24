"use client"
import React from 'react';
import Link from 'next/link';
import UserMenu from '@/components/UserMenu';
import { UserIcon } from '@heroicons/react/24/outline'
import PerfilForm from '@/components/PerfilForm';
import './global.css';

export default function Perfil() {
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
                <div className='flex bg-[#AF75BF] items-center justify-center text-center h-20' >
                    <ul className='lg:gap-48 flex textonav'>
                        <li>Meu Perfil</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center flex-col mt-12'>
                    <h1 className='mont text-black italic text-4xl text-center'>
                        Bem-vindo (a) de volta!
                    </h1>
                    <UserIcon className='w-1/6 h-1/6 text-black icon mt-8'></UserIcon>
                </div>
                <h1 className='mont text-black italic text-4xl mt-20 ml-6'>
                    Dados cadastrais
                </h1>
                <PerfilForm></PerfilForm>
                <Link href='./HomePaciente' className='flex items-center justify-center mt-16 mb-20'>
                    <div className='botaovoltar bg-[#D3A7D9] flex items-center justify-center'>
                        <span className='mont text-black font-medium text-xl'>Voltar</span>
                    </div>
                </Link>
        </section>
        </>
    )
}