import { Input } from "@/components/FormInputs/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
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
  const methods = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(console.log)}>
        <h1>3SC Party Registration Form</h1>

        <Input label="Main Guest First Name" type="text" name="firstName" />
        <Input label="Main Guest Last Name" type="text" name="lastName" />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
