import note from "../../assets/icos/nota.svg"

export const MyProjects = () => {
    return(
        <div className="flex flex-col w-full h-full justify-around items-center">

            <div className="w-full h-32 flex flex-row justify-center items-center">
                <h2 className="text-5xl">Projetos</h2>
            </div>

            <div className="flex flex-row w-full h-96 justify-around items-center rounded-lg">

                <div className="flex flex-col justify-start items-start w-2/12 h-full">
                    <div>
                    <h2 className="text-2xl">Ola me chamo Felipe!</h2>
                    </div>
                    {/* <div className="w-3/12 h-full flex flex-col justify-start items-center">
                        <div className="w-16 h-16 flex justify-center items-center rounded-xl bg-white">
                            
                            <img src={note.src} alt="projetos" className="w-14 h-14 bg-white" />
                        </div>
                    </div> */}
                </div>
                <div className="flex w-5/12 h-full justify-center items-center">
                    <div className="flex w-48 h-48 rounded-md bg-slate-600">
                    </div>
                </div>
                <div className="flex w-5/12 h-full justify-center items-center">
                    <div className="flex w-48 h-48 rounded-md bg-slate-200"></div>
                </div>
            </div>
        </div>
    )
}