import { Weekday } from '@/components/Weekday';
import { Main } from '@/components/main'

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
        </div>
    </div>
    
  )
}

export default Page;