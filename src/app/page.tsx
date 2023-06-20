import { Weekday } from '@/pages/Weekday';
import { Thumbnail } from '@/pages/Thumbnail';
import { About } from '@/pages/aboutMe';
import { MyProjects } from '@/pages/myProjects';

function Page() {
  

  return(
    <div className="w-auto bg-black flex flex-col justify-around items-center">
        <div className='w-5/6'>
          <div>
            <Weekday/>
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
        </div>
    </div>
    
  )
}

export default Page;