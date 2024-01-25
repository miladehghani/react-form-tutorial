import DietarySelector from "@/components/FormInputs/DietarySelector";
import { GuestsInput } from "@/components/FormInputs/GuestsInput";
import { Input } from "@/components/FormInputs/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
/**
 * Party registration form 
    - First Name
    - Last Name
    - Dietary

    - Plus Ones []
      - First Name
      - Last Name
      - Dietary
*/

const formSchema = yup.object({
  firstName: yup.string().label("First Name").required(),
  lastName: yup.string().label("Last Name").required(),
  dietary: yup.string().label("Dietary").required(),
  guests: yup
    .array(
      yup.object({
        firstName: yup.string().label("First Name").required(),
        lastName: yup.string().label("Last Name").required(),
        dietary: yup.string().label("Dietary").required(),
      })
    )
    .min(1)
    .max(2)
    .label("Plus Ones")
    .required(),
});

export default function ReactHookForm() {
  const methods = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log("errors", methods.formState.errors);
  console.log("values", methods.watch());

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(console.log)}>
        <h1>3SC Party Registration Form</h1>

        <Input label="Main Guest First Name" type="text" name="firstName" />

        <Input label="Main Guest Last Name" type="text" name="lastName" />

        <DietarySelector name="dietary" label="Main Guest Dietary" />

        <GuestsInput name="guests" label="Plus Ones" />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
