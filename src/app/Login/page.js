import React from 'react';
import Link from 'next/link';
import './global.css';


export default function Login(){
    return (
        <>
        <section className='flex flex-col'>
            <nav className='flex items-center justify-between navBackground p-4'>
                <div className='flex items-center'>
                    <Link href='./'><img className='imagemlogo' src="/images/Logo.svg"></img></Link>
                </div>
            </nav>
            <div className='flex justify-between'>
                <img src='images/poligonos_esq.svg'></img>
                <div className='flex justify-center gap-20'>
                    <img src='images/mira_cs.svg'></img>
                    <div className='flex flex-col items-center mt-48'>
                        <Link href='./LoginPaciente'>
                            <div className='botaologin flex items-center justify-center bg-[#8EBF9F]'>
                                <button className='mont text-black font-medium text-3xl'>Login Paciente</button>
                            </div>
                        </Link>
                        <Link href='./LoginMedico'>
                            <div className='botaologin flex items-center justify-center bg-[#AF75BF] mt-5'>
                                <button className='mont text-black font-medium text-3xl'>Login Médico</button>
                            </div>
                        </Link>

                        <span className=' mt-48 mont text-black text-base underline-2 hover:underline'>Não tem uma conta?</span>

                        <Link href='./Cadastro'>
                            <div className='botaocriar mt-7 bg-[#D3A7D9] flex items-center justify-center'>
                                <span className='mont text-black font-medium text-xl'>Criar Conta</span>
                            </div>
                        </Link>
                    </div>
                    <img src='images/mira_cs.svg'></img>s
                </div>
               
                <img src='images/poligonos_dir.svg'></img>
            </div>


        </section>
        </>
    )
}
