import '../styles/button.css';

type ButtonsProps = {
	children: React.ReactNode;
	color?: string;
	onClick?: () => void;
	type: 'submit' | 'reset' | 'button';
};

const Button = ({ onClick, children, color }: ButtonsProps) => {
	return (
		<button
			className="button"
			onClick={onClick}
			style={{ backgroundColor: color }}>
			{children}
		</button>
	);
};

export default Button;
