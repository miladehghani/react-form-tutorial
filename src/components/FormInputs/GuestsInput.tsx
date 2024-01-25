import { InputError } from "@/components/InputError";
import DietarySelector from "@/components/FormInputs/DietarySelector";
import { Input } from "@/components/FormInputs/Input";
import { useId } from "react";
import {
  ArrayPath,
  FieldValues,
  useFieldArray,
  useFormContext,
} from "react-hook-form";

interface GuestsInputProps<T extends FieldValues> {
  name: ArrayPath<T>;
  label: string;
}

export function GuestsInput<T extends FieldValues>({
  name,
  label,
}: GuestsInputProps<T>) {
  const id = useId();
  const { control } = useFormContext<T>();
  const { fields, append, remove } = useFieldArray({ name, control });

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>

      <div className="flex flex-col gap-8">
        {fields.map((item, index) => (
          <div key={item.id} className="flex flex-col gap-4">
            <Input
              name={`${name}.${index}.firstName`} //ex value: guest[0].firstName
              label="Guest First Name"
            />
            <Input name={`${name}.${index}.lastName`} label="Guest Last Name" />
            <DietarySelector
              name={`${name}.${index}.dietary`}
              label="Guest Dietary"
            />
            <button onClick={() => remove(index)}>Remove</button>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="w-fit ml-auto mt-4"
        onClick={() =>
          //@ts-ignore
          append({ firstName: "", lastName: "" })
        }
      >
        Add New Guest
      </button>

      <InputError name={name} />
    </div>
  );
}
