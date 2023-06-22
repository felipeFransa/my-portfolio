const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pr-BR', { weekday: 'long'}).format(today)
}

export const Header = () => {
    
    const today: Date = new Date();

    return(
        <div className="w-full h-20 flex flex-row justify-around items-center">
            <div className='w-full h-full flex justify-center items-center cursor-pointer box-decoration-clone hover:bg-gradient-to-r from-indigo-600 to-pink-500 text-white'>
                <h1 className='text-xl hover:text-2xl'>Seja Bem vindo!</h1>
            </div>
            <div className='w-full h-full flex justify-center items-center '>
                <ul className="flex w-full h-full justify-between items-center ">
                    <li className='flex w-full h-full justify-center items-center text-xl hover:text-2xl cursor-pointer box-decoration-clone hover:bg-gradient-to-r from-indigo-600 to-pink-500 text-white'>Home</li>
                    <li className='flex w-full h-full justify-center items-center text-xl hover:text-2xl cursor-pointer box-decoration-clone hover:bg-gradient-to-r from-indigo-600 to-pink-500 text-white'>Sobre</li>
                    <li className='flex w-full h-full justify-center items-center text-xl hover:text-2xl cursor-pointer box-decoration-clone hover:bg-gradient-to-r from-indigo-600 to-pink-500 text-white'>Contato</li>
                    <li className='flex w-full h-full justify-center items-center text-xl hover:text-2xl cursor-pointer box-decoration-clone hover:bg-gradient-to-r from-indigo-600 to-pink-500 text-white'>{getWeekday(today)}</li>
                </ul>
            </div>
        </div>
    )
}