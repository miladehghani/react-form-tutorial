import React, { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProps<T extends FieldValues>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">,
    PropsWithChildren {
  methods: UseFormReturn<T>;
  onSubmit: any;
}

const Form = <T extends FieldValues>({
  methods,
  onSubmit,
  children,
  ...formProps
}: FormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form {...formProps} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
