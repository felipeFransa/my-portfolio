const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pr-BR', { weekday: 'long'}).format(today)
}

export const Weekday = () => {
    
    const today: Date = new Date();

    return(
        <div className="w-full h-20 flex flex-row justify-around items-center">
            <div className='w-full h-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
                <h1 className='text-xl'>Seja Bem vindo!</h1>
            </div>
            <div className='w-full h-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
                <h1 className='text-xl'>{getWeekday(today)}</h1>
            </div>
        </div>
    )
}