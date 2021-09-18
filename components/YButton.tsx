type YButtonProps = {
  title: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const YButton: React.FC<YButtonProps> = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"
    >
      {title}
    </button>
  );
};

export default YButton;
