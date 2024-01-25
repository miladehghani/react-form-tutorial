import { useId } from "react";

export const Input = ({
  name,
  register,
  formState,
  label,
  ...inputProps
}: any) => {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} {...register(name)} />
      <span className="text-red-500">{formState.errors[name]?.message}</span>
    </div>
  );
};
