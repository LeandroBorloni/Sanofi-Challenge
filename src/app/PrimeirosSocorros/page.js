import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu'; 

export default function PrimeirosSocorros() {
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
                <div className='flex bg-[#AF75BF] items-center justify-center h-20' >
                    <ul className='flex gap-48 textonav'>
                        <Link href='/HomePaciente'> <li>Home</li></Link>
                        <Link href='/ExamesEConsultas'><li>Exames & Consultas</li></Link>
                        <Link href='/SaudeEBemEstar'><li>Saúde & Bem estar</li></Link>
                        <Link href='/Artigos'><li>Artigos</li></Link>
                    </ul>
                </div>
                <div className='flex bg-[#1393DE] items-center justify-start h-20'>
                    <Link href='/Artigos'><img className='w-9 h-9 ml-16' src='/images/buttonVoltar.svg'></img></Link>
                </div>
                <div className='divimagemartigo9 flex flex-col'>
                    <h1 className='tituloartigo mont text-black font-semibold text-4xl mb-3 ml-8 mt-8'>Tópicos de Saúde</h1>
                    <h1 className='colortexto9 tituloartigo mont text-black font-semibold text-4xl ml-8'>Primeiros Socorros</h1>
                    <p className='subartigo mont text-black mt-56 ml-8 font-medium pb-10'>A importância dos primeiros socorros e algumas diretrizes fundamentais para agir de forma eficaz em momentos críticos.</p>
                </div>
                <div className='flex bg-[#1393DE] ml-8 mt-12 w-72 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>IMPORTÂNCIA</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>Os primeiros socorros desempenham um papel vital em situações de emergência, ajudando a estabilizar a condição de uma pessoa até a chegada de ajuda médica profissional. Eles podem prevenir complicações graves e, em muitos casos, salvar vidas.</p>
                <div className='flex bg-[#1393DE] ml-8 mt-12 w-1/2 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>PROCEDIMENTOS INICIAIS DE ASSISTÊNCIA</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-7 text-justify mr-8'>
                        <li>- <strong>Mantenha a Calma:</strong> Em uma situação de emergência, é fundamental manter a calma para tomar decisões eficazes.</li>
                        <li>- <strong>Avalie a Situação:</strong> Antes de agir, avalie a segurança do ambiente e verifique se há riscos adicionais para você e para a vítima.</li>
                        <li>- <strong>Chame Ajuda:</strong> Em casos graves, como acidentes de trânsito ou condições médicas críticas, ligue para o serviço de emergência imediatamente.</li>
                        <li>- <strong>Proteja a Vítima:</strong> Seja prudente ao se aproximar da vítima para evitar riscos adicionais.</li>
                        <li>- <strong>Aplique os Primeiros Socorros:</strong> Dependendo da situação, isso pode incluir RCP (ressuscitação cardiopulmonar), controle de sangramento, imobilização de fraturas ou administração de um EPI (EpiPen) em caso de reação alérgica grave.</li>
                        <li>- <strong>Mantenha a Vítima Confortável:</strong> Forneça apoio emocional e mantenha a vítima confortável até a chegada da ajuda.</li>
                    </ul>
                </div>
                <div className='flex bg-[#1393DE] ml-8 mt-12 w-72 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>APRENDIZADO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>Participar de cursos de primeiros socorros é uma maneira eficaz de adquirir o conhecimento e a confiança necessários para agir em situações de emergência. Muitas organizações, como a Cruz Vermelha e hospitais locais, oferecem esses cursos.</p>
                <div className='flex bg-[#1393DE] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>CONCLUSÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify mb-20'>Os primeiros socorros são uma habilidade valiosa que todos deveriam aprender. Em situações de emergência, a ação rápida e adequada pode fazer toda a diferença. Lembre-se de que os primeiros socorros não se limitam a profissionais de saúde; qualquer pessoa pode aprender a salvar vidas com medidas simples e cuidadosas. Investir tempo em aprender os princípios básicos dos primeiros socorros é investir na segurança de você mesmo, de seus entes queridos e de sua comunidade.</p>
            </section>
        </>
    )
}