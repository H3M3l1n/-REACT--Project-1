import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footerinfo.sass';
import { faTelegram, faViber } from '@fortawesome/free-brands-svg-icons';

const FooterInfo = ({ data }) => {
    const address = data.find(
        (addressData) => addressData.dataType === 'address'
    );
    const phone = data.find((phoneData) => phoneData.dataType === 'phone');
    const social = data.find((socialData) => socialData.dataType === 'social');

    return (
        <div className="footer-info">
            <div className="info-contacts">
                <p className="info-contacts-text info-address">
                    {address.city}, {address.street}
                </p>
                {phone.phones.map((item, index) => (
                    <div key={index} className="info-contacts-text info-phone">
                        <span>{item.operator}:</span>
                        <ul className="footer-ul">
                            {item.phoneNumbers.map((item, index) => (
                                <li key={index} className="footer-li">
                                    <a
                                        href={`tel:${item.replace(
                                            /[()]/g,
                                            ''
                                        )}`}
                                        className="footer-phone-link"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="info-links">
                {social.socials.map((social, index) => (
                    <ul key={index} className="footer-ul">
                        {social.socialData.map((item, index) => (
                            <li key={index} className="footer-li">
                                <a href={item.link} className="info-links-item">
                                    <FontAwesomeIcon
                                        icon={
                                            social.title === 'Telegram'
                                                ? faTelegram
                                                : social.title === 'Viber'
                                                ? faViber
                                                : ''
                                        }
                                        size="1x"
                                        className="info-links-icon"
                                    />
                                    <span className="info-links-text">
                                        {item.phoneNumber}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default FooterInfo;
