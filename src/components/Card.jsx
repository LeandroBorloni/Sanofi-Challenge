"use client"

export default function Card({card}) {
    return (
    <div className='flex flex-col items-center justify-center'>
        <img className='w-20' src={card.imagem}></img>
        <p className='textoinformativo text-center mt-4'>{card.texto}</p>
    </div>
    )
}