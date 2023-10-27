"use client"
import React from 'react';
import Link from 'next/link';
import './global.css';
import Metas from '@/components/Metas.jsx';
import UserMenu from '@/components/UserMenu';
import Chatbot from '@/components/WatsonAssistantChat.jsx';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";



export default function HomePaciente() {
    const auth = getAuth();
    const [userData, setUserData] = useState(null);
    const [proximaConsulta, setProximaConsulta] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const authUser = auth.currentUser;

            if (authUser && authUser.uid) {
                console.log('id authuser:' + authUser.uid);
                // Aqui, você pode usar o ID do usuário para buscar dados no Firebase
                // Substitua 'usuarios' pelo nome da coleção no seu banco de dados
                const userDocRef = doc(db, 'usuarios', authUser.uid);
                console.log(userDocRef);

                try {
                    const userDocSnapshot = await getDoc(userDocRef);
                    if (userDocSnapshot && userDocSnapshot.exists()) {
                        setUserData(userDocSnapshot.data());
                        const consultas = userDocSnapshot.data().consultas;
            
                        // Encontre a próxima consulta
                        const dataAtual = new Date();
                        const proxima = consultas.filter(consulta => new Date(consulta.data) >= dataAtual);
                        proxima.sort((a, b) => new Date(a.data) - new Date(b.data));
                        setProximaConsulta(proxima[0]);
                      }
                } catch (error) {
                    console.error('Erro ao buscar dados do usuário:', error);
                }
            }
        };

        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                console.log("Email do usuário:", authUser.email);
                console.log("ID do usuário:", authUser.uid);

                // Chama a função para buscar dados do usuário
                fetchUserData();
            } else {
                console.log("Usuário não autenticado");
            }
        });

        return () => unsubscribe(); // Limpa o evento de change ao desmontar o componente
    }, [auth]);

    return (
        <>
            {userData && (
                <section className='flex flex-col'>
                    <nav className='flex items-center justify-between bg-[#B483BB] p-4'>
                        <div className='flex items-center'>
                            <img className='imagemlogo' src="/images/Logo.svg"></img>
                        </div>
                        <div className='flex items-center'>
                            <UserMenu></UserMenu>
                        </div>
                    </nav>
                    <div className=' flex bg-[#AF75BF] items-center justify-center h-20' >
                        <ul className='lg:gap-48 flex textonav'>
                            <Link href='/HomePaciente'><li>Home</li></Link>
                            <Link href='/ExamesEConsultas'><li>Exames & Consultas</li></Link>
                            <Link href='/SaudeEBemEstar'><li>Saúde & Bem estar</li></Link>
                            <Link href='/Artigos'><li>Artigos</li></Link>
                        </ul>
                    </div>
                    <h1 className='mont text-black italic text-4xl text-center mt-12'>
                        Bem-vindo (a) de volta, {userData?.nome} {userData?.sobrenome}!
                    </h1>
                    <div className='bg-[#D3A7D9] cardverde mt-20 rounded-3xl ml-10 p-5'>
                        <h2 className='text-black text-center mont text-3xl font-normal'>Lembrete! <br></br>Sua próxima consulta é:</h2>
                        <div className='flex flex-wrap justify-center items-center gap-20 mt-5'>
                                <div className='consulta-item relative'>
                                {userData && (
                                        <div className='resocel flex flex-col bg-[#AF75BF] rounded-3xl w-100 h-100 p-5'>
                                        <h1 className='mont text-black text-3xl text-normal leading-10'>
                                            Próxima Consulta:
                                        </h1>
                                        {proximaConsulta ? (
                                            <>
                                            <ul className='mt-5'>
                                                <li>
                                                <p className='mont text-black text-3xl text-normal leading-10'>
                                                    Dia: {proximaConsulta.data}
                                                </p>
                                                </li>
                                                <li>
                                                <p className='mont text-black text-3xl text-normal leading-10'>
                                                    Médico: {proximaConsulta.nome}
                                                </p>
                                                </li>
                                                <li>
                                                <p className='mont text-black text-3xl text-normal leading-10'>
                                                    Especialidade: {proximaConsulta.especialidade}
                                                </p>
                                                </li>
                                                <li>
                                                <p className='mont text-black text-3xl text-normal leading-10'>
                                                    Observação: {proximaConsulta.obs}
                                                </p>
                                                </li>
                                            </ul>
                                            <p className='mont text-black text-3xl text-normal text-center mt-10'>
                                                Endereço: {proximaConsulta.endereco}
                                            </p>
                                            </>
                                        ) : (
                                            <p className='mont text-black text-3xl text-normal text-center'>
                                            Não há consultas futuras.
                                            </p>
                                        )}
                                        </div>
                                    )}
                                </div> 
                        </div>
                        {/* <h3 className='mont text-black font-light text-2xl mt-5 ml-8'>Gostaria de modificar suas consultas?</h3>
                        <div className='lg:mt-10 flex justify-center items-center bg-[#FCECF5] botaocard rounded-3xl ml-72'>
                            <span className='text-black text-normal text-center text-2xl p-1'>Modificar Consulta</span>
                        </div> */}
                    </div>

                    <div className='flex flex-row-reverse'>
                        <div className='bg-[#D3A7D9] cardverde mt-20 rounded-3xl mr-10 p-5'>
                            <h2 className='text-black text-center mont text-3xl font-normal bg-[#AF75BF] rounded-3xl pt-4 pb-4'>Suas metas são:</h2>
                            <Metas></Metas>
                        </div>
                    </div>



                    <div className='flex flex-col bg-[#D3A7D9] cardverde mt-20 rounded-3xl ml-10 p-5 mb-28'>
                        <h2 className='text-black mont text-3xl font-normal p-5 bg-[#AF75BF] rounded-3xl text-center'>Artigo do dia: </h2>
                        <div className='divcelartigos flex h-2/3 pt-20'>
                            <p className='textocelartigos mont text-black text-2xl leading-10 text-medium w-4/6 pr-10 pl-4'>Leia nosso artigo sobre atividades físicas para descobrir como incorporar exercícios em sua rotina diária e melhorar sua saúde geral.</p>
                            <Link href='/AtvFisica'>
                                <div className='cardartigo flex flex-col bg-[#A65C41]'>
                                    <img src='/images/atividade_fisica.svg'></img>
                                    <div className='flex bg-white items-center justify-center'>
                                        <p className='mont font-normal text-black text-xl'>Atividade Física</p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='mont font-normal text-center text-sm w-2/3 pt-3'>Um Passo Vital para uma Vida Saudável</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Chatbot></Chatbot>
                </section>
            )}
        </>
    )
}