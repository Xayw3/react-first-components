type SectionHeadingProps = {
    text: string,
    className: string
};

const SectionHeading = ({ text, className }: SectionHeadingProps) => (
  <h2 className={className}>
    {text}
  </h2>
);

export default SectionHeading;
