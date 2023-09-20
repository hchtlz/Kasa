import './Tag.css';

const Tag = (props) => {
  return (
    <div className="tag__item">
      <span className='tag__item-text'>{props.tag}</span>
    </div>
  );
};

export default Tag;
