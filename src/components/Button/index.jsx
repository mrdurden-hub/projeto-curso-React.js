import './styles.css';
import P from 'prop-types';

export const Button = ({ text, loadPostsFunction, disabled = false }) => {
  return (
    <button disabled={disabled} className="button" onClick={loadPostsFunction}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  loadPostsFunction: undefined,
};

Button.propTypes = {
  text: P.string.isRequired,
  loadPostsFunction: P.func,
  disabled: P.bool,
};
