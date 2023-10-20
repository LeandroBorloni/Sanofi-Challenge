import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu';

export default function Hipertensao() {
    return(
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
                <div className='flex bg-[#A4AB9A] items-center justify-start h-20'>
                    <Link href='/Artigos'><img className='w-9 h-9 ml-16' src='/images/buttonVoltar.svg'></img></Link>
                </div>
                <div className='divimagemartigo2 flex flex-col'>
                    <h1 className='tituloartigo mont text-black font-semibold text-4xl mb-3 ml-8 mt-8'>As condições de saúde vitais!</h1>
                    <h1 className='colortexto2 tituloartigo mont text-black font-semibold text-4xl ml-8'>Hipertensão</h1>
                    <p className='subartigo mont text-black mt-56 ml-8 font-medium pb-10'>O que é a hipertensão, suas causas, sintomas, riscos associados, tratamento e estratégias para manter a pressão arterial sob controle.</p>
                </div>
                <div className='flex bg-[#A4AB9A] ml-8 mt-12 w-44 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>O QUE É?</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A hipertensão arterial é caracterizada pelo aumento crônico da pressão exercida pelas paredes das artérias sobre o fluxo sanguíneo. Isso coloca uma tensão extra sobre o sistema circulatório, aumentando o risco de doenças cardíacas, acidente vascular cerebral (AVC) e outros problemas de saúde.</p>
                <div className='hipercel flex bg-[#A4AB9A] ml-8 mt-12 w-1/4 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='hiperceltext mont text-black font-semibold text-3xl'>CAUSAS E FATORES DE RISCO</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-10 mr-8 text-justify'>
                        <li>- <strong>Genética:</strong> Predisposição genética pode aumentar o risco.</li>
                        <li>- <strong>Estilo de Vida:</strong> Dieta rica em sódio, baixa atividade física, obesidade e tabagismo (hábito de fumar).</li>
                        <li>- <strong>Idade:</strong> A incidência aumenta com o envelhecimento.</li>
                        <li>- <strong>Estresse:</strong> Altos níveis de estresse podem influenciar a pressão arterial.</li>
                        <li>- <strong>Condições Médicas:</strong> Diabetes, doenças renais e distúrbios hormonais podem contribuir.</li>
                    </ul>
                </div>
                <div className='hipercel flex bg-[#A4AB9A] ml-8 mt-12 w-96 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='hiperceltext mont text-black font-semibold text-3xl'>SINTOMAS E RISCOS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-10 text-justify'>
                        <li>- Sede excessiva e micção frequente.</li>
                        <li>- Fome intensa.</li>
                        <li>- Fadiga inexplicável.</li>
                        <li>- Perda de peso não intencional.</li>
                        <li>- Visão embaçada.</li>
                        <li>- Feridas que demoram a cicatrizar.</li>
                        <li>- Infecções frequentes</li>
                    </ul>
                </div>
                <div className='flex bg-[#A4AB9A] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>TRATAMENTO</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-10 text-justify ml-10 mr-10'>
                        <li>- <strong>Mudanças no Estilo de Vida:</strong> Reduzir o consumo de sal, adotar uma dieta rica em frutas, vegetais e grãos integrais, praticar exercícios regularmente e controlar o peso.</li>
                        <li>- <strong>Medicamentos:</strong> Em alguns casos, medicamentos anti-hipertensivos são prescritos para ajudar a baixar a pressão arterial.</li>
                        <li>- <strong>Monitoramento Regular:</strong> Medir a pressão arterial regularmente para acompanhar as mudanças e ajustar o tratamento, se necessário.</li>
                    </ul>
                </div>
                <div className='flex bg-[#A4AB9A] ml-8 mt-12 w-40 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>DICAS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-10 mr-8 text-justify'>
                        <li>- Mantenha um estilo de vida saudável com dieta equilibrada e atividade física.</li>
                        <li>- Gerencie o estresse através de técnicas de relaxamento.</li>
                        <li>- Evite o tabagismo e limite o consumo de álcool.</li>
                        <li>- Faça exames de saúde regulares e monitore sua pressão arterial.</li>
                        <li>- Mantenha uma comunicação aberta com profissionais de saúde.</li>
                    </ul>
                </div>
                <div className='flex bg-[#A4AB9A] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>CONCLUSÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify mb-20'>Em conclusão, a hipertensão arterial é uma condição séria, mas seu controle é possível com o devido acompanhamento médico e mudanças no estilo de vida. Com conscientização, educação e ação proativa, podemos reduzir os riscos associados à pressão arterial elevada e promover uma vida saudável e vibrante.</p>
            </section>
        </>
    )
}