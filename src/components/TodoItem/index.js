// Write your code here
import './index.css'

const Todoitem = props => {
  const {listOfTodos, onDeleteTodo} = props
  const {id, title} = listOfTodos

  const deleteTodo = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list">
      <div>
        <p className="para">{title}</p>
      </div>
      <div>
        <button className="button" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default Todoitem
