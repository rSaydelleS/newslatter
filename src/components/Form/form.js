'use client';

import { useForm } from "react-hook-form";
import "./styles.css"
import { redirect } from "next/navigation";

export default function Form() {
  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    defaultValues:{
      Email:''
    },
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
    
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="formLabel">
          <label> Email address</label>
          {errors.Email && <label style={{color: 'red'}}>Valid email required</label>}
        </div>
        <input {...register("Email", { required: true })}
        placeholder="email@company.com"
        />
      <input className="formButton" type="submit" value="Subscribe to monthly newslatter"/>
      </form>
    </>
  );
}
