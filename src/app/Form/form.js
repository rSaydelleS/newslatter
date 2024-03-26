"use client";

import { useForm } from "react-hook-form";
import "./styles.css";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Email: "",
    },
    mode: "onChange",
  });
  const [go, setGo] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      reset();
      setGo(true);
    }
  };
  if (go === true) {
    redirect("/submit");
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="formLabel">
          <label> Email address</label>
          {errors.Email && (
            <label style={{ color: "red" }}>Valid email required</label>
          )}
        </div>
        <input
          {...register("Email", { required: true })}
          placeholder="email@company.com"
        />
        <input
          className="formButton"
          type="submit"
          value="Subscribe to monthly newslatter"
        />
      </form>
    </>
  );
}
