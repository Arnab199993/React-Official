import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Validation1 = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    const schema = yup.object({
        firstName: yup.string().required().min(5).max(10),
        address: yup.string().required(),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
      }).required();

      const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

      const onSubmit = data => {
        console.log(data);
      }



  return (
    <div>
        <h3>Entry Form</h3>


<form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <input type="text"  {...register("firstName")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <p style={{color:"red"}}>{errors.firstName?.message}</p>

  </div>
  <div className="mb-3">
    <input type="address" {...register("address")} className="form-control" id="exampleInputPassword1"/>
    <p>{errors.address?.message}</p>

  </div>

  <div className="mb-3">
    <input type="text" {...register("phone")} className="form-control" id="exampleInputPassword1"/>
    <p>{errors.phone?.message}</p>

  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Validation1