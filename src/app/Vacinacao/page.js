import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu'; 

export default function Vacinacao() {
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
                <div className='flex bg-[#D3D6D7] items-center justify-start h-20'>
                    <Link href='/Artigos'><img className='w-9 h-9 ml-16' src='/images/buttonVoltar.svg'></img></Link>
                </div>
                <div className='divimagemartigo8 flex flex-col'>
                    <h1 className='tituloartigo mont text-black font-semibold text-4xl mb-3 ml-8 mt-8'>Tópicos de Saúde</h1>
                    <h1 className='colortexto8 tituloartigo mont text-black font-semibold text-4xl ml-8'>Vacinação</h1>
                    <p className='subartigo mont text-black mt-56 ml-8 font-medium pb-10'>Por que a vacinação é tão crucial e como ela beneficia a sociedade como um todo.</p>
                </div>
                <div className='vaccel flex bg-[#D3D6D7] ml-8 mt-12 w-1/4 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='vacceltext mont text-black font-semibold text-3xl'>ENTENDENDO A VACINAÇÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A vacinação é uma das conquistas mais importantes da medicina moderna. Ela desempenha um papel fundamental na prevenção de doenças infecciosas e na proteção da saúde pública.
                As vacinas são projetadas para ensinar o sistema imunológico a reconhecer e combater agentes infecciosos, como vírus e bactérias. Elas ajudam a prevenir doenças graves, muitas das quais podem ser mortais.</p>
                <div className='flex bg-[#D3D6D7] ml-8 mt-12 w-60 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>BENEFÍCIOS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-7 text-justify mr-8'>
                        <li>- <strong>Prevenção de Doenças:</strong> As vacinas protegem contra uma variedade de doenças, incluindo sarampo, rubéola, gripe, poliomielite e hepatite, entre outras.</li>
                        <li>- <strong>Imunidade de Rebanho:</strong> Quando um número suficiente de pessoas é vacinado, ocorre a imunidade de rebanho, protegendo também aqueles que não podem ser vacinados devido a condições médicas.</li>
                        <li>- <strong>Redução de Custo em Saúde:</strong> A prevenção de doenças por meio da vacinação reduz os custos associados ao tratamento médico e hospitalização.</li>
                    </ul>
                </div>
                <div className='flex bg-[#D3D6D7] ml-8 mt-12 w-60 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>SEGURANÇA</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>As vacinas passam por rigorosos testes de segurança antes de serem aprovadas para uso. Eventos adversos são extremamente raros em comparação com os benefícios da vacinação.</p>
                <div className='flex bg-[#D3D6D7] ml-8 mt-12 w-80 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>DESAFIOS E MITOS</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A desinformação sobre vacinas pode gerar preocupações infundadas. É importante buscar informações de fontes confiáveis e consultar profissionais de saúde para esclarecer dúvidas.</p>
                <div className='flex bg-[#D3D6D7] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>CONCLUSÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify mb-20'>A vacinação é uma das melhores ferramentas que temos para proteger nossa saúde e a saúde da comunidade. Ela tem um histórico comprovado de prevenção de doenças e de salvamento de vidas. Ao vacinar-se e manter as vacinas em dia, você não apenas protege a si mesmo, mas também contribui para um mundo mais saudável e seguro. A vacinação é um ato de cuidado comunitário que salva vidas.</p>
            </section>
        </>
    )
}