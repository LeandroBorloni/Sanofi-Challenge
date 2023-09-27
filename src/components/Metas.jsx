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

    const metasString = localStorage.getItem('selectedActivities')
    const metas = JSON.parse(metasString)
    return (
        <div className='divcelmetas flex flex-col text-black gap-8 justify-center ml-6 mt-10 mr-2'>
            {metas.map((meta, index) => (<div className='flex gap-2'>
                <img
                    src={imagemAtual}
                    alt="Descrição da imagem"
                    className="cursor-pointer"
                    onClick={trocarImagem}
                />
                <p key={index} className='textocel mont text-black text-2xl text-normal leading-10'>{meta.days}/: {meta.activity}</p>
            </div>))}

            {metas.map((meta, index) => (<div className='flex gap-2'>
                <img
                    src={imagemAtual}
                    alt="Descrição da imagem"
                    className="cursor-pointer"
                    onClick={trocarImagem}
                />
                <p key={index} className='textocel mont text-black text-2xl text-normal leading-10'>{meta.days}/: {meta.activity}</p>
            </div>))}

            
            {metas.map((meta, index) => (<div className='flex gap-2'>
                <img
                    src={imagemAtual}
                    alt="Descrição da imagem"
                    className="cursor-pointer"
                    onClick={trocarImagem}
                />
                <p key={index} className='textocel mont text-black text-2xl text-normal leading-10'>{meta.days}/: {meta.activity}</p>
            </div>))}
        </div>
    );
}
