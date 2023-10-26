"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import UserMenu from '@/components/UserMenu';
import { UserIcon } from '@heroicons/react/24/outline'
import PerfilForm from '@/components/PerfilForm';
import './global.css';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Perfil() {
    const auth = getAuth();
    const [userData, setUserData] = useState(null);
    
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
                    <div className='flex bg-[#AF75BF] items-center justify-center text-center h-20' >
                        <ul className='lg:gap-48 flex textonav'>
                            <li>Meu Perfil</li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center flex-col mt-12'>
                        <h1 className='mont text-black italic text-4xl text-center'>
                            Bem-vindo (a) de volta, {userData?.nome} {userData?.sobrenome}!
                        </h1>
                        <UserIcon className='w-1/6 h-1/6 text-black icon mt-8'></UserIcon>
                    </div>
                    <h1 className='mont text-black italic text-4xl mt-20 ml-6'>
                        Dados cadastrais
                    </h1>
                    <PerfilForm></PerfilForm>
                    <Link href='./HomePaciente' className='flex items-center justify-center mt-16 mb-20'>
                        <div className='botaovoltar bg-[#D3A7D9] flex items-center justify-center'>
                            <span className='mont text-black font-medium text-xl'>Voltar</span>
                        </div>
                    </Link>
                </section>
            )}
        </>
    )
}