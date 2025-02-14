/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./StudentForm.css";
import {  updateForm } from "../slices/formslice";
import { useDispatch, useSelector } from "react-redux";
import { sendFormData } from "../services";

function StudentForm({ editStudent, setEditStudent }) {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  // eslint-disable-next-line no-useless-escape
  const nameRegExp = /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/;
  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.studentForm.formData);

  return (
    <div>
      <h1 className="text-5xl p-5 font-bold text-center bg-blue-900 text-white">
        Student Form
      </h1>
      <div className="form mt-20">
        <Formik
          enableReinitialize
          initialValues={{
            firstName: editStudent?.firstName || "",
            lastName: editStudent?.lastName || "",
            email: editStudent?.email || "",
            phone: editStudent?.phone || "",
            department: editStudent?.department || "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .matches(nameRegExp, "Enter correct firstname")
              .min(4, "Must be atleast 4 characters")
              .max(12, "Must be 12 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .matches(nameRegExp, "Enter correct lastname")
              .min(4, "Must be atleast 4 characters")
              .max(10, "Must be 10 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .matches(emailRegExp, "Invalid email address")
              .required("Required"),
            phone: Yup.string()
              .required("Required")
              .matches(phoneRegExp, "Phone number is not valid")
              .min(10, "too short")
              .max(10, "too long"),
            department: Yup.string()
              .min(3, "Must be atleast 3 characters")
              .max(5, "Must be less than 6 characters")
              .required("Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            if (editStudent) {
              const updatedData = data.map((student, index) =>
                index === editStudent.index ? values : student
              );
              dispatch(updateForm({ text: updatedData }))
              setEditStudent(null);
            } else {
              // sending data to backend using axios
              sendFormData(values);
            }
            resetForm();
            navigate("/table");
          }}
        >
          {({ isValid, dirty }) => (
            <Form className="form flex gap-7">
              <div className="flex gap-1 flex-col ">
                <div className="flex gap-5 items-center">
                  <label htmlFor="firstname">FirstName</label>
                  <Field
                    className="border-2 field"
                    type="text"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="error-div">
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <div className="flex gap-5">
                  <label htmlFor="lastname">LastName</label>
                  <Field
                    className="border-2 field"
                    type="text"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="error-div">
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <div className="flex gap-5">
                  <label htmlFor="email">Email</label>
                  <Field
                    className="border-2 field"
                    type="email"
                    id="enail"
                    name="email"
                  />
                </div>
                <div className="error-div">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <div className="flex gap-5">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    className="border-2 field"
                    type="phone"
                    id="phone"
                    name="phone"
                  />
                </div>
                <div className="error-div">
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <div className="flex gap-5">
                  <label htmlFor="department">Department</label>
                  <Field
                    className="border-2 field"
                    type="text"
                    id="department"
                    name="department"
                  />
                </div>
                <div className="error-div">
                  <ErrorMessage
                    name="department"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="flex gap-10 mt-10">
                <button
                  type="submit"
                  className={`text-white bg-blue-700 rounded-md px-4 py-2 cursor-pointer ${!isValid || !dirty ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  disabled={!isValid || !dirty}
                >
                  Submit
                </button>
                <Link
                  className="text-white bg-green-700 cursor-pointer px-4 py-3 text-sm font-medium text-center rounded-md"
                  to={"/table"}
                >
                  Show table
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default StudentForm;