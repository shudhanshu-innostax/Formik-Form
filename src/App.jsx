import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react";
import Tabel from "./components/Tabel";

function App() {
  const [studentData, setStudentData] = useState([]);


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
        >
          <Form className="flex flex-col gap-5">
            <div className="flex gap-5">
              <label htmlFor="firstname">FirstName</label>
              <Field className='border-2' type='text' id='firstName' name='firstName' />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>
            <div className="flex gap-5">
              <label htmlFor="lastname">LastName</label>
              <Field className='border-2' type='text' id='lastName' name='lastName' />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div className="flex gap-5" >
              <label htmlFor="email">Email</label>
              <Field className='border-2' type='email' id='enail' name='email' />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="flex gap-5">
              <label htmlFor="phone">Phone</label>
              <Field className='border-2' type='phone' id='phone' name='phone' />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <div className="flex gap-5">
              <label htmlFor="department">Department</label>
              <Field className='border-2' type='text' id='department' name='department' />
              <ErrorMessage name="department" component="div" className="error" />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-20">Submit</button>
          </Form>
        </Formik>
      </div>
          <Tabel data={studentData}/>
    </div>
  )
}

export default App