"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardArtigos from './Artigos';
import Artigos from '@/app/Artigos/page';

const ArticleCarousel = () => {
  const artigoSaudeVital = [
    {
      link: "/Diabetes",
      imagem: "/images/diabetes.svg",
      titulo: "Diabetes",
      texto: "Entendendo, Gerenciando e Vivendo Bem."
    },
    {
      link: "/Hipertensao",
      imagem: "/images/hipertensao.svg",
      titulo: "Hipertensão",
      texto: "Compreendendo, Controlando e Promovendo a Saúde Cardiovascular."
    },
    {
      link: "/Colesterol",
      imagem: "/images/colesterol.svg",
      titulo: "Colesterol",
      texto: "Compreendendo, Gerenciando e Mantendo a Saúde Cardiovascular."
    },
    {
      link: "/Obesidade",
      imagem: "/images/obesidade.svg",
      titulo: "Obesidade",
      texto: "Entendendo, Enfrentando e Cultivando um Estilo de Vida Saudável."
    }

  ]
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Mostrar um slide de cada vez
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
          <CardArtigos artigos={artigoSaudeVital[0]}></CardArtigos>
        </div>
      </div>
      <div className='lg:ml-24 ml-24'>
        {/* Conteúdo do segundo slide */}
        <CardArtigos artigos={artigoSaudeVital[1]}></CardArtigos>
      </div>
      <div className='lg:ml-10 ml-24'>
        {/* Conteúdo do terceiro slide */}
        <CardArtigos artigos={artigoSaudeVital[2]}></CardArtigos>
      </div>
      <div className='lg:ml-0 ml-24'>
        {/* Conteúdo do quarto slide */}
        <CardArtigos artigos={artigoSaudeVital[3]}></CardArtigos>
      </div>
    </Slider>
  );
};

export default ArticleCarousel;
