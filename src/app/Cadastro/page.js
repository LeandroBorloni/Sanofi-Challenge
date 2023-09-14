import React from 'react';
import Link from 'next/link';
import './global.css';

export default function Cadastro(){
    return (
        <>
        <section className='flex flex-col'>
            <nav className='flex items-center justify-between navBackground p-4'>
                <div className='flex items-center'>
                    <Link href='./'><img className='imagemlogo' src="/images/Logo.svg"></img></Link>
                </div>
            </nav>
            <div className='flex justify-between'>
                <img src='images/poligonos_esq.svg'></img>
                <div className='flex justify-center'>
                        <div className='flex flex-col items-center mt-10'>
                            <h1 className='titulo mb-10'>Comece sua Jornada de Bem-Estar</h1>
                        </div>
                    </div>
                <img src='images/poligonos_dir.svg'></img>
            </div>
        </section>
        
        </>
    )
}
