import { useContext } from 'react';
import { LocaleContext } from '../localeprovider/LocaleProvider';
import { ua_messagesdata } from './ua_messagesdata';
import { ru_messagesdata } from './ru_messagesdata';
import './error.sass';

const Error = ({ errorCode }) => {
    const { localeName, primaryLocale } = useContext(LocaleContext);

    const localeData =
        localeName === primaryLocale ? ua_messagesdata : ru_messagesdata;

    return (
        <div className="error-page">
            <div className="error-page-wrapper">
                <img
                    src={`${process.env.PUBLIC_URL}/img/error.png`}
                    alt="Sad face"
                    className="error-page-image"
                />
                <div className="error-page-text">
                    <h1 className="error-page-title">{localeData.error}</h1>
                    {errorCode ? (
                        <p className="error-page-code">
                            `Код: ( ${errorCode} )`
                        </p>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Error;
