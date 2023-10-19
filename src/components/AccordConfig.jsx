"use client"
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function AccordConfig({accordeon}) {
  const [descricaoVisivel, setDescricaoVisivel] = useState(false);

  const toggleDescricao = () => {
    setDescricaoVisivel(!descricaoVisivel);
  };

  return (
    <div className='w-3/4 h-15'>
      <div
        className={`flex bg-[#D3A7D9] rounded-[20px] justify-between p-4 ${
          descricaoVisivel ? 'descricao-visivel' : ''
        }`}
      >
        <p className='textoinformativo'> {accordeon.pergunta}</p>
        <ChevronDownIcon
          className='w-10 h-10 text-black cursor-pointer'
          onClick={toggleDescricao}
        />
      </div>
      {descricaoVisivel && (
        <div className='descricao flex rounded-[20px] mt-2 p-4'>
          <p className='textoinformativo'>{accordeon.resposta}</p>
        </div>
      )}
    </div>
  );
}

export default AccordConfig;