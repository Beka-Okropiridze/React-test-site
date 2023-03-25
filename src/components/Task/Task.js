import { useReducer } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

//reducer-ის რეზულტატი არის newState-ი. იწინასწარმეტყველოს ახალი სთეითი (newState) ან დაგიბრუნოს(return) State-ი
//actionType-ის დანიშნულებაა მიმართოს reducer-ს და აღასრულოს reducer-is ლოგიკა. execute reducer logic
//dispatch-ის დანიშნულებაა თქვას რომ რაღაც იცვლება ამ ქმედებით.

//dispatch--> trigger actionType--> reducer--> newState

const ACTION_TASK_CREATED = 'ACTION_TASK_CREATED';
const ACTION_TASK_UPDATED = 'ACTION_TASK_UPDATED';
const ACTION_TASK_REMOVED = 'ACTION_TASK_REMOVED';

function reducer(state, action) {     
    // console.log('s', action);                                          //reducer-i აგენერირებს ყოველთვის ახალ სთეითს(მასივს)
    switch(action.type) {
        case ACTION_TASK_REMOVED:
            return state.filter((t) => t.id !== action.payload.taskId); //dispatchidan მოვედი case-ში და filter-ით დავაგენერირე ახალი
                                             //მასივი რომელშიც t.id არ ემთხვევა payload.taskId-ის. ანუ წავშალე იმ აიდის მქონე ობიექტი
        case ACTION_TASK_CREATED:
            return [...state, action.payload.task];

        case ACTION_TASK_UPDATED:
            return state.map(t => {
                if (t.id === action.payload.task.id) {
                    return action.payload.task
                } else {
                    return t;
                }
            });

            default:
                 throw Error('Unknown Action: ', action.type)
    }
};

const initialState = [
    { id: 0, text: 'My Plan 1', done: false },
    { id: 1, text: 'My Plan 2', done: true }
];


export const Task = () => {

    const [tasks, dispatch] = useReducer(reducer, initialState);

    // ქვედა სამ ფუნქციას ეწოდება-action creator funcs, რომლებიც დისპაჩში რო ობიექტია მაგას აგენერირებს
    const onTaskRemov = (taskId) => {
        console.log('Task/Id', taskId);
        dispatch({
            type: ACTION_TASK_REMOVED,
            payload: {
                taskId,
            }
        })
    };
    const onTaskUpdat = (updatedTask) => {
        dispatch({
            type: ACTION_TASK_UPDATED,
            payload: {
                task: updatedTask
            }
        })
    };

    const onTaskCreat = (newTask) => {
        // console.log('onTaskCreate', newTask);
        console.log(tasks);
        dispatch({
            type: ACTION_TASK_CREATED,
            payload: {
                task: {
                    ...newTask,
                    id: tasks.length,
                }
            }

        })
    }

    return (
        <div className="row">
            <h2>My Plans</h2>
            <h4>Task Maneger</h4>
            <hr />
            <AddTask onTaskCreate={onTaskCreat}/>
            <TaskList tasks={tasks} onTaskRemove={onTaskRemov} onTaskUpdate={onTaskUpdat} />
        </div>
    )
};