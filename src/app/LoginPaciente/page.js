"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './global.css';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function LoginPaciente() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [loading, setLoading] = useState(false); // Novo estado para controlar o loading
    const { push } = useRouter()

    function login(e) {
        e.preventDefault();
        const auth = getAuth();

        // Iniciar animação de loading
        setLoading(true);

        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                push("/HomePaciente");
            })
            .catch((error) => {
                console.error(error);
                toast.error('Dados inválidos');
            })
            .finally(() => {
                // Parar animação de loading, tanto em caso de sucesso quanto em caso de erro
                setLoading(false);
            });
    }
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
                <div className='flex justify-between flex-note'>
                    <img className='poligonos' src='images/poligonos_esq.svg'></img>
                    <div className='flex justify-center gap-20'>
                        <div className='flex flex-col items-center mt-10'>
                            <h1 className='titulo mb-10'>Continue sua Jornada de Bem-Estar</h1>
                            <h3 className='textoPaciente mb-28'>Que bom te ter de volta! Faça seu login para aproveitar todos os <br></br> recursos do <img className='inline-block' src='/images/LogoPaciente.svg'></img>.Pode contar com a gente pra construção de <br></br> uma vida mais saudável e com qualidade.</h3>
                            <form onSubmit={login}>
                                <div className='botaologin-Pac flex mb-10 items-center justify-center'>
                                    <label className='flex p-5 justify-start' htmlFor='email'><img src='/images/Botao-Perfil.svg'></img><input className='bg-color ml-4 mont text-black pr-30 pt-5 pb-5' type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='E-mail' /></label>
                                </div>
                                <div className='botaologin-Pac flex mb-10 items-center justify-center'>
                                    <label className='flex p-5' htmlFor='password'><img src='/images/senhaCadeado.svg'></img><input className='bg-color ml-4 mont text-black pr-30 pt-5 pb-5' type="password" id='password' value={senha} onChange={(e) => setSenha(e.target.value)} required placeholder='Senha' /></label>
                                </div>
                                <button className='botaoacessar flex items-center justify-center mt-20' disabled={loading}>
                                    {loading ? (
                                        <span className='mont textoacessar'>Carregando...</span>
                                    ) : (
                                        <span className='mont textoacessar'>Acessar</span>
                                    )}
                                </button>
                            </form>

                            <span className='mt-28 textosenha underline-2 hover:underline'>Esqueceu a senha?</span>

                            <Link href='./Login'>
                                <div className='botaovoltar mt-40 bg-[#D3A7D9] flex items-center justify-center'>
                                    <span className='mont text-black font-medium text-xl'>Voltar</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <img className='poligonos' src='images/poligonos_dir.svg'></img>
                </div>
            </section>
        </>
    )
}