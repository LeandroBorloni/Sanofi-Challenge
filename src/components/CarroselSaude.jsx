"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardArtigos from './Artigos';
import Artigos from '@/app/Artigos/page';

const ArticleCarouselSaude = () => {
    const artigoTopicoSaude = [
        {
            link: "/PrimeirosSocorros",
            imagem: "/images/primeirosSocorros.svg",
            titulo: "Primeiro Socorros",
            texto: "Conhecimento que Salva Vidas."
        },
        {
            link: "/Vacinacao",
            imagem: "/images/vacinacao.svg",
            titulo: "Vacinação",
            texto: "Protegendo a Saúde, Prevenindo Doenças"
        }
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Mostrar um slide de cada vez
        slidesToScroll: 1, // Navegar um slide de cada vez
        swipeToSlide: true, // Permitir arrastar para navegar
        responsive: [
            {
                breakpoint: 768, // Define um ponto de quebra para dispositivos móveis
                settings: {
                    slidesToShow: 1, // Mostrar 4 slides de uma vez em dispositivos móveis
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div>
                {/* Conteúdo do primeiro slide */}
                <div className='lg:ml-40 ml-24'>
                    {/* {artigoSaudeVital.map(artigos => <CardArtigos artigos={artigos}></CardArtigos>)} */}
                    <CardArtigos artigos={artigoTopicoSaude[0]}></CardArtigos>
                </div>
            </div>
            <div className='lg:ml-24 ml-24'>
                {/* Conteúdo do segundo slide */}
                <CardArtigos artigos={artigoTopicoSaude[1]}></CardArtigos>
            </div>
            <div className='lg:ml-10 ml-24'>
                {/* Conteúdo do terceiro slide */}
            </div>
            <div className='lg:ml-0 ml-24'>
                {/* Conteúdo do quarto slide */}
            </div>
        </Slider>
    );
};

export default ArticleCarouselSaude;