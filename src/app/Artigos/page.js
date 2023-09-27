import React from 'react';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline'
import './global.css';

import CardArtigos from '@/components/Artigos';
import UserMenu from '@/components/UserMenu';
import ArticleCarousel from '@/components/Carrossel';
import ArticleCarouselHabitos from '@/components/CarroselHabitos';
import ArticleCarouselSaude from '@/components/CarroselSaude';

export default function Artigos() {
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
                    <Link href='/HomePaciente'> <li>Home</li></Link>
                    <Link href='/ExamesEConsultas'><li>Exames & Consultas</li></Link>
                    <Link href='/SaudeEBemEstar'><li>Saúde & Bem estar</li></Link>
                    <Link href='/Artigos'><li>Artigos</li></Link>
                </ul>
            </div>
            
            <div className='flex flex-col gap-20'>
                {/* 1 Carroçel */}
                <div className='flex flex-col mt-12'>
                    <h1 className='textocelartigo mont text-black font-semibold text-3xl mb-8 ml-5'>Condições de saúde vitais</h1>
                    <ArticleCarousel></ArticleCarousel>
                </div>

                {/* 2 Carroçel */}
                <div className='flex flex-col'>
                    <h1 className='textocelartigo mont text-black font-semibold text-3xl mb-8 ml-5'>Hábitos Saudáveis</h1>
                    <ArticleCarouselHabitos></ArticleCarouselHabitos>
                </div>

                {/* 3 Carroçel */}
                <div className='flex flex-col mb-20'>
                    <h1 className='textocelartigo mont text-black font-semibold text-3xl mb-8 ml-5'>Tópicos de Saúde</h1>
                    <ArticleCarouselSaude></ArticleCarouselSaude>
                </div>
            </div>



        </section>
        </>
    )
}