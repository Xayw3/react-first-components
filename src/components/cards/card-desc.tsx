type CardDescProps = {
    text: string,
    className: string
};

const CardDesc = ({ text, className }: CardDescProps) => (
  <p className={className}>
    {text}
  </p>
);

export default CardDesc;
