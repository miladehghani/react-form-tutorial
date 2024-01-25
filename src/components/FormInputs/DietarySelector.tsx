import Chips from "@/components/@ui/Chips";
import { InputError } from "@/components/InputError";
import { RadioGroup } from "@headlessui/react";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

interface DietarySelectorProps {
  name: string;
  label: string;
}

const Options = [
  "Gluten free and coeliac.",
  "Dairy free and lactose free.",
  "Vegetarian.",
  "Vegan.",
  "Paleo.",
  "FODMAP.",
  "Tree nut and peanut allergies.",
  "Fish and shellfish allergies.",
];

function DietarySelector({ name, label }: DietarySelectorProps) {
  const { control } = useFormContext();
  const { field } = useController({ control, name });

  return (
    <div>
      <RadioGroup
        onChange={(value) => field.onChange(value)}
        value={field.value}
      >
        <RadioGroup.Label className="w-full">{label}</RadioGroup.Label>
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
}

export default DietarySelector;
