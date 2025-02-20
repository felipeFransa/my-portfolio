import Whatsapp from "@/assets/icos/whatsapp.svg";
import Linkedin from "@/assets/icos/linkedin.svg";
import Instagram from "@/assets/icos/instagram.svg";
import Facebook from "@/assets/icos/facebook.svg";
import Twitter from "@/assets/icos/twitter.svg";

export const Footer = () => {
  // Dados das redes sociais
  const SOCIAL_LINKS = [
    {
      icon: Whatsapp.src,
      alt: "WhatsApp",
      url: "https://wa.me/seunumero", // Adicione o link do WhatsApp
      className: "hover:bg-green-500",
    },
    {
      icon: Linkedin.src,
      alt: "LinkedIn",
      url: "https://linkedin.com", // Adicione o link do LinkedIn
      className: "hover:bg-blue-700",
    },
    {
      icon: Instagram.src,
      alt: "Instagram",
      url: "https://instagram.com", // Adicione o link do Instagram
      className: "hover:bg-pink-600",
    },
    {
      icon: Facebook.src,
      alt: "Facebook",
      url: "https://facebook.com", // Adicione o link do Facebook
      className: "hover:bg-blue-600",
    },
    {
      icon: Twitter.src,
      alt: "Twitter",
      url: "https://twitter.com", // Adicione o link do Twitter
      className: "hover:bg-blue-400",
    },
  ];

  return (
    <footer className="w-full bg-gray-800 text-white p-6">
      {/* Seção superior */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
        {/* Contato */}
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-2">Contato</h2>
          <p className="text-sm">Email: exemplo@email.com</p>
          <p className="text-sm">Telefone: (11) 99999-9999</p>
        </div>

        {/* Redes Sociais */}
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-2">Redes Sociais</h2>
          <div className="flex justify-center items-center gap-4">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.alt}
                className={`w-10 h-10 flex justify-center items-center bg-white rounded-lg transition-all transform hover:scale-110 ${link.className}`}
              >
                <img src={link.icon} alt={link.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Sobre */}
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center sm:items-end text-center sm:text-right">
          <h2 className="text-xl font-semibold mb-2">Sobre</h2>
          <p className="text-sm">Desenvolvido com ❤️ por 333 Developer.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full flex justify-center items-center border-t border-gray-700 pt-6">
        <h3 className="text-xs text-center">
          Copyright © 2023 por 333 Developer. Todos os direitos reservados. Nenhuma
          parte deste conteúdo pode ser reproduzida, distribuída ou transmitida de
          qualquer forma ou por qualquer meio, eletrônico ou mecânico, incluindo
          fotocópia, gravação ou qualquer outro sistema de armazenamento e
          recuperação de informações, sem permissão por escrito do detentor dos
          direitos autorais. Violações serão processadas de acordo com as leis de
          direitos autorais aplicáveis.
        </h3>
      </div>
    </footer>
  );
};