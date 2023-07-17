import Avatar from "@/assets/felipe.jpg"
import iconWhatsapp from "@/assets/icos/whatsapp.svg";
import iconLinkedin from "@/assets/icos/linkedin.svg";
import iconInstagram from "@/assets/icos/instagram.svg";

export const Thumbnail = () => {
    return(
        <div className="flex flex-col sm:flex-row justify-around w-full h-full items-center rounded-md">
            <div className="flex flex-col justify-center text-center w-full h-full mb-4">
                <h2 className="text-4xl sm:text-6xl lg:text-9xl hover:cursor-pointer hover:font-bold">Developer</h2>
                <h3 className="text-3xl sm:text-5xl lg:text-8xl hover:cursor-pointer hover:font-bold">JavaScript</h3>
            </div>

            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="flex flex-row items-center justify-center w-full h-full mb-4">
                    <img src={Avatar.src} alt="Felipe" className="w-64 h-64 hover:border-2 border-rose-500 rounded-full" />
                </div>
                <div className="flex flex-row justify-center items-center w-full h-ful mb-4">
                    <img src={iconInstagram.src} alt="instagram" className="w-10 h-10 ml-4 px-2 rounded-lg bg-rose-600 hover:w-12 hover:h-12 hover:cursor-pointer" />
                    <img src={iconLinkedin.src} alt="linkedin" className="w-10 h-10 ml-4 px-2 rounded-lg bg-blue-700 hover:w-12 hover:h-12 hover:cursor-pointer"/>
                    <img src={iconWhatsapp.src} alt="whatsapp" className="w-10 h-10 ml-4 px-2 rounded-lg bg-green-600 hover:w-12 hover:h-12 hover:cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}