'use client';

import { useForm } from "react-hook-form";
import "./styles.css"

export default function Form() {
  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    defaultValues:{
      Email:''
    },
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    
    reset();
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Email"> Email address</label>
        {errors.Email && <label>Valid email required</label>}
        <input {...register("Email", { required: true })}
        placeholder="email@company.com"
        />
      <input type="submit" value="Subscribe to monthly newslatter"/>
      </form>
    </>
  );
}
