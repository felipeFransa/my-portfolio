"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos básicos do Swiper
import 'swiper/css/navigation'; // Estilos para botões de navegação
import 'swiper/css/pagination'; // Estilos para paginação
import { Navigation, Pagination } from 'swiper/modules'; // Módulos de navegação e paginação
import iconCss from "@/assets/css.png";
import iconHTML from "@/assets/html.png";
import iconJS from "@/assets/javascript.png";
import iconNode from "@/assets/node.png";
import iconTS from "@/assets/typescript.png";

export const About = () => {
  // Dados dos ícones
  const ICONS = [
    { src: iconHTML.src, alt: "HTML", className: "hover:bg-orange-500" },
    { src: iconCss.src, alt: "CSS", className: "hover:bg-blue-500" },
    { src: iconJS.src, alt: "JavaScript", className: "hover:bg-yellow-400" },
    { src: iconTS.src, alt: "TypeScript", className: "hover:bg-blue-600" },
    { src: iconNode.src, alt: "Node.js", className: "hover:bg-green-600" },
  ];

  return (
    <div className="w-full h-full p-4 bg-gray-50 shadow-md rounded-lg">
      {/* Carrossel para dispositivos móveis */}
      <div className="sm:hidden">
        <Swiper
          modules={[Navigation, Pagination]} // Módulos de navegação e paginação
          spaceBetween={20} // Espaço entre os slides
          slidesPerView={1} // Número de slides visíveis
          navigation // Botões de navegação (próximo/anterior)
          pagination={{ clickable: true }} // Paginação clicável
          loop // Loop infinito
        >
          {ICONS.map((icon, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-60">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-36 h-36 rounded-lg bg-white p-4 shadow-lg transition-all transform hover:scale-110 hover:cursor-pointer"
                  role="img"
                  aria-label={icon.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Layout padrão para telas maiores */}
      <div className="hidden sm:flex flex-row justify-around items-center">
        {ICONS.map((icon, index) => (
          <div key={index} className="flex justify-center items-center h-60">
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-36 h-36 rounded-lg bg-white p-4 shadow-lg transition-all transform hover:scale-110 hover:cursor-pointer"
              role="img"
              aria-label={icon.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};