import React, { useEffect, useState } from 'react';
import styles from './Select.module.scss';

function Select() {
  const [sorting, setSorting] = useState('newest');

  const handleChange = (e) => {
    setSorting(e.target.value);
  };

  return (
    // sort dropdown
    <select onChange={handleChange} className={styles.select_element}>
      <option value='newest'>Newest First</option>
      <option value='oldest'>Oldest First</option>
    </select>
  );
}

export default Select;
