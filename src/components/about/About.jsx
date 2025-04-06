import { useContext } from 'react';
import { LocaleContext } from '../localeprovider/LocaleProvider';
import { ua_aboutdata } from './ua_aboutdata';
import { ru_aboutdata } from './ru_aboutdata';
import PageWrapper from '../pagewrapper/PageWrapper';
import PageSection from '../pagesection/PageSection';
import './about.sass';

const specialWord = 'Lorem';

const About = () => {
    const { localeName, primaryLocale } = useContext(LocaleContext);

    const localeData =
        localeName === primaryLocale ? ua_aboutdata : ru_aboutdata;

    return (
        <PageWrapper pageWrapperClassName={'about-wrapper'}>
            <PageSection
                pageSectionClassName={'about-section'}
                pageSectionWrapperClassName={'about-section-wrapper'}
            >
                <div className="about-content-container container_a">
                    <div className="about-text-wrapper">
                        <p className="about-text">
                            {localeData.section_a
                                .split(' ')
                                .map((word, index) => (
                                    <span
                                        key={index}
                                        className={
                                            word === specialWord
                                                ? 'about-company-name'
                                                : ''
                                        }
                                    >
                                        {word}{' '}
                                    </span>
                                ))}
                        </p>
                    </div>
                    <div className="about-image-wrapper">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/about_a.jpg`}
                            alt="metal warehouse"
                            className="about-image"
                        />
                    </div>
                </div>
                <div className="about-content-container container_b">
                    <div className="about-text-wrapper">
                        <p className="about-text ">{localeData.title}</p>
                    </div>
                    <div className="about-text-wrapper">
                        <p className="about-text">{localeData.section_b}</p>
                    </div>
                    <div className="about-text-wrapper"></div>
                </div>
                <div className="about-content-container container_c">
                    <div className="about-image-wrapper">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/about_c.jpg`}
                            alt="metal warehouse"
                            className="about-image"
                        />
                    </div>
                    <div className="about-text-wrapper">
                        <p className="about-text">{localeData.section_c}</p>
                    </div>
                </div>
                <div className="about-content-container container_d">
                    <div className="about-text-wrapper">
                        <p className="about-text">
                            {localeData.motto.split(' ').map((word, index) => (
                                <span
                                    key={index}
                                    className={
                                        word === specialWord
                                            ? 'about-company-name'
                                            : ''
                                    }
                                >
                                    {word}{' '}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </PageSection>
        </PageWrapper>
    );
};

export default About;
