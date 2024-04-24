import '../styles/button.css';

type ButtonsProps = {
	children: React.ReactNode;
	onClick: () => void;
};

const Button = ({ onClick, children }: ButtonsProps) => {
	return (
		<button
			className="button"
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
