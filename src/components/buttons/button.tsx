import './buttons.scss';

type ButtonProps = {
    text: string,
    className: string
};

const Button = ({ text, className }: ButtonProps) => (
  <button className={className}>
    {text}
  </button>
);

export default Button;
