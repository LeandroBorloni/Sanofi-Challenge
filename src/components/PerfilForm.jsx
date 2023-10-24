"use client"
import React, { useState, useEffect } from 'react';
import '../app/Perfil/global.css';

export default function PerfilForm() {
    function habilitarEdicao() {
        var inputs = document.querySelectorAll('#perfilForm input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute('disabled');
        }

        document.getElementById('editarPerfilBtn').style.display = 'none';
        document.getElementById('salvarAlteracoesBtn').style.display = 'block';
    }

    function salvarAlteracoes() {
        var inputs = document.querySelectorAll('#perfilForm input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('disabled', 'true');
        }

        document.getElementById('editarPerfilBtn').style.display = 'block';
        document.getElementById('salvarAlteracoesBtn').style.display = 'none';
    }
    return (
        <>
            <form id='perfilForm'>
                <div className='gridcel grid grid-cols-1 gap-10 justify-items-center'>
                    <div className='datacel flex w-[50%] mt-20'>
                        <label htmlFor='perfNome' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Nome: </label>
                        <input id='perfNome'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl' disabled></input>
                    </div>
                    <div className='datacel flex w-[50%]'>
                        <label htmlFor='perfSobrenome' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Sobrenome: </label>
                        <input id='perfSobrenome'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl' disabled></input>
                    </div>
                    <div className='datacel flex w-[50%]'>
                        <label htmlFor='perfGenero' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Gênero: </label>
                        <input id='perfGenero'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl' disabled></input>
                    </div>
                    <div className='datacel flex w-[50%]'>
                        <label htmlFor='perfEmail' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Email: </label>
                        <input id='perfEmail'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl' disabled></input>
                    </div>
                    <div className='datacel flex w-[50%]'>
                        <label htmlFor='perfSenha' className='textcel bg-[#BBB9B9] text-center text-black mont rounded-l-3xl text-2xl p-5 font-light w-1/2 '>Senha: </label>
                        <input id='perfSenha'
                        type="text"
                        className='textcelinput bg-[#BBB9B9] text-center text-black mont rounded-r-3xl p-5 font-light w-1/2 text-2xl' disabled></input>
                    </div>
                    <div className='flex items-center justify-center mt-12'>
                    <button id="salvarAlteracoesBtn" className='botaovoltar bg-[#949494] flex items-center justify-center' style={{display: 'none'}} onClick={salvarAlteracoes} type='button'>
                        <span className='mont text-black font-medium text-xl'>Salvar Alterações</span>
                    </button>
                    </div>
                    <div className='flex items-center justify-center mt-12'>
                        <button id='editarPerfilBtn' className='botaovoltar bg-[#949494] flex items-center justify-center' onClick={habilitarEdicao} type='button'>
                            <span className='mont text-black font-medium text-xl'>Editar Perfil</span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}