import iconCss from "../../assets/css.png"
import iconHTML from "../../assets/html.png"
import iconJS from "../../assets/javascript.png"
import iconNode from "../../assets/node.png"
import iconTS from "../../assets/typescript.png"

export const About = () => {
    return(
        <div className="flex flex-col sm:flex-row w-full h-full justify-around items-center rounded-lg">
            
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96 bg-gradient-to-r from-white to-red-500">
                <img src={iconHTML.src} alt="htlm" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96 bg-gradient-to-r from-red-500 to-blue-500">
                <img src={iconCss.src} alt="css" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96 bg-gradient-to-r from-blue-500 to-yellow-400">
                <img src={iconJS.src} alt="JavaScript" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96 bg-gradient-to-r from-yellow-400 to-green-400">
                <img src={iconTS.src} alt="typeScript" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96 bg-gradient-to-r from-green-400 to-white">
                <img src={iconNode.src} alt="node" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
        </div>
    )
}