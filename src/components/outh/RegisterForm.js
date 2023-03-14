import { useForm } from "react-hook-form";
import { Forma } from "../../atoms";
import { Button } from "../../atoms";
import { useAuthProvider } from "../../providers/authProvider/authProvider";
export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { register: signUp } = useAuthProvider()

    const onSubmit = (signUpData) => {                  
        console.log('--signUpData--', signUpData);
        signUp(signUpData);
    }

    return (
        <Forma onSubmit={handleSubmit(onSubmit)}>
            <h2>Register Here</h2>
            <hr />
            <div className="col-7 m-auto">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" {...register('email', {
                        required: true
                    })} />
                    {errors.email && (                              
                        <div id="emailHelp" className="form-text text-danger">
                            Email is required.
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" {...register('password', {
                        required: true
                    })} />
                    {errors.password && (
                        <div id="passwordHelp" className="form-text text-danger">
                            Password is required.
                        </div>
                    )}
                </div>

                <Button type="submit" className="btn btn-primary">
                    Submit
                </Button>
            </div>

        </Forma>
    )
};