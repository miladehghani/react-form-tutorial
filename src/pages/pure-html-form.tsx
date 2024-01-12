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
      className="flex flex-col gap-4 container items-center p-8"
    >
      <input type="text" name="name" placeholder="name" required min={5} />
      <input
        type="password"
        name="password"
        placeholder="password"
        required
        min={5}
      />
      <div className="space-x-4">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
