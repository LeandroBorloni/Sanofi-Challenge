"use client"
import React, { useState } from 'react';

export default function Crm() {
    const [medico, setMedico] = useState('');

    const handleChange = (event) => {
        setMedico(event.target.value);
    };

    return (
        <>
            <div className='botaoCadastro flex mb-10 items-center pl-5'>
                <label htmlFor="medico" className='labelformulario flex mr-4'>É médico ?</label>
                <select id="medico" name="medico" className='labelformulario bg-color-Cad ml-4 lg:pr-30 pt-5 pb-5' onChange={handleChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="nao">Não</option>
                    <option value="sim">Sim</option>
                </select>
            </div>
            <div className={`botaoCadastro flex mb-10 items-center ${medico === 'sim' ? '' : 'invisible'}`}>
                <label className='flex p-5 labelformulario items-center justify-center'>CRM: <input className='bg-color-Cad ml-4 mont text-black pr-36 pt-5 pb-5' type="password" id='senha' required /></label>
            </div>
        </>
    );
}
