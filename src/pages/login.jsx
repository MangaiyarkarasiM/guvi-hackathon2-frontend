import React,{ useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//import {GlobalContext} from '../../context/globalContext';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import fetchApi from "../utils/fetchApi";


const loginFormValidation = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Enter email"),
  password: Yup.string().required("Enter password"),
});


function LoginPage(props) {
    let [message,setMessage] = useState("");
    const navigate = useNavigate();

    const onLogin = async(value) => {
    let res = await fetchApi.post('/users/login',{...value});
    if(res.data.statusCode===200)
    {
        sessionStorage.setItem('userID',res.data.userID);
        sessionStorage.setItem('token',res.data.token);
        sessionStorage.setItem('role',res.data.role)
            navigate('/dashboard');
    }
    else{
        setMessage(res.data.message);
    }
    };

  return (
    <div className="mt-5 d-flex flex-column">
      <h3 className="text-info text-center">Book Your Show</h3>
      <Formik
        initialValues={{}}
        onSubmit={onLogin}
        validationSchema={loginFormValidation}
        className="d-inline-block"
      >
        {() => {
          return (
            <Form className="d-flex flex-column align-items-center justify-conetent-center border-info rounded">
              <div className="mb-4">
                <label className="d-block font-weight-bold">Email</label>
                <Field name="email" type="email" className="d-block rounded form-control" placeholder="Enter your email" size='50'/>
                <ErrorMessage
                  name="email"
                  render={(msg) => <small className="d-block text-danger">{msg}</small>}
                />
              </div>
              <div className="mb-4">
                <label className="d-block font-weight-bold">Password</label>
                <Field name="password" type="password" className="d-block rounded form-control" placeholder="Password" size='50'/>
                <ErrorMessage
                  name="password"
                  render={(msg) => <small className="d-block text-danger">{msg}</small>}
                />
              </div>

              <button type="submit" className="btn d-block bg-info rounded mb-4">
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
      {message?<>
        <div className="d-block text-center text-danger mb-4">{message}</div>
      </>:<></>}
      <div className="text-center mb-4">
          <p>New user? <Link to='/signup'>Sign up</Link> here</p>
      </div>
    </div>
  );
}

export default LoginPage;
