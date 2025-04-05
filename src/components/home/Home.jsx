import { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../store/catalogSettingsSlice';
import {
    useGetCategoriesQuery,
    useGetLinkDataQuery,
} from '../../store/apiSlice';
import Loading from '../messages/Loading';
import HomeTitle from './hometitle/HomeTitle';
import HomeInfo from './homeinfo/HomeInfo';
import HomeAdditional from './homeadditional/HomeAdditional';
import HomeCatalog from './homecatalog/HomeCatalog';
import ScrollToTopButton from '../scrolltotopbutton/ScrollToTopButton';
import './home.sass';

export const HomeContext = createContext();

const Home = () => {
    const { data: categories, isLoading: loadingCategories } =
        useGetCategoriesQuery();

    const { data: linkData, isFetching: linkDataFetching } =
        useGetLinkDataQuery();

    const dispatch = useDispatch();

    const handleSetCategory = (id) => {
        dispatch(setCategory({ id: id }));
    };

    if (loadingCategories || linkDataFetching) return <Loading />;

    return (
        <HomeContext.Provider
            value={{ categories, linkData, handleSetCategory }}
        >
            <div className="home">
                <HomeTitle />
                <HomeInfo />
                <HomeAdditional />
                {categories && linkData && <HomeCatalog />}
                <ScrollToTopButton />
            </div>
        </HomeContext.Provider>
    );
};

export default Home;
