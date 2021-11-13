import React from "react";
import './styles/register_page.css'
import {Form} from "react-bootstrap";
import {FormGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

const RegisterForm = () =>{
    return(

        <div className="">
            <h3 className="text-center display-4">Inregistrare</h3>
            <form>
                <div className="form-group row registerFormItemContainer">
                    <label htmlFor="inputEmail3" className="col-sm-1 col-form-label registerLabel">Nume:</label>
                    <div className="col-sm-11">
                        <input type="text" className="form-control inputField"  placeholder="Nume"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-1 col-form-label registerLabel">Prenume:</label>
                    <div className="col-sm-11">
                        <input type="text" className="form-control inputField" placeholder="Prenume" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-1 col-form-label registerLabel">Telefon:</label>
                    <div className="col-sm-11">
                        <input type="text" className="form-control inputField" placeholder="Nr de telefon" />
                    </div>
                </div>


                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-1 col-form-label registerLabel">Adresa:</label>
                    <div className="col-sm-11">
                        <input type="text" className="form-control inputField"  placeholder="Adresa" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-1 col-form-label registerLabel">CNP:</label>
                    <div className="col-sm-11">
                        <input type="text" className="form-control inputField" placeholder="CNP" />
                    </div>
                </div>

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

export default RegisterForm;