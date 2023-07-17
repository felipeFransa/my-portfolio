import Whatsapp from "../../assets/icos/whatsapp.svg";
import Linkedin from "../../assets/icos/linkedin.svg";
import Instagram from "../../assets/icos/instagram.svg";
import Facebook from "../../assets/icos/facebook.svg";
import Twitter from "../../assets/icos/twitter.svg";

export const Footer = () => {
    return (
        <div className="flex flex-col w-full h-full justify-around items-center">

            <div className="w-full h-36 flex flex-col sm:flex-row justify-between items-center">
                <div className="w-2/6 h-full flex flex-col justify-center items-center sm:items-start">
                    <h2>Contato</h2>
                </div>
                <div className="w-2/6 h-full flex flex-col justify-center items-center">
                    <h2>Redes Sociais</h2>
                </div>
                <div className="w-2/6 h-full flex flex-col justify-center items-center sm:items-end">
                    <h2>Sobre</h2>
                </div>
            </div>

            <div className="w-full h-36 flex flex-col justify-center items-center">

                <div className="w-full h-12 flex justify-center items-center pb-3 my-2">

                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2 hover:cursor-pointer">
                        <img src={Whatsapp.src} alt="" className="w-10 h-10"/>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2 hover:cursor-pointer">
                        <img src={Linkedin.src} alt="" className="w-10 h-10"/>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2 hover:cursor-pointer">
                        <img src={Instagram.src} alt="" className="w-10 h-10"/>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2 hover:cursor-pointer">
                        <img src={Facebook.src} alt="" className="w-10 h-10"/>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2 hover:cursor-pointer">
                        <img src={Twitter.src} alt="" className="w-10 h-10"/>
                    </div>
                </div>
               
                <div className="w-full flex flex-row justify-center items-center">
                    <h3>
                        @Copyright Felipe Developer
                    </h3>
                </div>
            </div>
        </div>
    )
}