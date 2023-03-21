
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../atoms/Buttons'
import { Forma } from '../../atoms/form'

export const AddTask = ({ onTaskCreate }) => {

    const [text, setText] = useState ('');

    return (
        <div className="row add-task">
            <Forma className='form row' onSubmit={(event) => {
                   event.preventDefault();
            }}>
                <div className='mb-3 col-md-4'>
                    <input className='form-control' 
                           placeholder='add task' 
                           value={text} 
                           onChange={(event) => setText(event.target.value)} />
                </div>

                <div className='mb-3 col-md-4'>       
                    <Button className='btn btn-outline-primary'
                            onClick={() => {
                                setText('');
                                onTaskCreate({
                                    done: false,
                                    text,
                                })
                            }}>
                        Add Task
                    </Button>
                </div>
            </Forma>

        </div>
    )
};

AddTask.propTypes = {
    onTaskCreate: PropTypes.func.isRequired,

}