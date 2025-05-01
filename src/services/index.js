import axios from "axios";

export const sendFormData = async (formData) => {
  try {
    const response = await axios.post("http://localhost:3000/api/form/add", formData);
    if (response) {
      console.log("Form data submitted successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

// export const getFormData = async () => {
//     try {
//         const response = await axios.get("http://localhost:3000/api/form");
//         if(response){
//             console.log(response);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const formData = async (updatedData,id) => {
//     try {
//         const response = await axios.put(`http://localhost:3000/api/form/update/:${id}`, updatedData);
//         if (response) {
//           console.log("Form updated successfully");
//         }
//       } catch (error) {
//         console.log(error);
//       }
// }