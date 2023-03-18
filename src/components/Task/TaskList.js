import PropTypes from 'prop-types';
import { Button } from "../../atoms/Buttons";


export const TaskList = ({ tasks, onTaskRemove, onTaskUpdate }) => {
    return (
        <div className="row">
            <ul className="list-group p-2">
                
                {
                    tasks.map(() => {
                        return (
                            <li className="list-group-item d-flex align-items-center justify-content-between">
                                <div>
                                    <input type='checkbox' className="checkbox" />
                                    <span>Test Name</span>
                                </div>
                                <div>
                                    <Button className='btn btn-outline-secondary'>Edit</Button>
                                    <Button className='btn btn-outline-danger'>Remove</Button>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onTaskUpdate: PropTypes.func.isRequired,
    onTaskRemove: PropTypes.func.isRequired,
};