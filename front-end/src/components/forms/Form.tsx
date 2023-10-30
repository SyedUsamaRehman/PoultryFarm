// import React from "react";
// import { useFormik } from "formik";
// import { Input, Select } from ".";
// import { FormModelProps } from "../../types/types";

// const options = [
//   { value: "option1", label: "Option 1" },
//   { value: "option2", label: "Option 2" },
//   { value: "option3", label: "Option 3" },
// ];

// const Form = ({ inputFields, onSubmit }: any) => {
//   const initialValues = inputFields.reduce(
//     (values, field) => ({ ...values, [field.name]: field.value }),
//     {}
//   );

//   const formik = useFormik({
//     initialValues,
//     onSubmit: (values) => {
//       console.log("Form values:", values);
//       onSubmit(values);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className="mt-2 grid grid-cols-1 gap-4 lg:mx-20">
//         {inputFields.map((field:any) => (
//           <div key={field.name}>
//             <Input
//               type={field.type}
//               name={field.name}
//               id={field.name}
//               value={formik.values[field.name]}
//               onChange={formik.handleChange}
//               placeholder={field.placeholder}
//               required
//               label
//               labelText={field.label}
//             />
//           </div>
//         ))}
//         <Select
//           name="mySelect"
//           options={options}
//           value={formik.values.mySelect}
//           onChange={formik.handleChange}
//         />
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default Form;
