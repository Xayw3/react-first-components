/* eslint-disable jsx-a11y/anchor-is-valid */
import './links.scss';

type LinksProps = {
    text: string
}

const Link = ({ text }: LinksProps) => (
  <a className="link" href="#">
    {text}
  </a>
);

export default Link;
