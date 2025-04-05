const FirstNameInput = ({ register, name, locale }) => {
  return (
    <input
      type="text"
      className="form-input form-input-name"
      placeholder={locale.placeholder}
      {...register(name, {
        required: locale.errors.required,
        maxLength: {
          value: 100,
          message: locale.errors.maxLength,
        },
        minLength: {
          value: 2,
          message: locale.errors.minLength,
        },
        pattern: {
          value: /^[a-zA-Zа-яА-ЯёЁіІїЇґҐ]+$/u,
          message: locale.errors.pattern,
        },
      })}
      onChange={(event) => {
        event.persist();
      }}
    />
  );
};

export default FirstNameInput;
