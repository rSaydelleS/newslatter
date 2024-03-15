
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form>
        <label htmlFor="Email"> Email address</label>
        <input name="" {...register("Email", { required: true })} />
      </form>
    </>
  );
}
