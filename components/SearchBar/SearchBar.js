import styles from './SearchBar.module.scss';

function SearchBar() {
  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input type='text' placeholder='Search all news' />
        <div className={styles.searchBtn}>
          <div className={styles.searchIcon}></div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
