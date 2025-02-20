const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
  };
  
  export const Header = () => {
    const today: Date = new Date();
  
    // Itens do menu
    const MENU_ITEMS = [
      { label: "Home", href: "#home" },
      { label: "Sobre", href: "#about" },
      { label: "Contato", href: "#contact" },
      { label: getWeekday(today), href: "#weekday" },
    ];
  
    return (
      <header className="w-full h-20 flex flex-row justify-around items-center bg-gray-800 text-white shadow-lg">
        {/* Logo ou mensagem de boas-vindas */}
        <div className="w-full h-full flex justify-center items-center cursor-pointer transition-all hover:bg-gradient-to-r from-indigo-600 to-pink-500">
          <h1 className="text-xl font-semibold hover:text-2xl transition-all">
            Seja Bem-vindo!
          </h1>
        </div>
  
        {/* Menu de navegação */}
        <nav className="hidden w-full h-full sm:flex justify-center items-center">
          <ul className="flex w-full h-full justify-between items-center">
            {MENU_ITEMS.map((item, index) => (
              <li
                key={index}
                className="flex w-full h-full justify-center items-center text-xl font-semibold cursor-pointer transition-all hover:bg-gradient-to-r from-indigo-600 to-pink-500 hover:text-2xl"
              >
                <a
                  href={item.href}
                  aria-label={item.label}
                  className="w-full h-full flex justify-center items-center p-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  };