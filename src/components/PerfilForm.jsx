"use client"
import React, { useState, useEffect } from 'react';
import '../app/Perfil/global.css';
import { db } from '@/app/firebase';
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import toast from 'react-hot-toast';


export default function PerfilForm() {
    const [isEditing, setIsEditing] = useState(false);
    const auth = getAuth();
    const [userData, setUserData] = useState(null);
    const [editedUserData, setEditedUserData] = useState({
        nome: "",
        sobrenome: "",
        dataNascimento: "",
        genero: "",
        email: "",
        senha: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const authUser = auth.currentUser;

            if (authUser && authUser.uid) {
                const userDocRef = doc(db, 'usuarios', authUser.uid);

                try {
                    const userDocSnapshot = await getDoc(userDocRef);
                    if (userDocSnapshot && userDocSnapshot.exists()) {
                        setUserData(userDocSnapshot.data());
                        setEditedUserData(userDocSnapshot.data());
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

                fetchUserData();
            } else {
                console.log("Usuário não autenticado");
            }
        });

        return () => unsubscribe();
    }, [auth]);

    function habilitarEdicao() {
        setIsEditing(true);
    }

    async function salvarAlteracoes() {
        setIsEditing(false);

        const authUser = auth.currentUser;

        if (authUser && authUser.uid) {
            const userDocRef = doc(db, 'usuarios', authUser.uid);

            try {
                // Usar setDoc em vez de updateDoc para salvar todas as propriedades do objeto
                await updateDoc(userDocRef, editedUserData);
                toast.success('Alteração feita com sucesso!')
            } catch (error) {
                toast.error('Erro ao salvar alterações no banco de dados:', error);
            }
        }
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setEditedUserData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <>
            {userData && (
                <form id='perfilForm'>
                    <div className='gridcel grid grid-cols-1 gap-10 justify-items-center'>
                        <div className='datacel flex w-[50%] mt-20'>
                            <label htmlFor='nome' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Nome: </label>
                            {isEditing ? (
                                <input
                                    id='nome'
                                    type="text"
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                    value={editedUserData.nome}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <div
                                    id='nome'
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                >
                                    {editedUserData.nome}
                                </div>
                            )}
                        </div>
                        <div className='datacel flex w-[50%]'>
                            <label htmlFor='sobrenome' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Sobrenome: </label>
                            {isEditing ? (
                                <input
                                    id='sobrenome'
                                    type="text"
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                    value={editedUserData.sobrenome}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <div
                                    id='sobrenome'
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                >
                                    {editedUserData.sobrenome}
                                </div>
                            )}
                        </div>
                        <div className='datacel flex w-[50%]'>
                            <label htmlFor='dataNascimento' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Data de Nascimento: </label>
                            {isEditing ? (
                                <input
                                    id='dataNascimento'
                                    type="text"
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                    value={editedUserData.dataNascimento}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <div
                                    id='dataNascimento'
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                >
                                    {editedUserData.dataNascimento}
                                </div>
                            )}
                        </div>
                        <div className='datacel flex w-[50%]'>
                            <label htmlFor='genero' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Gênero: </label>
                            {isEditing ? (
                                <input
                                    id='genero'
                                    type="text"
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                    value={editedUserData.genero}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <div
                                    id='genero'
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                >
                                    {editedUserData.genero}
                                </div>
                            )}
                        </div>
                        <div className='datacel flex w-[50%]'>
                            <label htmlFor='email' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Email: </label>
                            {isEditing ? (
                                <input
                                    id='email'
                                    type="text"
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                    value={editedUserData.email}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <div
                                    id='email'
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                >
                                    {editedUserData.email}
                                </div>
                            )}
                        </div>
                        <div className='datacel flex w-[50%]'>
                            <label htmlFor='senha' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Senha: </label>
                            {isEditing ? (
                                <input
                                    id='senha'
                                    type="text"
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                    value={editedUserData.senha}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <div
                                    id='senha'
                                    className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'
                                >
                                    {editedUserData.senha}
                                </div>
                            )}
                        </div>
                        <div className='flex items-center justify-center mt-12'>
                            <button
                                id="salvarAlteracoesBtn"
                                className='botaovoltar bg-[#949494] flex items-center justify-center'
                                style={{ display: isEditing ? 'block' : 'none' }}
                                onClick={salvarAlteracoes}
                                type='button'
                            >
                                <span className='mont text-black font-medium text-xl'>Salvar Alterações</span>
                            </button>
                        </div>
                        <div className='flex items-center justify-center mt-12'>
                            <button
                                id='editarPerfilBtn'
                                className='botaovoltar bg-[#949494] flex items-center justify-center'
                                onClick={habilitarEdicao}
                                type='button'
                                style={{ display: isEditing ? 'none' : 'block' }}
                            >
                                <span className='mont text-black font-medium text-xl'>Editar Perfil</span>
                            </button>
                        </div>
                    </div>
                </form >
            )
            }
        </>
    )
}