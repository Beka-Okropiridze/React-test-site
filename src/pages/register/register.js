
import { RegisterForm } from '../../components/outh/RegisterForm';

export const Register = () => {
    return (
        <div className="row p-2">
            <h3>Register Page </h3>
            <h3 className='text-success'>Email: eve.holt@reqres.in <br/>  Password: pistol</h3>
            <div className="col-md-12 shadow my-2 p-3">
                <RegisterForm />
            </div>
        </div>
    )
};