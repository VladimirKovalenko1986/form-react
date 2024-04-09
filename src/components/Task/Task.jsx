import css from "./Task.module.css";

export default function Task({ data: { id, text }, onDelete }) {
  return (
    <div className={css.conteiner}>
      <p>{text}</p>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
