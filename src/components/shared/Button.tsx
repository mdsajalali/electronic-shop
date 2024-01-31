interface buttonTextProps {
  buttonText: string;
}

const Button = ({ buttonText }: buttonTextProps) => {
  return (
    <button className="bg-white mt-5 px-4 py-2 rounded-sm hover:bg-[#0989FF] hover:text-white transition-all font-semibold">
      {buttonText}
    </button>
  );
};

export default Button;
