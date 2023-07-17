import iconCss from "@/assets/css.png"
import iconHTML from "@/assets/html.png"
import iconJS from "@/assets/javascript.png"
import iconNode from "@/assets/node.png"
import iconTS from "@/assets/typescript.png"

export const About = () => {
    return(
        <div className="flex flex-col sm:flex-row w-full h-full justify-around items-center rounded-lg">
            
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96">
                <img src={iconHTML.src} alt="htlm" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96">
                <img src={iconCss.src} alt="css" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96">
                <img src={iconJS.src} alt="JavaScript" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96">
                <img src={iconTS.src} alt="typeScript" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-60 lg:h-96">
                <img src={iconNode.src} alt="node" className="w-36 h-36 lg:w-40 lg:h-40 hover:w-44 hover:h-44 hover:cursor-pointer" />
            </div>
        </div>
    )
}