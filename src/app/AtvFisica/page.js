import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu'; 

export default function AtvFisica() {
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
                <div className='flex bg-[#B6E0B3] items-center justify-start h-20'>
                    <Link href='/Artigos'><img className='w-9 h-9 ml-16' src='/images/buttonVoltar.svg'></img></Link>
                </div>
                <div className='divimagemartigo5 flex flex-col'>
                    <h1 className='tituloartigo mont text-black font-semibold text-4xl mb-3 ml-8 mt-8'>Os hábitos saudáveis</h1>
                    <h1 className='colortexto5 tituloartigo mont text-black font-semibold text-4xl ml-8'>Atividade Física</h1>
                    <p className='subartigo mont text-black mt-56 ml-8 font-medium pb-10'>Por que a atividade física é tão importante e como você pode incorporá-la facilmente à sua rotina diária.</p>
                </div>
                <div className='flex bg-[#B6E0B3] ml-8 mt-12 w-44 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>O QUE É?</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A atividade física é muito mais do que simplesmente movimentar o corpo. É uma ferramenta poderosa para melhorar a saúde, elevar o ânimo e proporcionar uma vida mais vibrante.</p>
                <div className='flex bg-[#B6E0B3] ml-8 mt-12 w-60 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>BENEFÍCIOS</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A atividade física não é apenas uma escolha saudável, mas um presente para o corpo e a mente. Ela melhora a saúde cardiovascular, fortalece os músculos e ossos, e ajuda a manter um peso saudável. Além disso, a atividade física regular libera endorfinas, os hormônios do bem-estar, que podem aliviar o estresse e melhorar o humor.</p>
                <div className='atvcel flex bg-[#B6E0B3] ml-8 mt-12 w-1/4 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='atvceltext mont text-black font-semibold text-3xl'>COMEÇE DE FORMA SIMPLES</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A boa notícia é que você não precisa ser um atleta de elite para colher os benefícios da atividade física. Comece de forma simples, dando passos que se encaixem no seu dia a dia. Uma caminhada rápida, subir escadas em vez de usar o elevador ou fazer alongamentos pela manhã já são excelentes maneiras de começar.</p>
                <div className='atvcel flex bg-[#B6E0B3] ml-8 mt-12 w-1/4 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='atvceltext mont text-black font-semibold text-3xl'>O MELHOR PARA VOCÊ</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A beleza da atividade física está na diversidade. Há uma variedade incrível de opções, desde aulas de dança animadas até sessões de ioga calmantes. Encontre algo que você goste e que se encaixe em sua vida. Isso não apenas tornará o exercício mais agradável, mas também aumentará a probabilidade de você mantê-lo a longo prazo.</p>
                <div className='atvcel flex bg-[#B6E0B3] ml-8 mt-12 w-1/2 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='atvceltext mont text-black font-semibold text-3xl'>PEQUENAS MUDANÇAS, GRANDES IMPACTOS</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>Aqui está o segredo: pequenas mudanças acumulam-se ao longo do tempo para criar um impacto duradouro. Caminhar durante o almoço, pedalar até o trabalho ou fazer uma pausa para fazer alguns alongamentos podem fazer toda a diferença. O importante é criar consistência e tornar a atividade física parte de sua rotina diária.</p>
                <div className='flex bg-[#B6E0B3] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>CONCLUSÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify mb-20'>A atividade física é uma ferramenta poderosa para uma vida saudável e feliz. Não importa sua idade, nível de condicionamento físico ou agenda. Comece devagar, encontre atividades que você goste e faça pequenas mudanças para colher grandes recompensas. Seja um passeio relaxante ou um treino intenso, cada passo conta para construir um futuro mais saudável e vibrante.</p>
            </section>
        </>
    )
}