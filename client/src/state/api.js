import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export  const api =createApi ({
    baseQuery: fetchBaseQuery({ baseUrl:process.env.REACT_APP_BASE_URL}),   //the port will be 5001
     reducerPath:"adminApi",
     tagTypes:["User","Products"],
     endpoints:(build)=>({
        getUser:build.query({
            query:(id)=>`general/user/${id}`,
            providesTags:["User"]
        }),
        getProducts:build.query({
            query:() => "client/products",
            providesTags:["Products"],
        }),
     }),
});



export const { useGetUserQuery, useGetProductsQuery }=api;  //it comes from getUser with a prefix of use and a suffix of query

