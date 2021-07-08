import styles from './SearchBar.module.scss';

function SearchBar() {
  const clickHandler = () => {
    console.log('Click');
  };

  const onKeyDownHandler = () => {
    console.log('KeyDown');
  };

  return (
    <form onKeyDown={onKeyDownHandler}>
      <div className={styles.search}>
        <div className={styles.searchInputs}>
          <input type='text' placeholder='Search all news' />
        </div>
        <div className={styles.searchBtn} onClick={clickHandler}>
          <div className={styles.searchIcon}></div>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
