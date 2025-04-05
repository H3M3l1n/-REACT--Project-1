import { useContext } from 'react';
import { LocaleContext } from '../localeprovider/LocaleProvider';
import { ua_data } from '../../data/ua_data';
import { ru_data } from '../../data/ru_data';
import FooterInfo from './FooterInfo';
import FooterAuthor from './FooterAuthor';
import './footer.sass';

const Footer = () => {
    const { localeName, primaryLocale } = useContext(LocaleContext);

    const data = localeName === primaryLocale ? ua_data : ru_data;

    return (
        <footer id="footer" className="footer">
            <div className="footer-wrapper">
                <FooterInfo data={data.contactsData} />
                <FooterAuthor data={data.footerData} />
            </div>
        </footer>
    );
};

export default Footer;
