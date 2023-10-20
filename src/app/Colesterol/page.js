import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu'; 

export default function Colesterol() {
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
                <div className='flex bg-[#FC8B7F] items-center justify-start h-20'>
                    <Link href='/Artigos'><img className='w-9 h-9 ml-16' src='/images/buttonVoltar.svg'></img></Link>
                </div>
                <div className='divimagemartigo3 flex flex-col'>
                    <h1 className='tituloartigo mont text-black font-semibold text-4xl mb-3 ml-8 mt-8'>As condições de saúde vitais!</h1>
                    <h1 className='colortexto3 tituloartigo mont text-black font-semibold text-4xl ml-8'>Colesterol</h1>
                    <p className='subartigo mont text-black mt-56 ml-8 font-medium pb-10'>O que é o colesterol, os diferentes tipos, suas funções, os riscos associados ao colesterol elevado e estratégias para manter níveis saudáveis.</p>
                </div>
                <div className='flex bg-[#FC8B7F] ml-8 mt-12 w-44 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>O QUE É?</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>O colesterol é um tipo de lipídio presente nas membranas celulares e desempenha papéis cruciais em várias funções do corpo. Ele é essencial para a produção de hormônios, vitamina D e bile, que auxilia na digestão de gorduras.</p>
                <div className='flex bg-[#FC8B7F] ml-8 mt-12 w-96 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>TIPOS DE COLESTEROL</h2>
                </div>
                <div>
                    <h2 className='mont text-black font-semibold text-3xl text-center mt-5'>1. COLESTEROL DE BAIXA DENSIDADE (LDL)</h2>
                    <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>É frequentemente chamado de "colesterol ruim", pois um excesso de LDL pode acumular-se nas paredes das artérias, formando placas que podem restringir o fluxo sanguíneo e aumentar o risco de doenças cardíacas.</p>
                    <h2 className='mont text-black font-semibold text-3xl text-center mt-10'>2. COLESTEROL DE ALTA DENSIDADE (HDL)</h2>
                    <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>Conhecido como "colesterol bom", o HDL ajuda a remover o excesso de colesterol das artérias, reduzindo o risco de doenças cardíacas.</p>
                </div>
                <div className='flex bg-[#FC8B7F] ml-8 mt-12 w-40 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>RISCOS</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>Ter níveis elevados de colesterol LDL pode aumentar significativamente o risco de:</p>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-5 mr-8 text-justify'>
                        <li>- <strong>Doenças Cardíacas:</strong> Placas de colesterol nas artérias podem levar a ataques cardíacos e angina.</li>
                        <li>- <strong>AVC:</strong> O acúmulo de placas nas artérias cerebrais pode resultar em acidente vascular cerebral.</li>
                        <li>- <strong>Doença Arterial Periférica:</strong> Placas nas artérias que fornecem sangue para as extremidades podem causar dor e dificuldade de locomoção.</li>
                    </ul>
                </div>
                <div className='colecel flex bg-[#FC8B7F] ml-8 mt-12 w-1/3 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='coleceltext mont text-black font-semibold text-3xl'>MANTENDO NÍVEIS SAUDÁVEIS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-7 text-justify ml-10 mr-10'>
                        <li>- <strong>Dieta Balanceada:</strong> Consuma uma dieta rica em frutas, vegetais, grãos integrais, proteínas magras e gorduras saudáveis, como as encontradas em nozes, azeite de oliva e peixes ricos em ômega-3.</li>
                        <li>- <strong>Exercício Regular:</strong> Pratique atividade física regularmente para aumentar os níveis de HDL e melhorar o metabolismo das gorduras.</li>
                        <li>- <strong>Controle de Peso:</strong> Manter um peso saudável pode ajudar a regular os níveis de colesterol.</li>
                        <li>- <strong>Evitar Tabagismo e Limitar Álcool:</strong> O tabagismo pode reduzir os níveis de HDL e aumentar o risco de placas de colesterol. O consumo excessivo de álcool também pode afetar os níveis de lipídios.</li>
                    </ul>
                </div>
                <div className='colecel flex bg-[#FC8B7F] ml-8 mt-12 w-1/3 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='coleceltext mont text-black font-semibold text-3xl'>MONITORAMENTO E TRATAMENTO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>É importante realizar exames regulares de colesterol para avaliar seus níveis. Se o colesterol LDL estiver elevado, medidas de estilo de vida podem ser recomendadas. Em alguns casos, o médico pode prescrever medicamentos para ajudar a controlar os níveis de colesterol.</p>
                <div className='flex bg-[#FC8B7F] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>CONCLUSÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify mb-20'>O colesterol desempenha um papel essencial em nosso corpo, mas seu excesso pode ser prejudicial à saúde cardiovascular. Com escolhas de estilo de vida saudáveis, monitoramento adequado e colaboração com profissionais de saúde, é possível manter os níveis de colesterol sob controle e promover uma vida longa e saudável.</p>
            </section>
        </>
    )
}