import Dietary from "@/components/Dietary";
import { Input } from "@/components/Input";
import InputError from "@/components/InputError";
import {
  FieldValues,
  Path,
  useFieldArray,
  useFormContext,
} from "react-hook-form";

interface PlusOnesProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

const PlusOnes = <T extends FieldValues>({ name, label }: PlusOnesProps<T>) => {
  const { control } = useFormContext();
  const { append, remove, fields } = useFieldArray({ control, name });

  return (
    <>
      <div>
        <label className="mb-4">{label}</label>
        <div className="space-y-4">
          {fields.map((field, index) => (
            <fieldset
              key={field.id}
              className="gap-2 flex flex-col rounded border-gray-300 border-solid border shadow"
            >
              <Input label="Guest Name" name={`${name}.${index}.guestName`} />
              <Dietary label="Dietary" name={`${name}.${index}.dietary`} />
              <button
                type="button"
                onClick={() => remove(index)}
                className="w-fit"
              >
                Remove
              </button>
            </fieldset>
          ))}
        </div>
        <InputError name={name} />
      </div>
      <button type="button" onClick={() => append({})}>
        Add Plus One
      </button>
    </>
  );
};

export default PlusOnes;
