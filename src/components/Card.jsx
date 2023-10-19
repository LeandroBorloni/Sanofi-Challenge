"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function CardPage({card}) {
    return (
        // w-21%  h30,8%
        <Card className='flex flex-col items-center justify-center mt-8' id='CardInicial'>
            <CardMedia><img className='w-20 h-20 mt-10' src={card.imagem}></img></CardMedia>
            <CardContent className='textoinformativo text-center mt-4 w-2/3'>{card.texto}</CardContent>
        </Card>
    )
}

