/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'


function StudentForm({ studentData, setStudentData }) {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

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
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(12, 'Must be 12 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(10, 'Must be 10 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address')
              .required('Required'),
            phone: Yup.string()
              .required("required")
              .matches(phoneRegExp, 'Phone number is not valid')
              .min(10, "too short")
              .max(10, "too long"),
            department: Yup.string()
              .min(3, "Must be atleast 3 characters")
              .max(5, "Must be greater than 3 characters and less than 5 characters")
          })}
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
    </div>
  )
}

export default StudentForm