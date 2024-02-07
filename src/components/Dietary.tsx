import React from "react";
import InputError from "@/components/InputError";
import { RadioGroup } from "@headlessui/react";
import {
  FieldValues,
  Path,
  useController,
  useFormContext,
} from "react-hook-form";
import Chips from "@/components/Chips";

const Options = ["Vegetarian", "Vegan", "Gluten Free", "Lactose Free"];

interface DietaryProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

const Dietary = <T extends FieldValues>({ name, label }: DietaryProps<T>) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <div>
      <RadioGroup value={value} onChange={onChange}>
        <RadioGroup.Label>{label}</RadioGroup.Label>
        <div className="flex flex-wrap w-full gap-8 my-4">
          {Options.map((option) => (
            <RadioGroup.Option key={option} value={option}>
              {({ checked }) => <Chips checked={checked}>{option}</Chips>}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <InputError name={name} />
    </div>
  );
};

export default Dietary;
