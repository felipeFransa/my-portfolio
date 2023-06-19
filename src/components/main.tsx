import Avatar from "../../assets/felipe.jpg"

export const Main = () => {
    return(
        <div className="flex flex-row justify-around border-2 border-rose-500 w-full h-96 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:font-bold hover:duration-150 items-center rounded-md ">
            <div className="flex flex-col justify-center text-center w-2/4">
                <h2 className="text-9xl">Developer</h2>
                <h3 className="text-8xl">JavaScript</h3>
            </div>
            <div className="flex  justify-center w-2/4">
                <img src={Avatar.src} alt="Felipe" className="w-72 h-72 border-2 border-rose-500 rounded-full" />
            </div>
        </div>
    )
}