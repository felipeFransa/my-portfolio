import { Header } from '@/components/Header';
import { Thumbnail } from '@/components/Thumbnail';
import { About } from '@/components/aboutMe';
import { MyProjects } from '@/components/myProjects';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col transition-colors">
      <Header />
      <main className="flex-grow">
        <Thumbnail />
        <About />
        <MyProjects />
      </main>
      <Footer />
    </div>
  );
}
