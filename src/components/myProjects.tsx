
export const MyProjects = () => {
    return(
        <div className="flex flex-col w-full h-full justify-around items-center mt-2">

            <div className="w-full h-full flex flex-row justify-center items-center">
                <h2 className="text-5xl p-4">Projetos</h2>
            </div>

            <div className="flex flex-col sm:flex-row w-full h-full justify-around items-center rounded-lg">

                <div className="flex flex-col justify-center items-center w-full h-full mb-2">
                    <div className="w-full h-full sm:first:h-96 flex flex-col justify-center items-center sm:justify-start sm:items-start">
                        <h2 className="text-2xl p-3">Olá me chamo Felipe!</h2>
                        <p className="text-xs">Me chamo Felipe, sou apaixonado pela área de Tecnologia, por isso decidi estudar e estou 
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
                            Envio meu currículo anexado para sua revisão, e deixo abaixo meus contatos, agradecendo 
                            antecipadamente a oportunidade de considerarem minha candidatura.</p>
                    </div>
                </div>
                <div className="flex w-full h-full justify-center items-center mb-2">
                    <div className="flex w-48 h-48 rounded-md justify-center items-center">
                        <a href="https://site-versao-um.vercel.app/"><p className="hover:bg-blue-600 hover:p-3 rounded-sm">www.driverforza.com</p></a>
                    </div>
                </div>
                <div className="flex w-full h-full justify-center items-center mb-2">
                    <div className="flex w-48 h-48 rounded-md justify-center items-center">
                        <a href="https://app-calc-imc.vercel.app/"> <p className="hover:bg-blue-600 hover:p-3 rounded-sm">www.calculadoradeimc.com</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}