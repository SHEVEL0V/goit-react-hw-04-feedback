import s from './style.module.css';
export default function FeedbackOptions({
  options,
  onLeaveFeedback,
}) {
  return (
    <div className={s.thumb}>
      {options.map(el => {
        return (
          <button
            key={el.id}
            className={s.button}
            name={el.name}
            onClick={e => onLeaveFeedback(e.currentTarget.name)}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
}
