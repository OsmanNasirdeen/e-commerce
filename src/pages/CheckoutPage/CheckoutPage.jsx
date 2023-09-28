// import React, { useEffect } from "react";
// import { useState } from "react";

// const CheckoutPage = () => {
//   const [user, setUser] = useState({ name: "", password: "" });
//   const [shouldSubmit, setShouldSubmit] = useState(false);
//   const [errors, setErrors] = useState({});
//   const validateForm = (form) => {
//     const formErrs = {};
//     if (!form.name) {
//       formErrs.name = "name is not prov.";
//     } else if (form.name.length < 5) {
//       formErrs.name = "name is < 5";
//     }
//     return formErrs;
//   };

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors(validateForm(user));
//     setShouldSubmit(true);
//   };
//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && shouldSubmit) {
//       console.log(`${user.name} submitted`);
//     }
//   }, [errors]);
//   return (
//     <div className="container">
//       <pre>{JSON.stringify(errors, undefined, 3)}</pre>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">username</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={user.name}
//             placeholder="name"
//             onChange={handleChange}
//           />
//         </div>
//         <pre>{errors.name}</pre>
//         <div>
//           <label htmlFor="password">password</label>
//           <input
//             type="text"
//             name="password"
//             id="password"
//             value={user.password}
//             placeholder="password"
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;
