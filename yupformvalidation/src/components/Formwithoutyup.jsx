import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup';

const Formwithoutyup = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: ""
  })

  const [errors,setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName:Yup.string().required("First name is required"),
    lastName:Yup.string().required("Last name is required"),
    email:Yup.string()
          .required("First name is required")
          .email("Invalid email format"),
   phoneNumber: Yup
          .string()
          .matches(/^\d{10}$/, "Phone Number must be 10 digit")
          .required("Phone number is required"),
    password:Yup
         .string()
         .required("password is required")
         .min(8,"Password must be 8 characters")
         .matches(/[!@#$%^&*(),.?":{}|<>]/,
          "password must contain at least one symbol"
         )
         .matches(/[0-9]/, "password must contain at least one number")
         .matches(/[A-Z]/,"Passwod must contain at least one uppercase")
         .matches(/[a-z]/,"Passwod must contain at least one lowercase"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")],"password must match")
                        .required("confirm password is required"),
   age: Yup.number()
           .typeError("Age must be a number")
           .min(18,"You must be at least 18 years old")
           .max(100,"You must be maximum 100 years old")
           .required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    interests:Yup.array()
            .min(1,"select at least one interest")
            .required("select at least one interest"),
    birthDate: Yup.date().required("Date of birth is required")                                                
  })

  const handleSubmit = async(e) => {
        e.preventDefault();   // so that it won't reload automatically
      //  setFormData({
        // ok :"cool",  suppose we are geting prev page data via props and want to add inside form d
      //   ...formData
      //  })
        try{
           await validationSchema.validate(formData,{abortEarly:false})
           console.log("Form submitted",formData)
        }
        catch(error){
             console.log(error.inner)

             const newErrors = {}

             error.inner.forEach(element => {
                  newErrors[element.path] = element.message;
             });
             setErrors(newErrors)
        } 
  }

  const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({
          ...formData,
          [name]:value
        })
  }

  const handleCheckboxChange = (e)=>{
       const {name,checked} = e.target;
       console.log("********************")
       console.log(name, checked)
       if(checked){
          setFormData({
            ...formData,
            interests :[...formData.interests,name]
          })
       }
       else{
        setFormData({
          ...formData,
          interests:formData.interests.filter((interest)=> interest !== name)
        })
       } 
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label>FirstName:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter the first name"
          onChange={handleChange}  
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>
      <div>
        <label>LastName:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter the last name"
          onChange={handleChange}  
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter the email"
          onChange={handleChange}  
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Enter the phone number"
          onChange={handleChange}  
        />
        {errors.phoneNumber && (
          <div className="error">{errors.phoneNumber}</div>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter the Password"
          onChange={handleChange}  
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Enter the Password"
          onChange={handleChange}  
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter the age"
          onChange={handleChange}  
        />
        {errors.age && <div className="error">{errors.age}</div>}
      </div>
      <div>
        <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
             <option disabled value="">----------</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="other">Other</option>
          </select>
          {errors.gender && <div className="error">{errors.gender}</div>}
      </div>
      <div>
        <label>Interests:</label>
        <label>
          <input 
             type="checkbox"
             name="coding"
             checked={formData.interests.includes("coding")} 
             onChange={handleCheckboxChange}
          />
          coding
        </label>
        <label>
          <input 
             type="checkbox"
             name="sports"
             checked={formData.interests.includes("sports")}
             onChange={handleCheckboxChange} 
          />
          Sports
        </label>
        <label>
          <input 
             type="checkbox"
             name="reading"
             checked={formData.interests.includes("reading")} 
             onChange={handleCheckboxChange}
          />
          Reading
        </label>
        {errors.interests && <div className="error">{errors.interests}</div>}
      </div>
      <div>
         <label >Date of Birth:</label>
         <input 
              type="date" 
              name="birthDate"
              value={formData.birthDate}
              placeholder="Enter your date of birth" 
              onChange={handleChange}
               />
          {errors.birthDate && <div className="error">{errors.birthDate}</div>}     
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Formwithoutyup