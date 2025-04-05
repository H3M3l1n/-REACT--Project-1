import "./formerrorcontainer.sass";

const FormErrorContainer = ({ errorsName, errorsMessage }) => {
  return (
    <div className="form-error-container">
      {errorsName ? (
        <p className="form-error">
          {errorsName.message || "Непердбачувана помилка"}
        </p>
      ) : errorsMessage ? (
        <p className="form-error" style={{ textAlign: "center" }}>
          {errorsMessage}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormErrorContainer;
