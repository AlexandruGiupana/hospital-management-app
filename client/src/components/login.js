import React from "react";
import './register_page.css'


const LoginForm = () =>{
    return(


        <div className="">
            <h3 className="text-center display-4">Login</h3>
            <form>

                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-1 col-form-label registerLabel">Email:</label>
                    <div className="col-sm-11">
                        <input type="email" className="form-control inputField"  placeholder="Email" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-1 col-form-label registerLabel">Parola:</label>
                    <div className="col-sm-11">
                        <input type="password" className="form-control inputField" placeholder="Parola" />
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary registerFormSubmitBtn">Trimite</button>
                    </div>
                </div>
            </form>
        </div>







    );
};

export default LoginForm;