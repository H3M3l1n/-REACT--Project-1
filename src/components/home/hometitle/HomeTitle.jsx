import { useContext } from 'react';
import { HomeContext } from '../Home';
import TitleText from './titletext/TitleText';
import TitleForm from './titleform/TitleForm';
import './hometitle.sass';
import TitleContainer from './titlecontainer/TitleContainer';
import TitleDownloadButton from './titledownloadbutton/TitleDownloadButton';

const HomeTitle = () => {
    const { linkData } = useContext(HomeContext);

    return (
        <section className="home-section home-title">
            <div className="home-title-wrapper">
                <TitleText />
                <TitleContainer>
                    {linkData && <TitleDownloadButton />}
                    <TitleForm />
                </TitleContainer>
            </div>
        </section>
    );
};

export default HomeTitle;
