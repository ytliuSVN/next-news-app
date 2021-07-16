import styles from './Button.module.scss';
import PropTypes from 'prop-types';

function Button({ children, onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}></div>
      <button onClick={onClick} className={styles.btn}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
