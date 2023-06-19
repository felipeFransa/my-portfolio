import iconCss from "../../assets/css.png"
import iconHTML from "../../assets/html.png"
import iconJS from "../../assets/javascript.png"
import iconNode from "../../assets/node.png"
import iconTS from "../../assets/typescript.png"

export const About = () => {
    return(
        <div className="flex flex-row w-full h-96 justify-center items-center rounded-md ">
            <div className="flex flex-col justify-center w-1/5 h-96">
                <img src={iconHTML.src} alt="htlm" className="w-40 h-40 hover:border-2 border-rose-500 rounded-md hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center w-1/5 h-96">
                <img src={iconCss.src} alt="css" className="w-40 h-40 hover:border-2 border-rose-500 rounded-md hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center w-1/5 h-96">
                <img src={iconJS.src} alt="JavaScript" className="w-40 h-40 hover:border-2 border-rose-500 rounded-md hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center w-1/5 h-96">
                <img src={iconTS.src} alt="typeScript" className="w-40 h-40 hover:border-2 border-rose-500 rounded-md hover:cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center w-1/5 h-96">
                <img src={iconNode.src} alt="node" className="w-40 h-40 hover:border-2 border-rose-500 rounded-md hover:cursor-pointer" />
            </div>
        </div>
    )
}