import { GiftIcon } from "@heroicons/react/outline";

import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";

type HeaderProps = {
  onLogoClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    }
    if (currentTheme === "light") {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="border-b border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-4 ">
        <p className="flex items-center space-x-1 text-blue-500 justify-between">
          <GiftIcon className="w-8 h-8 flex-shrink-0" onClick={onLogoClick} />
          <span className="font-bold text-2xl tracking-tight whitespace-nowrap ">
            Caixinha de Promessas
          </span>
          {renderThemeChanger()}
        </p>
      </div>
    </header>
  );
};

export default Header;
