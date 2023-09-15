"use client"
import React, { useState } from 'react';

export default function termoUso() {
    const imagem1 = '/images/CheckBox.svg'
    const imagem2 = '/images/CheckBox_Checked.svg'
    
    const [imagemAtual, setImagemAtual] = useState(imagem1);

    const trocarImagem = () => {
        if (imagemAtual === imagem1) {
            setImagemAtual(imagem2);
        } else {
            setImagemAtual(imagem1);
        }
    };

    return (
        <div className='flex text-black gap-5 items-center justify-center'>
            <img
                src={imagemAtual}
                alt="Descrição da imagem"
                className="cursor-pointer"
                onClick={trocarImagem}
            />
            <p className='termouso'>Termos de uso e condições</p>
        </div>
    );
}
