import get from "lodash.get";
import React from "react";
import { useFormContext } from "react-hook-form";

const InputError = ({ name }: { name: string }) => {
  const { formState } = useFormContext();
  // plusOnes.0.guestName
  const errorMessage = get(formState.errors, name)?.message?.toString();
  if (!errorMessage) return null;

  return <span className="text-red-500">{errorMessage}</span>;
};

export default InputError;
