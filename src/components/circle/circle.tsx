import './circle.scss';
import Image from '../image';
import cat1 from '../../images/cat-1.jpg';
import cat2 from '../../images/cat-2.jpg';
import cat3 from '../../images/cat-3.jpg';
import cat4 from '../../images/cat-4.jpg';

type CircleProps = {
    img: string,
}

const Circle = ({ img }: CircleProps) => (
  <div className="circle">
    <Image src={img} alt="Cat" className="circle__image" />
  </div>
);

export default Circle;
