import css from "./Filter.module.css";

export default function Filter({ value, onFilter }) {
  return (
    <div className={css.conteiner}>
      <label htmlFor="">
        Search by name
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => onFilter(e.target.value)}
            className={css.input}
          />
        </div>
      </label>
    </div>
  );
}
