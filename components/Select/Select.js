import styles from './Select.module.scss';

function Select(props) {
  return (
    <select
      onChange={props.onChange}
      className={styles.select_element}
      value={props.orderBy}
    >
      <option value='newest'>Newest First</option>
      <option value='oldest'>Oldest First</option>
    </select>
  );
}

export default Select;
