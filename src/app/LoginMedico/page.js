import React from 'react';
import Link from 'next/link';
import './global.css';

export default function LoginMedico() {
    return (
        <>
        <section className='flex flex-col'>
            <nav className='flex items-center justify-between navBackground p-4'>
                <div className='flex items-center'>
                    <img className='imagemlogo' src="/images/Logo.svg"></img>
                </div>
                <div className='flex items-center'>
                    <Link href='/Cadastro'><span className='mr-5 mb-1 text-black underline-2 hover:underline'>Criar Conta</span></Link>
                </div>
            </nav>
            <div className='flex justify-between'>
                    <img src='images/poligonos_esq.svg'></img>
                    <div className='flex justify-center gap-20'>
                        <div className='flex flex-col items-center mt-10'>
                            <h1 className='titulo mb-10'>Construa sua Jornada de Bem-Estar</h1>
                            <h3 className='texto mb-28'>Que bom te ter de volta! Faça seu login para aproveitar todos os <br></br> recursos do <img className='inline-block' src='/images/LogoPaciente.svg'></img>.Pode contar com a gente pra construção de <br></br> uma vida mais saudável e com qualidade.</h3>
                            <form>
                                <div className='botaologin-Med flex mb-10 items-center justify-center'>
                                    <label className='flex p-5 justify-start'><img src='/images/Botao-Perfil.svg'></img><input className='bg-color-Med ml-4 mont text-black pr-40 pt-5 pb-5' type="number" min='0' id='crm' required placeholder='CRM'/></label>
                                    
                                </div>
                                <div className='botaologin-Med flex mb-10 items-center justify-center'>
                                    <label className='flex p-5'><img src='/images/senhaCadeado.svg'></img><input className='bg-color-Med ml-4 mont text-black pr-40 pt-5 pb-5' type="password" id='password' required placeholder='Senha'/></label>
                                    
                                </div>
                                <Link href='./LoginMedico'>
                                    <div className='botaoacessar-Med flex items-center justify-center mt-20'>
                                        <button className='mont textoacessar'>Acessar</button>
                                    </div>
                                </Link>
                            </form>

                            <span className='mt-28 textosenha underline-2 hover:underline'>Esqueceu a senha?</span>

                            <Link href='./Login'>
                                <div className='botaovoltar mt-40 bg-[#8EBF9F] flex items-center justify-center'>
                                    <span className='mont text-black font-medium text-xl'>Voltar</span>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <img src='images/poligonos_dir.svg'></img>
                </div>
        </section>


        </>
    )
}