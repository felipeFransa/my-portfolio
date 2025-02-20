// import { Header } from '@/components/Header';
// import { Thumbnail } from '@/components/Thumbnail';
// import { About } from '@/components/aboutMe';
// import { MyProjects } from '@/components/myProjects';
// import { Footer } from "@/components/Footer";

// function Page() {

//   return(
//     <div className="container mx-auto">
//             <Header />
//             <Thumbnail />
//             <About />
//             <MyProjects />
//             <Footer />
//     </div>
    
//   )
// }
// export default Page;

import { Header } from '@/components/Header';
import { Thumbnail } from '@/components/Thumbnail';
import { About } from '@/components/aboutMe';
import { MyProjects } from '@/components/myProjects';
import { Footer } from "@/components/Footer";

function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Thumbnail (Apresentação inicial) */}
        <section className="mb-12">
          <Thumbnail />
        </section>

        {/* Sobre (Habilidades e ícones) */}
        <section className="mb-12">
          <About />
        </section>

        {/* Projetos */}
        <section className="mb-12">
          <MyProjects />
        </section>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default Page;