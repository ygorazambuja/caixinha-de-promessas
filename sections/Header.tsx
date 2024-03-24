import { useTheme } from "next-themes";
import { HiGift, HiMoon, HiSun } from "react-icons/hi";
import { useIsMounted } from "usehooks-ts";

type HeaderProps = {
  onLogoClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <HiSun
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    }
    if (currentTheme === "light") {
      return (
        <HiMoon
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
          <HiGift className="w-8 h-8 flex-shrink-0" onClick={onLogoClick} />
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
