import './card.scss';
import SectionHeading from '../headings/section-heading';
import CardDesc from './card-desc';
import Button from '../buttons/button';

type CardItemProps = {
    titleName: string,
    descText: string,
    buttonText: string
}

const CardItem = ({ titleName, descText, buttonText }: CardItemProps) => (
  <div className="card">
    <SectionHeading className="card__title" text={titleName} />
    <CardDesc className="card__text" text={descText} />
    <button type="button" className="card__btn">
      {buttonText}
    </button>
  </div>
);

export default CardItem;
