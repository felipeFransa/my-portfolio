
export const MyProjects = () => {
    return(
        <div className="flex flex-col w-full h-full justify-around items-center mt-2">

            <div className="w-full h-full flex flex-row justify-center items-center">
                <h2 className="text-5xl p-4">Projetos</h2>
            </div>

            <div className="flex flex-col sm:flex-row w-full h-full justify-around items-center rounded-lg">

                <div className="flex flex-col justify-center items-center w-full h-full mb-2">
                    <div className="w-full h-full  sm:first:h-48 flex justify-center items-center sm:justify-start sm:items-start">
                        <h2 className="text-2xl p-3">Olá me chamo Felipe!</h2>
                    </div>
                </div>
                <div className="flex w-full h-full justify-center items-center mb-2">
                    <div className="flex w-48 h-48 rounded-md justify-center items-center">
                        <a href="https://site-versao-um.vercel.app/"><p className="hover:bg-blue-600 hover:p-3 rounded-sm">www.driverforza.com</p></a>
                    </div>
                </div>
                <div className="flex w-full h-full justify-center items-center mb-2">
                    <div className="flex w-48 h-48 rounded-md justify-center items-center">
                        <a href="https://app-calc-imc.vercel.app/"> <p className="hover:bg-blue-600 hover:p-3 rounded-sm">www.calculadoradeimc.com</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}