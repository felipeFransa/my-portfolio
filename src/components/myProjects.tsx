import React from 'react';

// Texto de introdução movido para uma constante (pode ser importado de um arquivo externo)
const INTRODUCTION_TEXT = `
  Me chamo Felipe, sou apaixonado pela área de Tecnologia, por isso decidi estudar e estou 
  buscando minha primeira oportunidade na área. Na minha jornada de aprendizagem, 
  desenvolvi sólidos conhecimentos nas linguagens: JavaScript, HTML, CSS, React, Bootstrap e 
  TypeScript. Com projetos pessoais bem-sucedidos que demonstram minha habilidade de criar 
  interfaces atraentes e responsivas, estou animado para levar minha paixão pela codificação e 
  minha criatividade para um ambiente profissional.
  Meu compromisso com a excelência reflete-se em minha busca contínua de conhecimento, e 
  atualmente estou embarcando em uma jornada de aprimoramento com o Node.js para 
  expandir ainda mais minhas habilidades e conhecimentos.
  Além das habilidades técnicas, sou adepto do trabalho em equipe, um comunicador eficiente e 
  um colaborador dedicado. Ao longo do tempo, desenvolvi uma sólida compreensão de 
  controle de versão e colaboração usando Git e GitHub.
  Estou entusiasmado com a possibilidade de contribuir para projetos desafiadores e 
  inovadores, ao mesmo tempo em que aprendo com profissionais experientes no campo da 
  tecnologia. 
  Se você busca um programador front-end apaixonado por codificação e que traz consigo um 
  olhar atento para a estética e a experiência do usuário, estou pronto para enfrentar novos 
  desafios e agregar valor à sua equipe.
`;

// Links dos projetos (pode ser importado de um arquivo externo)
const PROJECTS = [
  {
    name: "DriverForza",
    url: "https://site-versao-um.vercel.app/",
    description: "Um projeto incrível de simulação de corridas.",
  },
  {
    name: "Calculadora de IMC",
    url: "https://app-calc-imc.vercel.app/",
    description: "Uma calculadora de Índice de Massa Corporal.",
  },
];

export const MyProjects = () => {
  return (
    <section className="flex flex-col w-full h-full justify-around items-center mt-2 p-4 bg-gray-50 rounded-lg shadow-md">
      {/* Cabeçalho */}
      <header className="w-full text-center mb-8">
        <h2 className="text-5xl font-bold text-gray-800">Projetos</h2>
      </header>

      {/* Conteúdo principal */}
      <div className="flex flex-col sm:flex-row w-full h-full justify-around items-center gap-6">
        {/* Seção de introdução */}
        <article className="flex flex-col justify-center items-center w-full sm:w-1/2 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Olá, me chamo Felipe!</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{INTRODUCTION_TEXT}</p>
        </article>

        {/* Seção de projetos */}
        <div className="flex flex-col w-full sm:w-1/2 gap-4">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full h-48 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow transform hover:scale-105"
              aria-label={`Visitar projeto: ${project.name}`}
            >
              <div className="text-center p-4">
                <p className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  {project.name}
                </p>
                <p className="text-sm text-gray-500 mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};