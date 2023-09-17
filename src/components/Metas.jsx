"use client"
import React, { useState } from 'react';

export default function Metas() {
    const imagem1 = '/images/CheckBox.svg'
    const imagem2 = '/images/CheckBox_Checked.svg'

    const [imagemAtual, setImagemAtual] = useState(imagem1);
    const [imagemAtual2, setImagemAtual2] = useState(imagem1);
    const [imagemAtual3, setImagemAtual3] = useState(imagem1);

    const trocarImagem = () => {
        if (imagemAtual === imagem1) {
            setImagemAtual(imagem2);
        } else {
            setImagemAtual(imagem1);
        }
    };

    const trocarImagem2 = () => {
        if (imagemAtual2 === imagem1) {
            setImagemAtual2(imagem2);
        } else {
            setImagemAtual2(imagem1);
        }
    };
    const trocarImagem3 = () => {
        if (imagemAtual3 === imagem1) {
            setImagemAtual3(imagem2);
        } else {
            setImagemAtual3(imagem1);
        }
    };

    return (
        <div className='divcelmetas flex flex-col text-black gap-10 justify-center ml-10 mt-16'>
            <div className='flex gap-5'>
                <img
                    src={imagemAtual}
                    alt="Descrição da imagem"
                    className="cursor-pointer"
                    onClick={trocarImagem}
                />
                <p className='textocel mont text-black text-2xl text-normal leading-10'>Hidratação: Beba 2,0 L de água</p>
            </div>

            <div className='flex gap-5'>
                <img
                    src={imagemAtual2}
                    alt="Descrição da imagem"
                    className="cursor-pointer"
                    onClick={trocarImagem2}
                />
                <p className='textocel mont text-black text-2xl text-normal leading-10' >Atividade Física: Faça 30 minutos de exercícios</p>
            </div>
            
            <div className='flex gap-5'>
                <img
                    src={imagemAtual3}
                    alt="Descrição da imagem"
                    className="cursor-pointer"
                    onClick={trocarImagem3}
                /><p className='textocel mont text-black text-2xl text-normal leading-10'>Alimentação: Consuma 5 porções de frutas e vegetais</p>
            </div>
        </div>
    );
}
