import "./formtext.sass";

const FromText = ({ locale }) => {
  return (
    <div className="form-text">
      <h3 className="form-text-name">{locale.title}</h3>
      <p className="form-text-content">{locale.text}</p>
    </div>
  );
};

export default FromText;
