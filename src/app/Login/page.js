import React from 'react';
import Link from 'next/link';
import './global.css';
import { Button } from '@mui/material';


export default function Login(){
    return (
        <>
        <section className='flex flex-col'>
            <nav className='flex items-center justify-between navBackground p-4'>
                <div className='flex items-center'>
                    <Link href='./'><img className='imagemlogo' src="/images/Logo.svg"></img></Link>
                </div>
            </nav>
            <div className='flex justify-between logincel'>
                <img className='mira_cs' src='images/poligonos_esq.svg'></img>
                <div className='flex justify-center lg:gap-20'>
                    <img className='mira_cs' src='images/mira_cs.svg'></img>
                    <div className='flex flex-col items-center mt-48'>
                        <Button href='./LoginPaciente'>
                            <div className='botaologin flex items-center justify-center bg-[#8EBF9F]'>
                                <span className='mont text-black font-medium text-3xl'>Login Paciente</span>
                            </div>
                        </Button>
                        <Button href='./LoginMedico'>
                            <div className='botaologin flex items-center justify-center bg-[#AF75BF] mt-5'>
                                <span className='mont text-black font-medium text-3xl'>Login Médico</span>
                            </div>
                        </Button>

                        <span className=' mt-48 mont text-black text-base underline-2 hover:underline'>Não tem uma conta?</span>

                        <Button href='./Cadastro'>
                            <div className='botaocriar mt-7 bg-[#D3A7D9] flex items-center justify-center'>
                                <span className='mont text-black font-medium text-xl'>Criar Conta</span>
                            </div>
                        </Button>
                    </div>
                    <img className='mira_cs' src='images/mira_cs.svg'></img>
                </div>
               
                <img className='mira_cs' src='images/poligonos_dir.svg'></img>
            </div>


        </section>
        </>
    )
}
