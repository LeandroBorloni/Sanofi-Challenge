"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardArtigos from './Artigos';
import Artigos from '@/app/Artigos/page';

const ArticleCarouselHabitos = () => {
    const artigoHabitoSaudavel= [
        {
            link: "/AtvFisica",
            imagem: "/images/atividade_fisica.svg",
            titulo: "Atividade física",
            texto: "Um Passo Vital para uma Vida Saudável"
        },
        {
            link: "/Alimentacao",
            imagem: "/images/alimentacao.svg",
            titulo: "Alimentação",
            texto: "Nutrindo o Seu Corpo para uma Vida Melhor"
        },
        {
            link: "/Hidratacao",
            imagem: "/images/hidratacao.svg",
            titulo: "Hidratação",
            texto: "A importância de beber água para o Bem-Estar"
        },
    ]
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Mostrar um slide de cada vez
    slidesToScroll: 1, // Navegar um slide de cada vez
    swipeToSlide: true, // Permitir arrastar para navegar
    responsive: [
      {
        breakpoint: 1440, // Define um ponto de quebra para dispositivos móveis
        settings: {
          slidesToShow: 3, // Mostrar 4 slides de uma vez em dispositivos móveis
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Define um ponto de quebra para dispositivos móveis
        settings: {
          slidesToShow: 2, // Mostrar 4 slides de uma vez em dispositivos móveis
          slidesToScroll: 1,
        },
      },
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
          <CardArtigos artigos={artigoHabitoSaudavel[0]}></CardArtigos>
        </div>
      </div>
      <div className='lg:ml-24 ml-24'>
        {/* Conteúdo do segundo slide */}
        <CardArtigos artigos={artigoHabitoSaudavel[1]}></CardArtigos>
      </div>
      <div className='lg:ml-10 ml-24'>
        {/* Conteúdo do terceiro slide */}
        <CardArtigos artigos={artigoHabitoSaudavel[2]}></CardArtigos>
      </div>
      <div className='lg:ml-0 ml-24'>
        {/* Conteúdo do quarto slide */}
      </div>
    </Slider>
  );
};

export default ArticleCarouselHabitos;