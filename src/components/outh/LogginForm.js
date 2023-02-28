import { useForm } from 'react-hook-form';
import { Forma, Button } from "../../atoms";
import { useAuthProvider } from '../../providers/authProvider/authProvider';


export const LogginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {login} = useAuthProvider()
    //formState არის დიდი ობიექტი რომლის მარტივ მამრავლებად დაშლაც შეიძლება ამ შემთხვევაში ჩვენ გვაინტერესებს errors ობიექტი
    //errors არის ობიექტი რომელშიც ჩვენს მიერ გაწერილი სახელის საფუძველზე(register('email და password სახელებია)) გაჩნდება ფროფერთი
    // ანუ key value-ს წყვილი, და როცა გაჩნდება ეს წყვილი ესეგი რაღაც დაერორდა
    const onSubmit = (loginData) => {                  // async მეწერა ლოგინდატამდე რომელიც აღარ მჭირდება
        console.log('--loginData--', loginData);
        login(loginData)
        // const user = await loginAsync(loginData);
        // console.log('user', user);
    }
    return (
 // როცა ფორმის დასაბმითება მოხდება handleSubmit ამუშავდება register-ში გაწერილ ჩვენს ინფორმაციას დაამუშავებს და ჩვენს მიერ მიწოდებულ
 // onSubmit ფუნქციას მოაწვდის, loginData onSubmit-ის პარამეტრია
        <Forma onSubmit={handleSubmit(onSubmit)}> 
            <h2>Sign in</h2>
            <hr />
            <div className="col-7 m-auto">
            <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" {...register('email', {
                        required:true
                    })} />
                        {errors.email && (                              //errors.email იგულისხმება register-ში რო email მიწერია სახელში
                            <div id="emailHelp" className="form-text text-danger">
                                Email is required.
                            </div>
                        )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" {...register('password', {
                        required:true
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