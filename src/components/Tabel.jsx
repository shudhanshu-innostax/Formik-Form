/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "./Table.css";
import { removeForm } from "../slices/formslice";

function Tabel({ onEdit }) {
  const data = useSelector((state) => state.studentForm.formData);
  const dispatch = useDispatch();
  return (
    <div className="tabel">
      <div className="text-5xl font-bold text-center p-5 bg-blue-900 text-white">
        <h1>Table</h1>
      </div>
      {data.length === 0 ? (
        <h1 className="text-center mt-40 text-2xl">No data found</h1>
      ) : (
        <div className="table">
          <table className="border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-500 p-2 text-center">
                  FirstName
                </th>
                <th className="border border-gray-500 p-2">LastName</th>
                <th className="border border-gray-500 p-2">Email</th>
                <th className="border border-gray-500 p-2">Phone</th>
                <th className="border border-gray-500 p-2">Department</th>
                <th className="border border-gray-500 p-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => {
                return (
                  <tr key={index}>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.firstName}
                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.lastName}
                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.email}
                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.phone}
                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.department}
                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded mr-2 hover:bg-green-700"
                        onClick={() => onEdit(value, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() => dispatch(removeForm({ index }))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Tabel;