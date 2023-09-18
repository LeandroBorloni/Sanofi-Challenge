import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu';

export default function Diabetes() {
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
                <div className='flex bg-[#E18F4F] items-center justify-start h-20'>
                    <Link href='/Artigos'><img className='w-9 h-9 ml-16' src='/images/buttonVoltar.svg'></img></Link>
                </div>
                <div className='divimagemartigo flex flex-col'>
                    <h1 className='tituloartigo mont text-black font-semibold text-4xl mb-3 ml-8 mt-8'>As condições de saúde vitais!</h1>
                    <h1 className='colortexto tituloartigo mont text-black font-semibold text-4xl ml-8'>Diabetes</h1>
                    <p className='subartigo mont text-black mt-56 ml-8 font-medium pb-10'>O que é, seus tipos, sintomas, tratamentos e dicas para uma vida mais saudável com diabetes</p>
                </div>
                <div className='flex bg-[#E18F4F] ml-8 mt-12 w-44 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>O QUE É?</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A diabetes é uma condição crônica que envolve o metabolismo inadequado da glicose (um açúcar que serve como fonte principal de energia para o corpo). A glicose é regulada pela insulina, um hormônio produzido pelo pâncreas. Na diabetes, há uma disfunção na produção ou a ação de insulina, resultando em níveis elevados de glicose no sangue.</p>
                <div className='flex bg-[#E18F4F] ml-8 mt-12 w-96 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>TIPOS DE DIABETES</h2>
                </div>
                <div>
                    <h2 className='mont text-black font-semibold text-3xl text-center mt-5'>1. DIABETES TIPO 1</h2>
                    <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>Geralmente diagnosticada em jovens, ocorre quando o sistema imunológico ataca e destrói as células produtoras de insulina no pâncreas.</p>
                    <h2 className='mont text-black font-semibold text-3xl text-center mt-10'>2. DIABETES TIPO 2</h2>
                    <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>É a forma mais comum de diabetes e geralmente se desenvolve em adultos, embora possa ocorrer em qualquer idade. Neste caso, o corpo não consegue usar  insulina de maneira eficaz, resultando em níveis elevados de glicose no sangue.</p>
                    <h2 className='mont text-black font-semibold text-3xl text-center mt-10'>3. DIABETES GESTACIONAL</h2>
                    <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>Ocorre durante a gravidez e geralmente desaparece após o parto. No entanto, mulheres com diabetes gestacional têm um risco aumentado de desenvolver diabetes tipo 2 mais tarde na vida.</p>
                </div>
                <div className='flex bg-[#E18F4F] ml-8 mt-12 w-60 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>SINTOMAS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-10 text-justify'>
                        <li>- Sede excessiva e micção frequente</li>
                        <li>- Fome intensa</li>
                        <li>- Fadiga inexplicável</li>
                        <li>- Perda de peso não intencional</li>
                        <li>- Visão embaçada</li>
                        <li>- Feridas que demoram a cicatrizar</li>
                        <li>- Infecções frequentes</li>
                    </ul>
                </div>
                <div className='flex bg-[#E18F4F] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>TRATAMENTO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>O tratamento da diabetes varia com base no tipo e gravidade da doença. Para diabetes tipo 1, a administração de insulina é essencial. No caso da diabetes tipo 2, mudanças no estilo de vida, como dieta saudável e exercícios, são fundamentais. Medicamentos orais ou injetáveis também podem ser prescritos para ajudar a controlar os níveis de glicose. Além disso, monitorar os níveis de glicose no sangue é crucial para ajustar o tratamento conforme necessário.</p>
                <div className='flex bg-[#E18F4F] ml-8 mt-12 w-40 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>DICAS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-10 text-justify'>
                        <li>- Mantenha uma dieta equilibrada, rica em fibras e alimentos de baixo índice glicêmico.</li>
                        <li>- Faça exercícios regularmente para ajudar a controlar os níveis de glicose e manter um peso saudável.</li>
                        <li>- Monitore os níveis de glicose no sangue conforme orientação médica.</li>
                        <li>- Tome os medicamentos conforme prescrição.</li>
                        <li>- Mantenha-se hidratado e evite o consumo excessivo de açúcar.</li>
                        <li>- Mantenha consultas regulares com profissionais de saúde para monitorar seu estado de saúde.</li>
                    </ul>
                </div>
                <div className='flex bg-[#E18F4F] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>CONCLUSÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify mb-20'>Em conclusão, a diabetes é uma condição séria, mas com gerenciamento adequado, é possível levar uma vida saudável e ativa. A educação, o autocuidado e a colaboração com profissionais de saúde são fundamentais para controlar essa condição e prevenir complicações a longo prazo. Com o apoio certo, as pessoas com diabetes podem desfrutar de uma vida plena e significativa.</p>
            </section>
        </>
    )
}