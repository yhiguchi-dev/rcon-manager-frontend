import {
  type FormEvent,
  type FormEventHandler,
  type PropsWithChildren,
  type ReactElement,
  useCallback,
} from "react";

interface Props {
  action: (data: FormData) => void;
  onFormInvalid?: FormEventHandler<HTMLFormElement>;
}

const Form = ({
  action,
  onFormInvalid,
  children,
}: PropsWithChildren<Props>): ReactElement => {
  const handleSubmit = useCallback((): void => {
    console.log("submit");
  }, []);
  const handleChange = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      if (!event.currentTarget.checkValidity()) {
        event.stopPropagation();
        if (onFormInvalid !== undefined) {
          onFormInvalid(event);
        }
      }
    },
    [onFormInvalid],
  );

  return (
    <form
      action={action}
      onSubmit={handleSubmit}
      onChange={handleChange}
      noValidate
    >
      {children}
    </form>
  );
};
export default Form;
