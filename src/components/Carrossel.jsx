"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArticleCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar um slide de cada vez
    slidesToScroll: 1, // Navegar um slide de cada vez
    swipeToSlide: true, // Permitir arrastar para navegar
    responsive: [
      {
        breakpoint: 768, // Define um ponto de quebra para dispositivos móveis
        settings: {
          slidesToShow: 4, // Mostrar 4 slides de uma vez em dispositivos móveis
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        {/* Conteúdo do primeiro slide */}
        <img src="icone1.png" alt="Ícone 1" />
        <h1>ALO</h1>
      </div>
      <div>
        {/* Conteúdo do segundo slide */}
        <img src="icone2.png" alt="Ícone 2" />
        <h1>ALO</h1>
      </div>
      <div>
        {/* Conteúdo do terceiro slide */}
        <img src="icone3.png" alt="Ícone 3" />
        <h1>ALO</h1>
      </div>
      <div>
        {/* Conteúdo do quarto slide */}
        <img src="icone4.png" alt="Ícone 4" />
        <h1>ALO</h1>
      </div>
    </Slider>
  );
};

export default ArticleCarousel;
