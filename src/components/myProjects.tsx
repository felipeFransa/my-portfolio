import note from "../../assets/icos/nota.svg"

export const MyProjects = () => {
    return(
        <div className="flex flex-row w-full h-96 justify-around items-center rounded-lg">
            <div className="flex flex-col justify-start items-start w-2/12 h-full">
                <div className="w-3/12 h-full flex flex-col justify-start items-center">
                    <div className="w-16 h-16 flex justify-center items-center rounded-xl bg-white">
                        <img src={note.src} alt="projetos" className="w-14 h-14 bg-white" />
                    </div>
                </div>
            </div>
            <div className="flex w-5/12 h-full bg-red-400"></div>
            <div className="flex w-5/12 h-full bg-green-600"></div>
        </div>
    )
}