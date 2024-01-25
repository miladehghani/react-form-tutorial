import { useState } from "react";
import { useForm } from "react-hook-form";

/**
 * Party registration form 
    - First Name
    - Last Name
    - Guests[]
        - First Name
        - Last Name
*/

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(console.log)}
      className="flex flex-col gap-4 container items-center p-8"
    >
      <input
        {...register("firstName")}
        placeholder="Main Guest Name"
        type="text"
      />
      <GuestInput register={register} />
      <button type="submit">Submit</button>
    </form>
  );
}

const GuestInput = ({ register }: any) => {
  const [numberOfGuests, setNumberOfGuests] = useState(0);

  const addGuest = () => {
    setNumberOfGuests((num) => num + 1);
  };

  return (
    <>
      {Array(numberOfGuests)
        .fill(null)
        .map((guest, index) => {
          return (
            <div key={index}>
              <input
                {...register(`guest[${index}].name`)}
                placeholder={`Guest(${index}) Name`}
                type="text"
              />
            </div>
          );
        })}
      <button type="button" onClick={() => addGuest()}>
        Add Guest
      </button>
    </>
  );
};
