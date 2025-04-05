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
                    <p className="contacts-list-text">
                        {weekdays}
                        <br />{' '}
                        <span className="contacts-list-span">
                            {weekdaysTime}
                        </span>
                    </p>
                    <p className="contacts-list-text">
                        {weekends}
                        <br />
                        <span className="contacts-list-span">
                            {weekendsTime}
                        </span>
                    </p>
                </>
            ) : dataType === 'address' ? (
                <p className="contacts-list-text">
                    {city}
                    <br />
                    {street}
                </p>
            ) : dataType === 'phone' ? (
                <>
                    {phones.map((item, index) => (
                        <p
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
                        </p>
                    ))}
                </>
            ) : dataType === 'email' ? (
                <p className="contacts-list-text">
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
                </p>
            ) : dataType === 'social' ? (
                socials.map((social, index) => (
                    <p key={index} className="contacts-list-text">
                        <ul className="contacts-list-ul">
                            {social.socialData.map((item, index) => (
                                <li>
                                    <span key={index}>
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
                    </p>
                ))
            ) : (
                ''
            )}
        </div>
    );
};

export default ContactsItem;
