import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de slides visíveis ao mesmo tempo
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2>Carrossel</h2>
      <Slider {...settings}>
        <div>
          <img src="/alimentacao.jpg" alt="Imagem 1" />
        </div>
        <div>
          <img src="/atividade_fisica.jpg" alt="Imagem 2" />
        </div>
        <div>
          <img src="/cel_artigos.jpg" alt="Imagem 3" />
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>
    </div>
  );
};

export default Carousel;
