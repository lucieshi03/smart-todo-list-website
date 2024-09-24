import PropTypes from 'prop-types'

const Button = ({color, text, onClick, className}) => {
    return (
    <button 
    onClick={onClick} 
    style={{ backgrounfColor: color}} 
    className={className}>
        {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button