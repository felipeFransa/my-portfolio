import { Weekday } from '@/components/Weekday';
import { Main } from '@/components/main';
import { About } from '@/components/aboutMe';

function Page() {
  

  return(
    <div className="w-auto bg-black flex flex-col justify-around items-center">
        <div className='w-5/6'>
          <div>
            <Weekday/>
          </div>
          <div>
            <Main/>
          </div>
          <div>
            <About />
          </div>
        </div>
    </div>
    
  )
}

export default Page;