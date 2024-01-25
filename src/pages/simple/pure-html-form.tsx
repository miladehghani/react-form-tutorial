import { FormEventHandler } from "react";

export default function PureHTMLForm() {
  const onSubmit: FormEventHandler<HTMLFormElement> = () => (event: any) => {
    event.preventDefault();
    let values: any = {};
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, key) => {
      values[key] = value;
    });

    console.log(values);
  };

  return (
    <form
      onSubmit={onSubmit}
      onInvalid={(e) => {
        console.log("onInvalid", e);
      }}
    >
      <h1>3SC Party Registration Form</h1>
      <input
        type="text"
        name="firstName"
        placeholder="Main Guest First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Main Guest Last Name"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
