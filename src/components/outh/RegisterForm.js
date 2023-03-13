// import { useForm } from "react-hook-form";
// import { Forma } from "../../atoms";
// import { Button } from "../../atoms";
// import { registerAsync } from "../../api/register.service";

export const RegisterForm = () => {

    // const { register, handleSubmit, formState: {errors}} = useForm();

    // const onSubmit = async (RegisterData) => {
    //     const userReg = await registerAsync(RegisterData)
    //     console.log('RegData', userReg);
    // }

    return (
        <h2>Register page</h2>
    //     <Forma onSubmit={handleSubmit(onSubmit)}>
    //         <h2>Register Form</h2>
    //         <hr />

    //         <div className="col-md-4">
    //             <label htmlFor="validationEmail" className="form-label">Email</label>
    //             <div className="input-group has-validation">
    //                 <span className="input-group-text" id="inputGroupPrepend3">@</span>
    //                 <input type="text" className="form-control is-valid"  id="validationEmail"  
    //                  {...register('email', {
    //                     required:true
    //                  })} required/>
    //                 {errors.validationEmail && <div id="validationServerUsernameFeedback" className="invalid-feedback">
    //                     Please Enter Email.
    //                 </div>}
    //             </div>
    //         </div>

    //         <div className="col-md-4">
    //             <label htmlFor="regpassword" className="form-label">Password</label>
    //             <input type="password" className="form-control is-valid" id="regpassword" {...register('password', {
    //                 required: true
    //             })} required />
    //            {errors.regpassword &&<div id="validationServer03Feedback" className="invalid-feedback">
    //                 Please Enter Valid Password.
    //             </div>}
    //         </div>

    //         <div className="col-12">
    //             <div className="form-check">
    //                 <input className="form-check-input is-valid" type="checkbox" id="invalidCheck3"   />
    //                 <label className="form-check-label" htmlFor="invalidCheck3">
    //                     Agree to terms and conditions
    //                 </label>
    //                 <div id="invalidCheck3Feedback" className="valid-feedback">
    //                     You must agree before submitting.
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-12">
    //             <Button className="btn btn-primary" type="submit">Submit form</Button>
    //         </div>
    //     </Forma>
    // )
    )
};