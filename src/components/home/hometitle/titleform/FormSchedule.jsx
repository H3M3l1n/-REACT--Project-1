import "./formschedule.sass";

const FormSchedule = ({ locale, time }) => {
  return (
    <div className="form-schedule">
      <div className="schedule-name">
        <h2 className="schedule-name-text">{locale.title}</h2>
      </div>
      <div className="schedule-day-container">
        {locale.week.map((item) => (
          <span key={item} className="schedule-day">
            {item}
          </span>
        ))}
      </div>
      <div className="schedule-time">
        <p className="schedule-time-text">{time}</p>
      </div>
    </div>
  );
};

export default FormSchedule;
