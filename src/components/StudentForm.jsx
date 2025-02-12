/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import './StudentForm.css'


function StudentForm({ studentData, setStudentData }) {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const nameRegExp = /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const navigate = useNavigate()

  return (
    <div>
      <h1 className="text-5xl p-5 font-bold text-center bg-blue-900 text-white">Student Form</h1>
      <div className='form'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            department: ''
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .matches(nameRegExp, "Enter correct firstname")
              .min(4, 'Must be atleast 4 characters')
              .max(12, 'Must be 12 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .matches(nameRegExp, "Enter correct lastname")
              .min(4, 'Must be atleast 4 characters')
              .max(10, 'Must be 10 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address')
              .matches(emailRegExp, "Invalid email address")
              .required('Required'),
            phone: Yup.string()
              .required("Required")
              .matches(phoneRegExp, 'Phone number is not valid')
              .min(10, "too short")
              .max(10, "too long"),
            department: Yup.string()
              .min(3, "Must be atleast 3 characters")
              .max(5, "Must be less than 6 characters")
              .required('Required')
          })}
          onSubmit={(values) => {
            setStudentData([...studentData, values]);
            navigate('/table')
          }}
        >
          <Form className="form flex gap-7">
            <div className="flex gap-1 flex-col">
              <div className="flex gap-5">
                <label htmlFor="firstname">FirstName</label>
                <Field className='border-2 field' type='text' id='firstName' name='firstName' />
              </div>
              <div className="error-div">
                <ErrorMessage name="firstName" component="div" className="error" />
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <div className="flex gap-5">
                <label htmlFor="lastname">LastName</label>
                <Field className='border-2 field' type='text' id='lastName' name='lastName' />
              </div>
              <div className="error-div">
                <ErrorMessage name="lastName" component="div" className="error" />
              </div>
            </div>
            <div className="flex gap-1 flex-col" >
              <div className="flex gap-5">
                <label htmlFor="email">Email</label>
                <Field className='border-2 field' type='email' id='enail' name='email' />
              </div>
              <div className="error-div">
                <ErrorMessage name="email" component="div" className="error" />
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <div className="flex gap-5">
                <label htmlFor="phone">Phone</label>
                <Field className='border-2 field' type='phone' id='phone' name='phone' />
              </div>
              <div className="error-div">
                <ErrorMessage name="phone" component="div" className="error" />
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <div className="flex gap-5">
                <label htmlFor="department">Department</label>
                <Field className='border-2 field' type='text' id='department' name='department' />
              </div>
              <div className="error-div">
                <ErrorMessage name="department" component="div" className="error" />
              </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-20">Submit</button>
            <Link className="table-btn" to={'/table'}>Show table</Link>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default StudentForm