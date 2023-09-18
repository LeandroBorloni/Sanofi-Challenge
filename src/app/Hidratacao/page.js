import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu'; 

export default function Hidratacao() {
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
                <div className='flex bg-[#8EDDFE] items-center justify-start h-20'>
                    <Link href='/Artigos'><img className='w-9 h-9 ml-16' src='/images/buttonVoltar.svg'></img></Link>
                </div>
                <div className='divimagemartigo7 flex flex-col'>
                    <h1 className='tituloartigo mont text-black font-semibold text-4xl mb-3 ml-8 mt-8'>Os hábitos saudáveis</h1>
                    <h1 className='colortexto7 tituloartigo mont text-black font-semibold text-4xl ml-8'>Hidratação</h1>
                    <p className='subartigo mont text-black mt-56 ml-8 font-medium pb-10'>Por que a hidratação é tão crucial e como você pode garantir que está obtendo água suficiente para se sentir bem.</p>
                </div>
                <div className='flex bg-[#8EDDFE] ml-8 mt-12 w-72 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>IMPORTÂNCIA</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A água é o principal componente do nosso corpo e é vital para muitas funções essenciais, incluindo:</p>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-3 text-justify mr-8'>
                        <li>- <strong>Regulação da Temperatura:</strong> A água ajuda a manter nossa temperatura corporal dentro de limites seguros.</li>
                        <li>- <strong>Transporte de Nutrientes:</strong> Ela carrega nutrientes e oxigênio para as células do corpo.</li>
                        <li>- <strong>Eliminação de Resíduos:</strong> A hidratação adequada é essencial para a função dos rins e a eliminação de toxinas.</li>
                        <li>- <strong>Lubrificação Articular:</strong> A água atua como um lubrificante natural para nossas articulações.</li>
                    </ul>
                </div>
                <div className='flex bg-[#8EDDFE] ml-8 mt-12 w-1/4 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>SINAIS DE DESIDRATAÇÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A desidratação ocorre quando você não ingere água suficiente para repor a que é perdida por meio da urina, suor e respiração. Os sintomas de desidratação podem incluir:</p>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-3 text-justify mr-8'>
                        <li>- Sede excessiva</li>
                        <li>- Urina escura</li>
                        <li>- Boca seca</li>
                        <li>- Tontura</li>
                        <li>- Fadiga</li>
                        <li>- Confusão mental</li>
                    </ul>
                </div>
                <div className='flex bg-[#8EDDFE] ml-8 mt-12 w-40 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>DICAS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-3 text-justify mr-8'>
                        <li>- <strong>Beba Água regularmente:</strong> Tente beber água ao longo do dia, não apenas quando estiver com sede.</li>
                        <li>- <strong>Observe sua urina:</strong> Urina amarela clara é um sinal de boa hidratação.</li>
                        <li>- <strong>Adicione variedade:</strong> Além de água, consuma sucos naturais, chás de ervas e alimentos ricos em água, como melancia e pepino.</li>
                        <li>- <strong>Hidrate-se durante a Atividade Física:</strong> Beba água antes, durante e após o exercício.</li>
                        <li>- <strong>Adapte às condições:</strong> Em climas quentes ou quando transpirar muito, aumente a ingestão de água.</li>
                    </ul>
                </div>
                <div className='flex bg-[#8EDDFE] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>CONCLUSÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify mb-20'>A hidratação é um dos pilares fundamentais da saúde. Manter-se bem hidratado é uma maneira simples e eficaz de cuidar do seu corpo e garantir que ele funcione de forma eficiente. Lembre-se de ouvir os sinais do seu corpo e beber água regularmente ao longo do dia para se manter hidratado e se sentir no seu melhor. Sua saúde agradece!</p>
            </section>
        </>
    )
}