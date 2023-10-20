"use client"
import React, { useState, useEffect } from 'react';
import '../app/Perfil/global.css';

export default function PerfilForm() {
    return (
        <>
            <form>
                <div className='gridcel grid grid-cols-1 gap-10 justify-items-center'>
                    <div className='datacel flex w-[50%] mt-20'>
                        <label htmlFor='perfNome' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Nome: </label>
                        <input id='perfNome'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                    </div>
                    <div className='datacel flex w-[50%]'>
                        <label htmlFor='perfSobrenome' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Sobrenome: </label>
                        <input id='perfSobrenome'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                    </div>
                    <div className='datacel flex w-[50%]'>
                        <label htmlFor='perfGenero' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Gênero: </label>
                        <input id='perfGenero'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                    </div>
                    <div className='datacel flex w-[50%]'>
                        <label htmlFor='perfEmail' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Email: </label>
                        <input id='perfEmail'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                    </div>
                    <div className='datacel flex w-[50%]'>
                        <label htmlFor='perfSenha' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Senha: </label>
                        <input id='perfSenha'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl'></input>
                    </div>
                </div>
            </form>
        </>
    )
}