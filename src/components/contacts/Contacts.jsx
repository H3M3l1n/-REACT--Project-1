import { useContext } from 'react';

import { LocaleContext } from '../localeprovider/LocaleProvider';
import { ua_contactsdata } from './ua_contactsdata';
import { ru_contactsdata } from './ru_contactsdata';

import PageWrapper from '../pagewrapper/PageWrapper';
import PageSection from '../pagesection/PageSection';
import ContactsItem from './ContactsItem';
import ContactsMap from './ContactsMap';

import './contacts.sass';

const Contacts = () => {
    const { localeName, primaryLocale } = useContext(LocaleContext);

    const localeData =
        localeName === primaryLocale ? ua_contactsdata : ru_contactsdata;

    return (
        <PageWrapper pageWrapperClassName={'contacts-wrapper'}>
            <PageSection
                pageSectionClassName={'contacts-section'}
                pageSectionWrapperClassName={'contacts-section-wrapper'}
            >
                <div className="contacts-lists-container">
                    {localeData.map((item, index) => (
                        <ContactsItem key={index} {...item} />
                    ))}
                </div>
                <ContactsMap />
            </PageSection>
        </PageWrapper>
    );
};

export default Contacts;
