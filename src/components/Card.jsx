"use client"

export default function Card({card}) {
    return (
        // w-21%  h30,8%
    <div className='flex flex-col items-center w-21% h-30% justify-center bg-[#EAD5FB] rounded-[3rem] p-20'>
        <img className='w-20' src={card.imagem}></img>
        <p className='textoinformativo text-center mt-4'>{card.texto}</p>
    </div>
    )
}