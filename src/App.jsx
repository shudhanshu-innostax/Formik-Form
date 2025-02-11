import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react";

function App() {
  const [studentData, setStudentData] = useState([]);

  // const validate = values => {
  //   const errors = {};

  //   if (!values.firstName) {
  //     errors.firstName = 'Required';
  //   }



  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = 'Invalid email address';
  //   }

  //   return errors;
  // };

  return (
    <div>
      <h1>Student Form</h1>
      <div className='form'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            department: ''
          }}
          onSubmit={(values) => {
            console.log('Form data', values);
            setStudentData([...studentData, values]);
            console.log(studentData);
          }}
          // validate={validate}
        >
          <Form>
            <div>
              <label htmlFor="firstname">FirstName</label>
              <Field type='text' id='firstName' name='firstName' />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="lastname">LastName</label>
              <Field type='text' id='lastName' name='lastName' />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type='email' id='enail' name='email' />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <Field type='phone' id='phone' name='phone' />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="department">Department</label>
              <Field type='text' id='department' name='department' />
              <ErrorMessage name="department" component="div" className="error" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>

      </div>
    </div>
  )
}

export default App