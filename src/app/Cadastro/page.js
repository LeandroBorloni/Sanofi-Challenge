"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './global.css';
 
import {db} from '@/app/firebase';
import { collection, addDoc} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import TermoUso from '@/components/TermoUso.jsx';


export default function Cadastro() {
    const handleChange = (event) => {
        setMedicos(event.target.value);
    };

    //------------------------------- Validando Formulario ---------------------------------------
    const [errors, setErrors] = useState({ email: '', senha: '' });
    const validateFormUsuario = () => {
        let valid = true;
        const newErrors = { email: '', senha: '' };
        
        // if (newUsuario.email !== newUsuario.email2) {
        //     newErrors.email = "Os emails não coincidem";
        //     valid = false;
        // }
    
        // if (newUsuario.senha !== newUsuario.senha2) {
        //     newErrors.senha = "As senhas não coincidem";
        //     valid = false;
        // }
        
        // if (newUsuario.nome === '' || newUsuario.sobrenome === '' || newUsuario.dataNascimento === '' || newUsuario.email === '' || newUsuario.senha === '') {
        //     valid = false;
        // }
    
        setErrors(newErrors);
        return valid;
    };
    const validateFormMedico = () => {
        let valid = true;
        const newErrors = { email: '', senha: '' };

        // if (newUsuario.email !== newUsuario.email2) {
        //     newErrors.email = "Os emails não coincidem";
        //     valid = false;
        // }

        // if (newUsuario.senha !== newUsuario.senha2) {
        //     newErrors.senha = "As senhas não coincidem";
        //     valid = false;
        // }
        // if(newMedico.nome === '' || newMedico.sobrenome === '' || newMedico.dataNascimento === '' || newMedico.email === '' || newMedico.senha === '' || newMedico.crm===''){
        //     valid=false;
        // }
        setErrors(newErrors);
        return valid;
    };

    //------------------------------- DATABASE ---------------------------------------
    const [usuarios, setUsuarios] = useState([])
    const [newUsuario, setNewUsuario] = useState({nome:'', sobrenome:'', dataNascimento:'', genero:'', email:'',email2:'',senha:'', senha2:'' })

    

    const addUsuario = async (e) => {
        console.log("Função addUsuario chamada");
        
        e.preventDefault();
    
        if (validateFormUsuario()) {
            
            try {
                const docRef = await addDoc(collection(db, 'usuarios'), {
                    nome: newUsuario.nome,
                    sobrenome: newUsuario.sobrenome,
                    dataNascimento: newUsuario.dataNascimento,
                    genero: newUsuario.genero,
                    email: newUsuario.email,
                    senha: newUsuario.senha
                });
    
                console.log("Document written with ID: ", docRef.id);
    
                setNewUsuario({
                    nome: '',
                    sobrenome: '',
                    dataNascimento: '',
                    genero: '',
                    email: '',
                    senha: ''
                });
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        } else {
            console.log("Formulário Inválido");
        }
    }

    const [medicos, setMedicos] = useState([])
    const [newMedico, setNewMedico] = useState({nome:'', sobrenome:'', dataNascimento:'', genero:'', email:'',email2:'',senha:'', senha2:'', crm:'' })
    const [isMedico, setIsMedico] = useState(false);

    const handleMedicoChange = (event) => {
        setIsMedico(event.target.value === "sim");
    };

    const addMedico = async (e) => {
        console.log("Função addMedico chamada");
        e.preventDefault();
        
        if (validateFormMedico) {
            try {
                const docRef = await addDoc(collection(db, 'medicos'), {
                    nome: newMedico.nome,
                    sobrenome: newMedico.sobrenome,
                    dataNascimento: newMedico.dataNascimento,
                    genero: newMedico.genero,
                    email: newMedico.email,
                    senha: newMedico.senha,
                    crm: newMedico.crm
                });
    
                console.log("Document written with ID: ", docRef.id);
    
                setNewMedico({
                    nome: '',
                    sobrenome: '',
                    dataNascimento: '',
                    genero: '',
                    email: '',
                    senha: '',
                    crm: ''
                });
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
        else {
            console.log("Formulário Inválido");
        }
    };

    
    //------------------------------- AUTENTICAÇÃO ---------------------------------------
    
    const [authError, setAuthError] = useState(null);
    const auth = getAuth();
    async function handleCadastro(e){
        console.log("Função de autenticação chamada")
        e.preventDefault();

        if (validateFormMedico()||validateFormUsuario()) {
            console.log("Passou pela validação de formulário")
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, newUsuario.email2 || newMedico.email2, newUsuario.senha2 || newMedico.senha2);
                const user = userCredential.user;
                // O certo já seria chamar o addUsuario ou o AddMedico passando como parametro o user.uid,
                // Ex: AddUsuario(user.uid) e lá no AddUsuario colocar o uid dele o mesmo do auth. Assim:
                /* 
                    const docRef = await addDoc(collection(db, 'usuarios'), {
                        uid: user.uid,
                        nome: newUsuario.nome,
                        sobrenome: newUsuario.sobrenome,
                        dataNascimento: newUsuario.dataNascimento,
                        genero: newUsuario.genero,
                        email: newUsuario.email,
                        senha: newUsuario.senha
                    });
                */
                console.log('Usuário autenticado com sucesso:', user);
            } catch (error) {
                if (error.code === 'auth/invalid-email') {
                    setAuthError('Endereço de e-mail inválido. Verifique o formato do e-mail.');
                } else if (error.code === 'auth/weak-password') {
                    setAuthError('A senha é muito fraca. Use uma senha mais segura.');
                } else {
                    setAuthError('Erro desconhecido: ' + error.message);
                }
                console.error('Erro de autenticação:', error);
            }
        } else {
            console.log("Erro no Form")
            setAuthError('Por favor, preencha os campos de email e senha.');
        }
      };
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
                                <label className='flex mont bg-color-Cad labelformulario items-center justify-center lg:p-5 pl-3'>Nome:
                                    <input
                                        className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5'
                                        type="name"
                                        id='nome'
                                        value={isMedico ? newMedico.nome : newUsuario.nome}
                                        onChange={(e) => {
                                            if (isMedico) {
                                                setNewMedico({ ...newMedico, nome: e.target.value });
                                                console.log("Novo valor de newMedico.nome:", e.target.value);
                                                console.log("Estado newMedico atualizado:", newMedico);
                                            } else {
                                                setNewUsuario({ ...newUsuario, nome: e.target.value });
                                                console.log("Novo valor de newUsuario.nome:", e.target.value);
                                                console.log("Estado newUsuario atualizado:", newUsuario);
                                            }
                                        }}
                                        required
                                    />

                                </label>
                            </div>
                            
                            <div className='botaoCadastro flex mb-10 items-center'>
                                <label className='flex mont bg-color-Cad labelformulario items-center justify-center lg:p-5 pl-3'>Sobrenome:
                                    <input
                                        className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5'
                                        type="name"
                                        id='sobrenome'
                                        value={isMedico ? newMedico.sobrenome : newUsuario.sobrenome}
                                        onChange={(e) => {
                                            if (isMedico) {
                                                setNewMedico({ ...newMedico, sobrenome: e.target.value });
                                            } else {
                                                setNewUsuario({ ...newUsuario, sobrenome: e.target.value });
                                            }
                                        }}
                                        required
                                    />
                                </label>
                            </div>
                            
                            <div className='botaoCadastro flex mb-10 items-center'>r
                                <label className='flex mont bg-color-Cad labelformulario items-center justify-cente lg:p-5 pl-3'>Data de nascimento:
                                    <input
                                        className='bg-color-Cad lg:ml-4 mont text-black lg:pr-36 pt-5 pb-5'
                                        type="date"
                                        id='dataNasc'
                                        value={isMedico ? newMedico.dataNascimento : newUsuario.dataNascimento}
                                        onChange={(e) => {
                                            if (isMedico) {
                                                setNewMedico({ ...newMedico, dataNascimento: e.target.value });
                                            } else {
                                                setNewUsuario({ ...newUsuario, dataNascimento: e.target.value });
                                            }
                                        }}
                                        required
                                    />
                                </label>
                            </div>
                            
                            <div className='botaoCadastro flex mb-10 items-center lg:pl-5 pl-3'>
                                <label htmlFor="genero" className='flex mr-4 labelformulario'>Gênero:</label>
                                <select id="genero" name="genero" className='labelformulario bg-color-Cad ml-4 lg:pr-36 pt-5 pb-5'>
                                    <option value="" disabled>Selecione um gênero</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="outro">Prefiro não informar</option>
                                </select>
                            </div>
                            
                            <div className='botaoCadastro flex mb-10 items-center'>
                                <label className='flex labelformulario items-center justify-center lg:p-5 pl-3'>Email:
                                    <input
                                        className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5'
                                        type="email"
                                        id='email'
                                        value={isMedico ? newMedico.email : newUsuario.email}
                                        onChange={(e) => {
                                            if (isMedico) {
                                                setNewMedico({ ...newMedico, email: e.target.value });
                                            } else {
                                                setNewUsuario({ ...newUsuario, email: e.target.value });
                                            }
                                        }}
                                        required
                                    />
                                </label>
                            </div>
                            
                            <div className='botaoCadastro flex mb-10 items-center'>
                                <label className='flex labelformulario items-center justify-center lg:p-5 pl-3'>Confirme o email:
                                    <input
                                        className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5'
                                        type="email"
                                        id='email2'
                                        value={isMedico ? newMedico.email2 : newUsuario.email2}
                                        onChange={(e) => {
                                            if (isMedico) {
                                                setNewMedico({ ...newMedico, email2: e.target.value });
                                            } else {
                                                setNewUsuario({ ...newUsuario, email2: e.target.value });
                                            }
                                        }}
                                        required
                                    />
                                </label>
                            </div>
                            
                            <div className='botaoCadastro flex mb-10 items-center'>
                                <label className='flex lg:p-5 labelformulario items-center justify-center pl-3'>Crie uma senha:
                                    <input
                                        className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5'
                                        type="password"
                                        id='senha'
                                        value={isMedico ? newMedico.senha : newUsuario.senha}
                                        onChange={(e) => {
                                            if (isMedico) {
                                                setNewMedico({ ...newMedico, senha: e.target.value });
                                            } else {
                                                setNewUsuario({ ...newUsuario, senha: e.target.value });
                                            }
                                        }}
                                        required
                                    />
                                </label>
                            </div>
                            
                            <div className='botaoCadastro flex mb-10 items-center'>
                                <label className='flex lg:p-5 labelformulario items-center justify-center pl-3'>Repita a senha:
                                    <input
                                        className='bg-color-Cad ml-4 mont text-black lg:pr-36 pt-5 pb-5'
                                        type="password"
                                        id='senha2'
                                        value={isMedico ? newMedico.senha2 : newUsuario.senha2}
                                        onChange={(e) => {
                                            if (isMedico) {
                                                setNewMedico({ ...newMedico, senha2: e.target.value });
                                            } else {
                                                setNewUsuario({ ...newUsuario, senha2: e.target.value });
                                            }
                                        }}
                                        required
                                    />
                                </label>
                            </div>
                    
                            <div className='botaoCadastro flex mb-10 items-center pl-5'>
                                <label htmlFor="medico" className='labelformulario flex mr-4'>É médico ?</label>
                                <select id="medico" name="medico" className='labelformulario bg-color-Cad ml-4 lg:pr-36 pt-5 pb-5' onChange={handleMedicoChange}>
                                    <option value="" disabled>Selecione uma opção</option>
                                    <option value="nao">Não</option>
                                    <option value="sim">Sim</option>
                                </select>
                            </div>
                            <div className={`botaoCadastro flex mb-10 items-center ${isMedico ? '' : 'invisible'}`}>
                                <label className='flex p-5 labelformulario items-center justify-center'>CRM: 
                                <input className='bg-color-Cad ml-4 mont text-black pr-36 pt-5 pb-5' 
                                type="text" 
                                id='crm' 
                                value={newMedico.crm}
                                onChange={(e) => setNewMedico({ ...newMedico, crm: e.target.value })}
                                required /></label>
                            </div>
                            <TermoUso></TermoUso>
                            <div className="flex flex-col justify-center items-center mt-56">
                                <p className="textocriarconta underline-2 hover:underline">Já tem uma conta?</p>
                                <button
                                    className="botaologin-cadastro mt-5 bg-[#D3A7D9] flex items-center justify-center"
                                    onClick={isMedico ? addMedico : addUsuario}
                                >
                                    <span className="mont text-black font-medium text-2xl">Cadastrar</span>
                                </button>
                                <Link href="./Login">
                                    <button className="botaologin-cadastro mt-5 bg-[#D3A7D9] flex items-center justify-center"
                                            onClick={handleCadastro}>
                                        <span className="mont text-black font-medium text-2xl">Login</span>
                                    </button>
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