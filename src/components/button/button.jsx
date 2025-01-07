import PropTypes from "prop-types";

//code fait par FOUAD LAMNAOUAR
//Un exemple de component Button que je réutilise dans tout mes projet react

const Button = ({ label, action }) => {
    return (
        <button className="btn"
            onClick={() => {
                action && action();
            }}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func,
};

export default Button;