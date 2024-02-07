import Dietary from "@/components/Dietary";
import Form from "@/components/Form";
import { Input } from "@/components/Input";
import PlusOnes from "@/components/PlusOnes";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

const formSchema = yup.object({
  mainGuestName: yup.string().required(),
  dietary: yup.string().required(),

  plusOnes: yup
    .array(
      yup.object({
        guestName: yup.string().required(),
        dietary: yup.string().required(),
      })
    )
    .min(1),
});

type FormValues = yup.InferType<typeof formSchema>;

export default function Home() {
  const methods = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <Form<FormValues> onSubmit={handleSubmit(onSubmit)} methods={methods}>
      <title>3SC Beach party registration form</title>

      <Input<FormValues> name="mainGuestName" label="Main Guest Name" />
      <Dietary<FormValues> name="dietary" label="Main Guest Dietary" />
      <PlusOnes<FormValues> name="plusOnes" label="Plus Ones" />

      <button type="submit">Submit</button>
    </Form>
  );
}
