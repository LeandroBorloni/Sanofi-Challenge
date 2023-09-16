import React from 'react';
import Link from 'next/link';
import './global.css';

import Crm from '@/components/Crm.jsx';
import TermoUso from '@/components/TermoUso.jsx';

export default function Cadastro() {
    return (
        <>
            <section className='flex flex-col'>
                <nav className='flex items-center justify-between navBackground p-4'>
                    <div className='flex items-center'>
                        <Link href='./'><img className='imagemlogo' src="/images/Logo.svg"></img></Link>
                    </div>
                </nav>
                <div className='flex justify-center'>
                    <div className='flex justify-center'>
                        <div className='flex flex-col items-center mt-10'>
                            <h1 className='titulo mb-10'>Comece sua Jornada de <br></br> Bem-Estar</h1>
                            <h3 className='textocadastro'>Cadastro no <span className='text-[#7B04E7]'>Sano</span>Health</h3>
                            <div className='mt-3'><img src='/images/LineCadastro.svg'></img></div>
                            <p className='textocriarconta mt-7 mb-20'>Crie uma conta para aproveitar todos os recursos do <br></br> SanoHealth e trilhar o caminho para uma vida <br></br> saudável e equilibrada.</p>
                            <form id='cadastro'>
                                <div className='botaoCadastro flex mb-10 items-center'>
                                    <label className='flex mont bg-color-Cad labelformulario items-center justify-center p-5'>Nome:    <input className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5' type="name" id='nome' required /></label>
                                </div>
                                <div className='botaoCadastro flex mb-10 items-center'>
                                    <label className='flex mont bg-color-Cad labelformulario items-center justify-center p-5'>Sobrenome:  <input className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5' type="name" id='sobrenome' required /></label>
                                </div>
                                <div className='botaoCadastro flex mb-10 items-center'>
                                    <label className='flex mont bg-color-Cad labelformulario items-center justify-center p-5'>Data de nascimento: <input className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5' type="date" id='dataNasc' required /></label>
                                </div>
                                <div className='botaoCadastro flex mb-10 items-center pl-5'>
                                    <label htmlFor="genero" className='flex mr-4 labelformulario'>Gênero:</label>
                                    <select id="genero" name="genero" className='labelformulario bg-color-Cad ml-4 lg:pr-36 pt-5 pb-5'>
                                        <option value="" disabled>Selecione um gênero</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                        <option value="outro">Prefiro não informar</option>
                                    </select>
                                </div>
                                <div className='botaoCadastro flex mb-10 items-center'>
                                    <label className='flex labelformulario items-center justify-center p-5'>Email: <input className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5' type="email" id='email' required /></label>
                                </div>
                                <div className='botaoCadastro flex mb-10 items-center'>
                                    <label className='flex labelformulario items-center justify-center p-5'>Confirme o email: <input className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5' type="email" id='email' required /></label>
                                </div>
                                <div className='botaoCadastro flex mb-10 items-center'>
                                    <label className='flex p-5 labelformulario items-center justify-center'>Crie uma senha: <input className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5' type="password" id='senha' required /></label>
                                </div>
                                <div className='botaoCadastro flex mb-10 items-center'>
                                    <label className='flex p-5 labelformulario items-center justify-center'>Repita a senha: <input className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5' type="password" id='senha' required /></label>
                                </div>
                                <Crm></Crm>
                                <TermoUso></TermoUso>
                                <div className='flex flex-col justify-center items-center mt-56'>
                                    <p className='textocriarconta underline-2 hover:underline'>Já tem uma conta?</p>
                                    <Link href='./Login'>
                                        <div className='botaologin-cadastro mt-5 mb-40 bg-[#D3A7D9] flex items-center justify-center'>
                                            <span className='mont text-black font-medium text-2xl'>Login</span>
                                        </div>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}