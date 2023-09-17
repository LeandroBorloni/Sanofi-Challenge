import React from 'react';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline'
import './global.css';

import CardArtigos from '@/components/Artigos';

export default function Artigos() {
    const artigoSaudeVital = [
        {
            imagem:"/images/diabetes.svg",
            titulo:"Diabetes",
            texto:"Entendendo, Gerenciando e Vivendo Bem."
        },
        {
            imagem:"/images/hipertensao.svg",
            titulo:"Hipertensão",
            texto:"Compreendendo, Controlando e Promovendo a Saúde Cardiovascular."
        },
        {
            imagem:"/images/colesterol.svg",
            titulo:"Colesterol",
            texto:"Compreendendo, Gerenciando e Mantendo a Saúde Cardiovascular."
        },
        {
            imagem:"/images/obesidade.svg",
            titulo:"Obesidade",
            texto:"Entendendo, Enfrentando e Cultivando um Estilo de Vida Saudável."
        }
    
    ]

    const artigoHabitoSaudavel= [
        {
            imagem: "/images/atividade_fisica.svg",
            titulo: "Atividade física",
            texto: "Um Passo Vital para uma Vida Saudável"
        },
        {
            imagem: "/images/alimentacao.svg",
            titulo: "Alimentação",
            texto: "Nutrindo o Seu Corpo para uma Vida Melhor"
        },
        {
            imagem: "/images/hidratacao.svg",
            titulo: "Hidratação",
            texto: "A importância de beber água para o Bem-Estar"
        },
    ]

    const artigoTopicoSaude =[
        {
            imagem: "/images/primeirosSocorros.svg",
            titulo: "Primeiro Socorros",
            texto: "Conhecimento que Salva Vidas."
        },
        {
            imagem: "/images/vacinacao.svg",
            titulo: "Vacinação",
            texto: "Protegendo a Saúde, Prevenindo Doenças"
        }
    ]
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
                    <Link href='/HomePaciente'> <li>Home</li></Link>
                    <Link href='/ExamesEConsultas'><li>Exames & Consultas</li></Link>
                    <Link href='/SaudeEBemEstar'><li>Saúde & Bem estar</li></Link>
                    <Link href='/Artigos'><li>Artigos</li></Link>
                </ul>
            </div>
            
            <div className='flex flex-col gap-20'>
                {/* 1 Carroçel */}
                <div className='flex flex-col mt-12'>
                    <h1 className='mont text-black font-semibold text-3xl mb-8 ml-5'>Condições de saúde vitais</h1>
                    <div className='flex gap-12 ml-40'>
                        {artigoSaudeVital.map(artigos => <CardArtigos artigos={artigos}></CardArtigos>)}
                    </div>
                </div>

                {/* 2 Carroçel */}
                <div className='flex flex-col'>
                    <h1 className='mont text-black font-semibold text-3xl mb-8 ml-5'>Hábitos Saudáveis</h1>
                    <div className='flex gap-12 ml-40'>
                        {artigoHabitoSaudavel.map(artigos => <CardArtigos artigos={artigos}></CardArtigos>)}
                    </div>
                </div>

                {/* 3 Carroçel */}
                <div className='flex flex-col mb-20'>
                    <h1 className='mont text-black font-semibold text-3xl mb-8 ml-5'>Tópicos de Saúde</h1>
                    <div className='flex gap-12 ml-40'>
                        {artigoTopicoSaude.map(artigos => <CardArtigos artigos={artigos}></CardArtigos>)}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}