"use client"
import Link from 'next/link';
import React from 'react';

export default function CardArtigos({artigos}) {
    return (
        <Link href={artigos.link}>
            <div className='cardartigo flex flex-col bg-[#A65C41] w-[15rem] h-[15rem]'>
                <img src={artigos.imagem}></img>
                <div className='flex bg-white items-center justify-center'>
                    <p className='mont font-normal text-black text-xl'>{artigos.titulo}</p>
                </div>
                <div className='flex justify-center'>
                    <p className='mont font-normal text-center text-sm w-2/3 pt-3'>{artigos.texto}</p>
                </div>
            </div>
        </Link>
    )
}