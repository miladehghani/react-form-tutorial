import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
/**
 * Party registration form 
    - First Name
    - Last Name
*/

const formSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <h1>3SC Party Registration Form</h1>

      <div className="flex flex-col">
        <label>Main Guest First Name</label>
        <input type="text" {...register("firstName")} />
        <span className="text-red-500">
          {formState.errors.firstName?.message}
        </span>
      </div>

      <div className="flex flex-col">
        <label>Main Guest Last Name</label>
        <input type="text" {...register("lastName")} />
        <span className="text-red-500">
          {formState.errors.lastName?.message}
        </span>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
