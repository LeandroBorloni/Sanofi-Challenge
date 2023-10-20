"use client"
import React from 'react';
import Link from 'next/link';
import UserMenu from '@/components/UserMenu';
import AccordConfig from '@/components/AccordConfig';
import './global.css';

export default function Configuracoes() {
    const accordeonConfig = [
        {
            pergunta: "Meus dados cadastrais",
            resposta: "Teste" 
        },        
        {
            pergunta: "Políticas de privacidade",
            resposta: "Teste" 
        },
        {
            pergunta: "Acessibilidade",
            resposta: "Teste" 
        },
        {
            pergunta: "Idiomas",
            resposta: "Atualmente nosso site e aplicativos só estão disponíveis em Português (Brasil), novos idiomas estarão disponíveis em breve!" 
        },
        {
            pergunta: "Fale Conosco",
            resposta: "Contate nossa equipe de suporte em bemainardes@gmail.com para assistência personalizada e orientação relacionada ao aplicativo SanoHealth. Estamos aqui para ajudar você a obter o melhor do nosso aplicativo e a cuidar da sua saúde e bem-estar." 
        },
        {
            pergunta: "Histórico de consultas",
            resposta: "Teste" 
        },
    ]
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
                    <li>Configurações</li>
                </ul>
            </div>
            <div className='flex flex-col gap-5 mt-12 ml-6'>
                {accordeonConfig.map(accordeon => <AccordConfig accordeon={accordeon}></AccordConfig>)}
            </div>
            <Link href='./HomePaciente' className='flex items-center justify-center mt-20 mb-20'>
                <div className='botaovoltar bg-[#D3A7D9] flex items-center justify-center'>
                    <span className='mont text-black font-medium text-xl'>Voltar</span>
                </div>
            </Link>
        </section>
        </>
    )
}