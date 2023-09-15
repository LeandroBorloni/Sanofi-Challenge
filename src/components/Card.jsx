"use client"

export default function Card({card}) {
    return (
        // w-21%  h30,8%
    <div className='flex flex-col items-center justify-center bg-[#EAD5FB] rounded-[3rem] divcard'>
        <img className='w-20 h-20' src={card.imagem}></img>
        <p className='textoinformativo text-center mt-4 w-2/3'>{card.texto}</p>
    </div>
    )
}