import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FirstNameInput from "./FirstNameInput";
import PhoneNumberInputMasked from "./PhoneNumberInputMasked";
import FormErrorContainer from "./FormErrorContainer";
import { useAddFormDataMutation } from "../../../../store/apiSlice";
import "./formmain.sass";

const FormMain = ({ locale }) => {
  const [addFormData, { isSuccess, isError }] = useAddFormDataMutation();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const errorsFirstName = errors?.firstName;
  const errorsPhoneNumber = errors?.phoneNumber;

  useEffect(() => {
    if (isSuccess) {
      reset();
      return;
    }
  }, [isSuccess, isError, reset]);

  const formDataSubmit = async (data) => {
    await addFormData({
      name: data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1),
      phoneNumber: data.phoneNumber,
    });
  };

  const submitMessage = (
    <span style={{ color: isSuccess ? "green" : "red" }}>
      {isError && !errorsFirstName && !errorsPhoneNumber
        ? `${locale.message.error}`
        : isSuccess
        ? `${locale.message.success}`
        : ""}
    </span>
  );

  return (
    <div className="form-container">
      <form className="form-main" onSubmit={handleSubmit(formDataSubmit)}>
        <FirstNameInput
          register={register}
          name={"firstName"}
          locale={locale.formFirstName}
        />
        <FormErrorContainer errorsName={errorsFirstName} />
        <PhoneNumberInputMasked
          control={control}
          locale={locale.formPhoneNumber}
        />
        <FormErrorContainer errorsName={errorsPhoneNumber} />
        <FormErrorContainer errorsMessage={submitMessage} />
        <input
          type="submit"
          className="form-button"
          value={locale.submitButton}
        />
      </form>
    </div>
  );
};

export default FormMain;
