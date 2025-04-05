import { useContext, createContext, memo } from "react";
import { LocaleContext } from "../localeprovider/LocaleProvider";
import { ua_catalogdata } from "./ua_catalogdata";
import { ru_catalogdata } from "./ru_catalogdata";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetItemsQuery,
} from "../../store/apiSlice";
import {
  setCategory,
  setSubCategory,
  resetCatalogSettings,
} from "../../store/catalogSettingsSlice";
import Loading from "../messages/Loading";
import Error from "../messages/Error";
import PageWrapper from "../pagewrapper/PageWrapper";
import PageSection from "../pagesection/PageSection";
import CatalogFilter from "./catalogfilter/CatalogFilter";
import CatalogList from "./cataloglist/CatalogList";
import "./catalog.sass";

export const CatalogContext = createContext();

const Catalog = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);

  const localeData =
    localeName === primaryLocale ? ua_catalogdata : ru_catalogdata;

  const {
    data: categories,
    isLoading: catLoading,
    isError: catError,
    isSuccess: catSuccess,
    error: catErrorCode,
  } = useGetCategoriesQuery();

  const {
    data: subCategories,
    isLoading: subCatLoading,
    isError: subCatError,
    isSuccess: subCatSuccess,
    error: subCatErrorCode,
  } = useGetSubCategoriesQuery();

  const {
    data: items,
    isLoading: itemsLoading,
    isError: itemsError,
    isSuccess: itemsSuccess,
    error: itemsErrorCode,
  } = useGetItemsQuery();

  const dispatch = useDispatch();

  const handleSetCategory = (id) => {
    dispatch(setCategory({ id: id }));
  };
  const handleSetSubCategory = (id, categoryId) => {
    dispatch(setSubCategory({ id: id, categoryId: categoryId }));
  };
  const handleResetCatalogSettings = () => {
    dispatch(resetCatalogSettings());
  };

  const activeCategoryId = useSelector(
    (state) => state.catalogSettings.category.id
  );

  const activeSubCategoryId = useSelector(
    (state) => state.catalogSettings.subCategory.id
  );

  if (catLoading || subCatLoading || itemsLoading) return <Loading />;
  if (catError || subCatError || itemsError)
    return (
      <Error
        errorCode={
          catErrorCode
            ? catErrorCode.status
            : subCatErrorCode
            ? subCatErrorCode.status
            : itemsErrorCode
            ? itemsErrorCode.status
            : ""
        }
      />
    );
  if (catSuccess && subCatSuccess && itemsSuccess) {
    return (
      <CatalogContext.Provider
        value={{
          localeData,
          categories,
          subCategories,
          items,
          handleSetCategory,
          handleSetSubCategory,
          handleResetCatalogSettings,
          activeCategoryId,
          activeSubCategoryId,
        }}
      >
        <PageWrapper pageWrapperClassName={"catalog-wrapper"}>
          <PageSection
            pageSectionClassName={"catalog-section"}
            pageSectionWrapperClassName={"catalog-section-wrapper"}
          >
            <CatalogFilter />
            <CatalogList />
          </PageSection>
        </PageWrapper>
      </CatalogContext.Provider>
    );
  }
};

export default memo(Catalog);
