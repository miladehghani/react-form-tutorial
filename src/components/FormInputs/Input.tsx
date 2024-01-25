import { InputError } from "@/components/InputError";
import { DetailedHTMLProps, InputHTMLAttributes, useId } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

interface InputProps<T extends FieldValues>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: Path<T>;
  label: string;
}

export function Input<T extends FieldValues>({
  name,
  label,
  ...inputProps
}: InputProps<T>) {
  const id = useId();
  const { register, formState } = useFormContext<T>();
  const error = formState.errors[name];

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} {...register(name)} />
      <InputError name={name} />
    </div>
  );
}
