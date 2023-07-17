import { Header } from '@/components/Header';
import { Thumbnail } from '@/components/Thumbnail';
import { About } from '@/components/aboutMe';
import { MyProjects } from '@/components/myProjects';
import { Footer } from "@/components/Footer";

function Page() {

  return(
    <div className="container mx-auto">
            <Header />
            <Thumbnail />
            <About />
            <MyProjects />
            <Footer />
    </div>
    
  )
}

export default Page;