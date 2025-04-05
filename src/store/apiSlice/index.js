import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "categories",
    "subCategories",
    "items",
    "formData",
    "jobData",
    "userData",
    "userGroupData",
    "linkData",
  ],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/category",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "categories", id: id })),
              { type: "categories", id: "LIST" },
            ]
          : [{ type: "categories", id: "LIST" }],
    }),
    addCategory: builder.mutation({
      query: (category) => ({
        url: "/category",
        method: "POST",
        body: category,
      }),
      invalidatesTags: [{ type: "categories", id: "LIST" }],
    }),
    updateCategory: builder.mutation({
      query: (category) => ({
        url: `/category/${category._id}`,
        method: "PATCH",
        body: category,
      }),
      invalidatesTags: [{ type: "categories", id: "LIST" }],
    }),
    deleteCategory: builder.mutation({
      query: (category) => ({
        url: `/category/${category._id}`,
        method: "DELETE",
        body: category,
      }),
      invalidatesTags: [{ type: "categories", id: "LIST" }],
    }),
    getSubCategories: builder.query({
      query: () => "/subCategory",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "subCategories", id: id })),
              { type: "subCategories", id: "LIST" },
            ]
          : [{ type: "subCategories", id: "LIST" }],
    }),
    addSubCategory: builder.mutation({
      query: (subCategory) => ({
        url: "/subCategory",
        method: "POST",
        body: subCategory,
      }),
      invalidatesTags: [{ type: "subCategories", id: "LIST" }],
    }),
    updateSubCategory: builder.mutation({
      query: (subCategory) => ({
        url: `/subCategory/${subCategory._id}`,
        method: "PATCH",
        body: subCategory,
      }),
      invalidatesTags: [{ type: "subCategories", id: "LIST" }],
    }),
    deleteSubCategory: builder.mutation({
      query: (subCategory) => ({
        url: `/subCategory/${subCategory._id}`,
        method: "DELETE",
        body: subCategory,
      }),
      invalidatesTags: [{ type: "subCategories", id: "LIST" }],
    }),
    getItems: builder.query({
      query: () => "/item",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "items", id: id })),
              { type: "items", id: "LIST" },
            ]
          : [{ type: "items", id: "LIST" }],
    }),
    addItems: builder.mutation({
      query: (items) => ({
        url: "/item",
        method: "POST",
        body: items,
      }),
      invalidatesTags: [{ type: "items", id: "LIST" }],
    }),
    updateItem: builder.mutation({
      query: (item) => ({
        url: `/item/${item._id}`,
        method: "PATCH",
        body: item,
      }),
      invalidatesTags: [{ type: "items", id: "LIST" }],
    }),
    deleteItem: builder.mutation({
      query: (item) => ({
        url: `/item/${item._id}`,
        method: "DELETE",
        body: item,
      }),
      invalidatesTags: [{ type: "items", id: "LIST" }],
    }),
    deleteItemsBySubCategory: builder.mutation({
      query: (subCategory) => ({
        url: `/item/subCategory/${subCategory._id}`,
        method: "DELETE",
        body: subCategory,
      }),
      invalidatesTags: [{ type: "items", id: "LIST" }],
    }),
    getFormData: builder.query({
      query: () => "/applicationFormData",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "formData", id: id })),
              { type: "formData", id: "LIST" },
            ]
          : [{ type: "formData", id: "LIST" }],
    }),
    addFormData: builder.mutation({
      query: (formData) => ({
        url: "/applicationFormData",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "formData", id: "LIST" }],
    }),
    updateFormData: builder.mutation({
      query: (formData) => ({
        url: `/applicationFormData/${formData._id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: [
        { type: "formData", id: "LIST" },
        { type: "userData", id: "LIST" },
      ],
    }),
    deleteFormData: builder.mutation({
      query: (formData) => ({
        url: `/applicationFormData/${formData._id}`,
        method: "DELETE",
        body: formData,
      }),
      invalidatesTags: [{ type: "formData", id: "LIST" }],
    }),
    getJobData: builder.query({
      query: () => "/job",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "jobData", id: id })),
              { type: "jobData", id: "LIST" },
            ]
          : [{ type: "jobData", id: "LIST" }],
    }),
    addJobData: builder.mutation({
      query: (jobData) => ({
        url: "/job",
        method: "POST",
        body: jobData,
      }),
      invalidatesTags: [{ type: "jobData", id: "LIST" }],
    }),
    updateJobData: builder.mutation({
      query: (jobData) => ({
        url: `/job/${jobData._id}`,
        method: "PATCH",
        body: jobData,
      }),
      invalidatesTags: [{ type: "jobData", id: "LIST" }],
    }),
    deleteJobData: builder.mutation({
      query: (jobData) => ({
        url: `/job/${jobData._id}`,
        method: "DELETE",
        body: jobData,
      }),
      invalidatesTags: [{ type: "jobData", id: "LIST" }],
    }),
    getUserData: builder.query({
      query: () => "/user",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "userData", id: id })),
              { type: "userData", id: "LIST" },
            ]
          : [{ type: "userData", id: "LIST" }],
    }),
    updateUserData: builder.mutation({
      query: (userData) => ({
        url: `/user/${userData._id}`,
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: [{ type: "userData", id: "LIST" }],
    }),
    deleteUserData: builder.mutation({
      query: (userData) => ({
        url: `/user/${userData._id}`,
        method: "DELETE",
        body: userData,
      }),
      invalidatesTags: [{ type: "userData", id: "LIST" }],
    }),
    getUserGroupData: builder.query({
      query: () => "/userGroup",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "userGroupData", id: id })),
              { type: "userGroupData", id: "LIST" },
            ]
          : [{ type: "userGroupData", id: "LIST" }],
    }),
    getLinkData: builder.query({
      query: () => "/link",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "linkData", id: id })),
              { type: "linkData", id: "LIST" },
            ]
          : [{ type: "linkData", id: "LIST" }],
    }),
    addLinkData: builder.mutation({
      query: (linkData) => ({
        url: "/link",
        method: "POST",
        body: linkData,
      }),
      invalidatesTags: [{ type: "linkData", id: "LIST" }],
    }),
    updateLinkData: builder.mutation({
      query: (linkData) => ({
        url: `/link/${linkData.name}`,
        method: "PATCH",
        body: linkData,
      }),
      invalidatesTags: [{ type: "linkData", id: "LIST" }],
    }),
    postSignupData: builder.mutation({
      query: (signupData) => ({
        url: "/user/signup",
        method: "POST",
        body: signupData,
      }),
    }),
    postLoginData: builder.mutation({
      query: (loginData) => ({
        url: "/user/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetSubCategoriesQuery,
  useAddSubCategoryMutation,
  useUpdateSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useGetItemsQuery,
  useAddItemsMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
  useDeleteItemsBySubCategoryMutation,
  useGetFormDataQuery,
  useAddFormDataMutation,
  useUpdateFormDataMutation,
  useDeleteFormDataMutation,
  useGetJobDataQuery,
  useAddJobDataMutation,
  useUpdateJobDataMutation,
  useDeleteJobDataMutation,
  useGetUserDataQuery,
  useUpdateUserDataMutation,
  useDeleteUserDataMutation,
  useGetUserGroupDataQuery,
  useGetLinkDataQuery,
  useAddLinkDataMutation,
  useUpdateLinkDataMutation,
  usePostSignupDataMutation,
  usePostLoginDataMutation,
} = apiSlice;
