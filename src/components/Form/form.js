"use client";

import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Email"> Email address</label>
        <input name="" {...register("Email", { required: true })} />

      <input type="submit" value="Subscribe to monthly newslatter"/>
      </form>
    </>
  );
}
