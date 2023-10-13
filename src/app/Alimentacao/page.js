import React from 'react';
import Link from 'next/link';
import './global.css';
import UserMenu from '@/components/UserMenu'; 

export default function Alimentacao() {
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
                <div className='flex bg-[#8F776E] items-center justify-start h-20'>
                    <Link href='/Artigos'><img className='w-9 h-9 ml-16' src='/images/buttonVoltar.svg'></img></Link>
                </div>
                <div className='divimagemartigo6 flex flex-col'>
                    <h1 className='tituloartigo mont text-black font-semibold text-4xl mb-3 ml-8 mt-8'>Os hábitos saudáveis</h1>
                    <h1 className='colortexto6 tituloartigo mont text-black font-semibold text-4xl ml-8'>Alimentação Saudável</h1>
                    <p className='subartigo mont text-black mt-56 ml-8 font-medium pb-10'>O que significa comer de forma saudável e como você pode fazer escolhas alimentares que beneficiem seu corpo e sua mente.</p>
                </div>
                <div className='flex bg-[#8F776E] ml-8 mt-12 w-44 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>O QUE É?</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify'>A comida é mais do que apenas combustível; é a matéria-prima que nosso corpo usa para se regenerar e funcionar corretamente. Escolher alimentos ricos em nutrientes é essencial para manter a saúde e o bem-estar.</p>
                <div className='flex bg-[#8F776E] ml-8 mt-12 w-1/2 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>OS PRINCÍPIOS DA ALIMENTAÇÃO SAUDÁVEL</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl mt-7 text-justify ml-10 mr-10'>
                        <li>- <strong>Variedade:</strong> Consuma uma ampla gama de alimentos, incluindo frutas, vegetais, grãos integrais, proteínas magras e laticínios com baixo teor de gordura.</li>
                        <li>- <strong>Moderação:</strong> Evite o excesso de calorias, açúcares e gorduras saturadas.</li>
                        <li>- <strong>Equilíbrio:</strong> Mantenha um equilíbrio entre a ingestão de calorias e o gasto energético para manter um peso saudável.</li>
                        <li>- <strong>Hidratação:</strong> Beba bastante água ao longo do dia para manter o corpo hidratado.</li>
                    </ul>
                </div>
                <div className='flex bg-[#8F776E] ml-8 mt-12 w-60 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>BENEFÍCIOS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl mt-7 text-justify ml-10 mr-10'>
                        <li>- <strong>Saúde Cardiovascular:</strong> Ajuda a reduzir o risco de doenças cardíacas.</li>
                        <li>- <strong>Controle de Peso:</strong> Facilita a manutenção de um peso saudável.</li>
                        <li>- <strong>Saúde Mental:</strong> Pode melhorar o humor e a função cognitiva.</li>
                        <li>- <strong>Digestão:</strong> Promove um sistema digestivo saudável.</li>
                    </ul>
                </div>
                <div className='flex bg-[#8F776E] ml-8 mt-12 w-80 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>DICAS PRÁTICAS</h2>
                </div>
                <div>
                    <ul className='mont text-black text-2xl mt-7 text-justify ml-10 mr-10'>
                        <li>- <strong>Planejamento:</strong> Planeje suas refeições com antecedência para evitar escolhas alimentares impulsivas.</li>
                        <li>- <strong>Leitura de Rótulos:</strong> Leia os rótulos dos alimentos para entender os ingredientes e o valor nutricional.</li>
                        <li>- <strong>Porções Adequadas:</strong> Esteja ciente das porções para evitar superdimensionamento.</li>
                        <li>- <strong>Cozinha em Casa:</strong> Prepare refeições em casa para ter mais controle sobre os ingredientes.</li>
                        <li>- <strong>Moderação nas Tentações:</strong> Desfrute de indulgências ocasionalmente, mas com moderação.</li>
                    </ul>
                </div>
                <div className='flex bg-[#8F776E] ml-8 mt-12 w-64 h-20 rounded-2xl items-center justify-center'>
                    <h2 className='mont text-black font-semibold text-3xl'>CONCLUSÃO</h2>
                </div>
                <p className='mont text-black text-2xl mt-7 ml-10 mr-10 text-justify mb-20'>Uma alimentação saudável é uma das melhores formas de cuidar de si mesmo. Ela não é uma dieta restritiva, mas sim uma abordagem equilibrada que nutre o corpo e promove a saúde a longo prazo. Comece com pequenas mudanças em sua dieta e, com o tempo, você colherá os benefícios de uma vida mais saudável e cheia de energia. Lembre-se de que a chave está em fazer escolhas conscientes e sustentáveis.</p>
            </section>
        </>
    )
}