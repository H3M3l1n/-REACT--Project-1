import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

const PhoneNumberInputMasked = ({ control, locale }) => {
  return (
    <Controller
      name="phoneNumber"
      control={control}
      defaultValue={""}
      rules={{
        required: locale.errors.required,
        pattern: {
          value:
            /^(\+?\d{1,3}\s?)?(\()?\d{3}(\))?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/,
          message: locale.errors.pattern,
        },
      }}
      render={({ field }) => (
        <InputMask
          {...field}
          mask="+38 (999) 999-99-99"
          maskplaceholder={"_"}
          placeholder={locale.placeholder}
          className="form-input form-input-phone"
          onChange={(event) => {
            event.persist();
            field.onChange(event.target.value);
          }}
        />
      )}
    />
  );
};

export default PhoneNumberInputMasked;
