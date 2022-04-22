import './buttons.scss';

const buttonDetails = [
  {
    id: 1,
    title: 'Button 1',
    backgroundColor: 'blue',
  },
  {
    id: 2,
    title: 'Button 2',
    backgroundColor: 'yellow',
  },
  {
    id: 3,
    title: 'Button 3',
    backgroundColor: 'orange',
  },
  {
    id: 4,
    title: 'Button 4',
    backgroundColor: 'purple',
  },
];

const btn = buttonDetails.map((props) => <button className="btn btn-color" style={{ backgroundColor: props.backgroundColor }} key={props.id}>{props.title}</button>);

const Buttons = () => (
  <div className="buttons-list">
    {btn}
  </div>
);

export default Buttons;
