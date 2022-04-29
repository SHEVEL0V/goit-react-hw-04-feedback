import s from './style.module.css';

export default function Section({ title, children }) {
  return (
    <div className={s.container}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
