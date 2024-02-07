import InputError from "@/components/InputError";
import React, { useId } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

interface InputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  label: string;
}

export const Input = <T extends FieldValues>({
  label,
  name,
  ...inputProps
}: InputProps<T>) => {
  const { register } = useFormContext();
  const id = useId();

  return (
    <div>
      <label id={id}>{label}</label>
      <input {...inputProps} {...register(name)} id={id} />
      <InputError name={name} />
    </div>
  );
};
