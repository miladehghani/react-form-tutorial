import get from "lodash.get";
import { useFormContext } from "react-hook-form";

export const InputError = ({ name }: { name: string }) => {
  const { formState } = useFormContext();
  const error = get(formState.errors, name);
  console.log("formState", name, error);
  return <span className="text-red-500">{error?.message?.toString()}</span>;
};
