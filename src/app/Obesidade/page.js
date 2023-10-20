import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu'; 

export default function Obesidade() {
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
                <div className='flex bg-[#D9C84D] items-center justify-start h-20'>
                    <Link href='/Artigos'><img className='w-9 h-9 ml-16' src='/images/buttonVoltar.svg'></img></Link>
                </div>
                <div className='divimagemartigo4 flex flex-col'>
                    <h1 className='tituloartigo mont text-black font-semibold text-4xl mb-3 ml-8 mt-8'>As condições de saúde vitais!</h1>
                    <h1 className='colortexto4 tituloartigo mont text-black font-semibold text-4xl ml-8'>Obesidade</h1>
                    <p className='subartigo mont text-black mt-56 ml-8 font-medium pb-10'>O que é a obesidade, suas causas, consequências, estratégias de gerenciamento e dicas para promover um estilo de vida saudável.</p>
                </div>
                <div className='flex bg-[#D9C84D] ml-8 mt-12 w-44 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>O QUE É?</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A obesidade é uma condição caracterizada pelo acúmulo excessivo de gordura corporal, geralmente resultante de um desequilíbrio entre a ingestão de calorias e o gasto energético. Ela não apenas afeta a aparência física, mas também tem um impacto significativo na saúde geral.</p>
                <div className='obescel flex bg-[#D9C84D] ml-8 mt-12 w-1/4 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='obesceltext mont text-black font-semibold text-3xl'>CAUSAS E FATORES DE RISCO</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-7 mr-8 text-justify'>
                        <li>- <strong>Dieta Desbalanceada:</strong> Consumo excessivo de calorias vazias, alimentos processados e ricos em gorduras saturadas e açúcares.</li>
                        <li>- <strong>Estilo de Vida Sedentário:</strong> Falta de atividade física regular.</li>
                        <li>- <strong>Genética:</strong> Predisposição genética pode influenciar o metabolismo e a tendência à obesidade.</li>
                        <li>- <strong>Fatores Psicossociais:</strong> Estresse, ansiedade e depressão podem levar ao excesso de alimentação.</li>
                        <li>- <strong>Ambiente:</strong> Acesso fácil a alimentos pouco saudáveis e estilo de vida sedentário.</li>
                    </ul>
                </div>
                <div className='obescel flex bg-[#D9C84D] ml-8 mt-12 w-1/3 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='obesceltext mont text-black font-semibold text-3xl'>CONSEQUÊNCIAS PARA SAÚDE</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A obesidade está associada a uma variedade de problemas de saúde, incluindo:</p>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-3 mr-8 text-justify'>
                        <li>- <strong>Doenças Cardiovasculares:</strong> Hipertensão, doença arterial coronariana, acidente vascular cerebral.</li>
                        <li>- <strong>Diabetes Tipo 2:</strong> A obesidade é um fator de risco significativo para o desenvolvimento da diabetes.</li>
                        <li>- <strong>Doenças Respiratórias:</strong> Apneia do sono e dificuldades respiratórias.</li>
                        <li>- <strong>Problemas Musculoesqueléticos:</strong> Excesso de peso coloca pressão extra nas articulações.</li>
                        <li>- <strong>Câncer:</strong> A obesidade aumenta o risco de vários tipos de câncer, incluindo o de mama e o colorretal.</li>
                        <li>- <strong>Impacto Psicológico:</strong> Baixa autoestima, depressão e ansiedade.</li>
                    </ul>
                </div>
                <div className='obescel flex bg-[#D9C84D] ml-8 mt-12 w-1/3 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='obesceltext mont text-black font-semibold text-3xl'>ESTRATÉGIAS DE GERENCIAMENTO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>O gerenciamento da obesidade envolve uma abordagem integral:</p>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-3 text-justify mr-8'>
                        <li>- <strong>Mudança de Estilo de Vida:</strong> Adote uma dieta equilibrada, rica em frutas, vegetais, grãos integrais e proteínas magras. Pratique exercícios regularmente.</li>
                        <li>- <strong>Defina Metas Realistas:</strong> Estabeleça metas de perda de peso alcançáveis a curto e longo prazo.</li>
                        <li>- <strong>Apoio Social:</strong> Busque apoio de amigos, familiares ou grupos de apoio para manter a motivação.</li>
                        <li>- <strong>Aconselhamento Profissional:</strong> Considere consultar um nutricionista ou um profissional de saúde para orientação especializada.</li>
                        <li>- <strong>Tratamento Médico:</strong> Em casos graves, o médico pode considerar intervenções médicas ou cirúrgicas.</li>
                    </ul>
                </div>
                <div className='flex bg-[#D9C84D] ml-8 mt-12 w-40 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>DICAS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl ml-8 mt-8 mr-8 text-justify'>
                        <li>- <strong>Atividade Física:</strong> Pratique exercícios regularmente para manter um peso saudável e fortalecer o corpo.</li>
                        <li>- <strong>Alimentação Consciente:</strong> Esteja consciente de suas escolhas alimentares e evite comer por emoção.</li>
                        <li>- <strong>Gerenciamento do Estresse:</strong> Adote técnicas de relaxamento, como meditação e ioga.</li>
                        <li>- <strong>Educação e Conscientização:</strong> Aprenda sobre os riscos da obesidade e os benefícios de um estilo de vida saudável.</li>
                    </ul>
                </div>
                <div className='flex bg-[#D9C84D] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>CONCLUSÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify mb-20'>A obesidade é uma questão complexa, mas com conscientização, educação e ação proativa, é possível enfrentá-la e cultivar um estilo de vida saudável. A busca por um equilíbrio entre uma dieta nutritiva, exercícios regulares e cuidados emocionais é fundamental para prevenir e gerenciar a obesidade, promovendo bem-estar físico e mental.</p>
            </section>
        </>
    )
}