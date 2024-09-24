import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
  return (
    <header>
        <h1>To-Do List</h1>
        <Button 
        color={showAdd ? 'red' : 'blue'}
        text={showAdd ? 'Close' : 'Add Task'} 
        onClick={onAdd}
        className={showAdd ? 'btn btn-red' : 'btn'}
        />
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
