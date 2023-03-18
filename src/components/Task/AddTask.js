import { Button } from '../../atoms/Buttons'
import { Forma } from '../../atoms/form'

export const AddTask = (props) => {
    return (
        <div className="row add-task">
            <Forma className='form row'>
                <div className='mb-3 col-md-4'>
                    <input className='form-control' />
                </div>

                <div className='mb-3 col-md-4'>       
                    <Button className='btn btn-outline-primary'>
                        Add Task
                    </Button>
                </div>
            </Forma>

        </div>
    )
}