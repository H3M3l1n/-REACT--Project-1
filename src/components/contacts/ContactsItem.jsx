import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faViber } from '@fortawesome/free-brands-svg-icons';

const ContactsItem = ({
    dataType,
    title,
    weekdays,
    weekdaysTime,
    weekends,
    weekendsTime,
    city,
    street,
    phones,
    emailAddress,
    socials,
}) => {
    return (
        <div className="contacts-list contacts-list-schedule">
            <h2 className="contacts-list-title">{title}:</h2>
            {dataType === 'schedule' ? (
                <>
                    <div className="contacts-list-text">
                        <p className="contacts-list-p contacts-list-week">{weekdays}</p>
                        <p className="contacts-list-p contacts-list-time">{weekdaysTime}</p>
                        <p className="contacts-list-p contacts-list-week">{weekends}</p>
                        <p className="contacts-list-p contacts-list-time">{weekendsTime}</p>
                    </div>
                </>
            ) : dataType === 'address' ? (
                <div className="contacts-list-text">
                    {city}
                    <br />
                    {street}
                </div>
            ) : dataType === 'phone' ? (
                <>
                    {phones.map((item, index) => (
                        <div
                            key={index}
                            id="contacts-list-operator"
                            className="contacts-list-text"
                        >
                            {item.operator}&nbsp;
                            <ul className="contacts-list-ul">
                                {item.phoneNumbers.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={`tel:${item.replace(
                                                /[()]/g,
                                                ''
                                            )}`}
                                            className="contacts-list-link"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            ) : dataType === 'email' ? (
                <div className="contacts-list-text">
                    <ul className="contacts-list-ul">
                        {emailAddress.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={`mailto:${item}`}
                                    className="contacts-list-link"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : dataType === 'social' ? (
                socials.map((social, index) => (
                    <div key={index} className="contacts-list-text">
                        <ul className="contacts-list-ul">
                            {social.socialData.map((item, index) => (
                                <li key={index}>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={
                                                social.title === 'Telegram'
                                                    ? faTelegram
                                                    : social.title === 'Viber'
                                                    ? faViber
                                                    : ''
                                            }
                                            size="1x"
                                            className=""
                                        />
                                        &nbsp;
                                        <a
                                            href={item.link}
                                            className="contacts-list-link"
                                        >
                                            {item.phoneNumber}
                                        </a>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                ''
            )}
        </div>
    );
};

export default ContactsItem;
