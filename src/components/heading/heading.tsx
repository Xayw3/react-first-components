/* eslint-disable jsx-a11y/anchor-is-valid */
import './heading.scss';
import '../global.scss';
import Link from '../links/links';

const Heading = () => (
  <div className="header-wrapper">
    <div className="container">
      <Link text="Link 1" />
      <Link text="Link 2" />
      <Link text="Link 3" />
    </div>
  </div>
);

export default Heading;
