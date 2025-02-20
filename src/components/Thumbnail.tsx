import Avatar from "@/assets/felipe.png";
import iconWhatsapp from "@/assets/icos/whatsapp.svg";
import iconLinkedin from "@/assets/icos/linkedin.svg";
import iconInstagram from "@/assets/icos/instagram.svg";

export const Thumbnail = () => {
  // Constantes para os ícones
  const SOCIAL_ICONS = [
    {
      src: iconInstagram.src,
      alt: "Instagram",
      className: "bg-rose-600 hover:bg-rose-700",
      url: "https://instagram.com", // Adicione o link do Instagram
    },
    {
      src: iconLinkedin.src,
      alt: "LinkedIn",
      className: "bg-blue-700 hover:bg-blue-800",
      url: "https://linkedin.com", // Adicione o link do LinkedIn
    },
    {
      src: iconWhatsapp.src,
      alt: "WhatsApp",
      className: "bg-green-600 hover:bg-green-700",
      url: "https://wa.me/seunumero", // Adicione o link do WhatsApp
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-around w-full h-full items-center rounded-md p-4 bg-gray-50 shadow-md">
      {/* Texto */}
      <div className="flex flex-col justify-center text-center w-full h-full mb-4 sm:mb-0">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-800 hover:text-rose-500 transition-colors cursor-pointer">
          Developer
        </h2>
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-800 hover:text-blue-500 transition-colors cursor-pointer">
          JavaScript
        </h3>
      </div>

      {/* Avatar e ícones sociais */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Avatar */}
        <div className="flex flex-row items-center justify-center w-full h-full mb-4">
          <img
            src={Avatar.src}
            alt="Felipe"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-white hover:border-rose-500 transition-all cursor-pointer shadow-lg"
          />
        </div>

        {/* Ícones sociais */}
        <div className="flex flex-row justify-center items-center w-full h-full mb-4 gap-4">
          {SOCIAL_ICONS.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.alt}
              className={`flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 p-2 rounded-lg ${icon.className} transition-all transform hover:scale-110 cursor-pointer shadow-sm hover:shadow-md`}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-full h-full"
                role="img"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};