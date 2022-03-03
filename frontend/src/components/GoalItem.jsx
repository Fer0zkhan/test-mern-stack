import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';
import { FaTrash } from 'react-icons/fa'

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteGoal(goal._id))
  }

  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleString()}
      </div>
      <h2>{goal.text}</h2>
      <button onClick={onClick} className="close">
        <FaTrash />
      </button>
    </div>
  )
}

export default GoalItem