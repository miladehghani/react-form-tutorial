import { Input } from "@/components/Input";
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

type FormValue = yup.InferType<typeof formSchema>;

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <h1>3SC Party Registration Form</h1>

      <Input
        label="Main Guest First Name"
        type="text"
        name="firstName"
        register={register}
        formState={formState}
      />

      <Input
        label="Main Guest Last Name"
        type="text"
        name="lastName"
        register={register}
        formState={formState}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
