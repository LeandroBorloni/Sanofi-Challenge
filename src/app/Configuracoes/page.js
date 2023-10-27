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
            resposta:
                <>
                    <Link href='./Perfil' className='flex items-center justify-center mt-2 mb-2'>
                        <div className='botaovoltar bg-[#AF75BF] flex items-center justify-center'>
                            <span className='mont text-black font-medium text-xl'>Ver dados</span>
                        </div>
                    </Link>
                </>
        },
        {
            pergunta: "Políticas de privacidade",
            resposta: "Privacidade é primordial no SanoHealth. Coletamos e usamos suas informações pessoais, como nome e dados de saúde, para agendar consultas, gerenciar exames e oferecer conteúdo relevante sobre saúde. Garantimos segurança e não compartilhamos suas informações, exceto quando necessário ou por exigência legal. Ao usar o SanoHealth, concorda com nossa Política de Privacidade. Recomendamos revisá-la periodicamente, pois podemos fazer atualizações. Dúvidas? Entre em contato. Agradecemos por confiar em nós para cuidar de sua saúde e privacidade."
        },
        {
            pergunta: "Acessibilidade",
            resposta: "Na SanoHealth, buscamos tornar a saúde acessível a todos. Comprometemo-nos com a acessibilidade digital, visando a facilidade de uso para todos, independentemente das habilidades. Se precisar de ajuda ou tiver sugestões para melhorias, entre em contato. Agradecemos por escolher a SanoHealth e por fazer parte da nossa comunidade inclusiva de saúde!"
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
            resposta:
                <>
                    <Link href='./ExamesEConsultas' className='flex items-center justify-center mt-2 mb-2'>
                        <div className='botaovoltar bg-[#AF75BF] flex items-center justify-center'>
                            <span className='mont text-black font-medium text-xl'>Ver consultas</span>
                        </div>
                    </Link>
                </>
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