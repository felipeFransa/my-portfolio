import { Header } from '@/components/Header';
import { Thumbnail } from '@/components/Thumbnail';
import { About } from '@/components/aboutMe';
import { MyProjects } from '@/components/myProjects';
import { Footer } from "@/components/Footer";

function Page() {
  

  return(
    <div className="w-auto bg-black flex flex-col justify-around items-center">
        <div className='w-5/6'>
          <div>
            <Header />
          </div>
          <div>
            <Thumbnail />
          </div>
          <div>
            <About />
          </div>
          <div>
            <MyProjects />
          </div>
          <div>
            <Footer />
          </div>
        </div>
    </div>
    
  )
}

export default Page;