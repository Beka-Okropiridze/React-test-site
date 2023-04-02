import {LogginForm} from '../../components/outh/LogginForm';

export const Login = (props) => {
    return (
        <div className="row p-2">
            <h1>Welcome Back...</h1>
            <h3 className='text-success'>Email: eve.holt@reqres.in <br/>
                Password: cityslicka
            </h3>
            <div className="col-md-12 shadow my-2 p-3">
                <LogginForm />
            </div>
        </div>
    )
}