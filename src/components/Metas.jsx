"use client"
import { parse } from 'postcss';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Metas() {
    const imagem1 = '../images/CheckBox.svg'
    const imagem2 = '../images/CheckBox_Checked.svg'

    const [selectedImages, setSelectedImages] = useState({
        1: { imagem: imagem1, atividades: [] },
        2: { imagem: imagem1, atividades: [] },
        3: { imagem: imagem1, atividades: [] },
        4: { imagem: imagem1, atividades: [] },
        5: { imagem: imagem1, atividades: [] },
        6: { imagem: imagem1, atividades: [] },
        7: { imagem: imagem1, atividades: [] },
    });

    const trocarImagem = (dia) => {
        setSelectedImages((prevSelected) => {
            const prevDia = prevSelected[dia] || { imagem: imagem1, atividades: [] };

            return {
                ...prevSelected,
                [dia]: {
                    ...prevDia,
                    imagem: prevDia.imagem === imagem1 ? imagem2 : imagem1,
                },
            };
        });
    };

    const [metas, setMetas] = useState([]);
    useEffect(() => {
        const metasString = localStorage.getItem('selectedActivities')
        if (metasString) {
            const parsedMetas = JSON.parse(metasString)
            setMetas(parsedMetas)
        }
    }, []);
    return (
        <div className='divcelmetas flex flex-col text-black gap-8 justify-center ml-6 mt-10 mr-2'>
                {metas && metas.map((meta, index) => (                    
                <div className='flex gap-2' key={index}>
                    <img
                        src={(selectedImages[meta.days] || {}).imagem}
                        alt="Descrição da imagem"
                        className="cursor-pointer"
                        onClick={() => trocarImagem(meta.days)}
                    />
                    <p className='textocel mont text-black text-2xl text-normal leading-10'>
                        {meta.days}: {meta.activity}
                    </p>
                </div>))}
        </div>
    );
}
