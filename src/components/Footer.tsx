import Whatsapp from "../../assets/icos/whatsapp.svg";
import Linkedin from "../../assets/icos/linkedin.svg";
import Instagram from "../../assets/icos/instagram.svg";
import Facebook from "../../assets/icos/facebook.svg";
import Twitter from "../../assets/icos/twitter.svg";

export const Footer = () => {
    return (
        <div className="flex flex-col w-full h-full justify-around items-center">

            <div className="w-full h-36 flex flex-row justify-between items-center">
                <div>
                    <h2>Links</h2>
                </div>
                <div>
                    <h2>Sociais</h2>
                </div>
                <div>
                    <h2>About</h2>
                </div>
            </div>

            <div className="w-full h-36 flex flex-col justify-center items-center">

                <div className="w-full h-12 flex justify-center items-center pb-3 my-2">

                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2">
                        <img src={Whatsapp.src} alt="" className="w-10 h-10"/>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2">
                        <img src={Linkedin.src} alt="" className="w-10 h-10"/>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2">
                        <img src={Instagram.src} alt="" className="w-10 h-10"/>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2">
                        <img src={Facebook.src} alt="" className="w-10 h-10"/>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-xl mx-2">
                        <img src={Twitter.src} alt="" className="w-10 h-10"/>
                    </div>
                </div>
               
                <div>
                    <h3>
                        @Copyright Felipe Developer
                    </h3>
                </div>
            </div>
        </div>
    )
}