import css from "./Form.module.css";

export default function Form({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      text: e.target.elements.text.value,
    });
    e.target.reset();
  };

  return (
    <div className={css.conteiner}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="text" name="text" className={css.input} />
        <button type="submit" className={css.button}>
          Add task
        </button>
      </form>
    </div>
  );
}
