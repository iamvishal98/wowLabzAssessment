import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/api";

export const MoviSlice = createSlice({
    name:'movie',
    initialState :{
        data:[],
        selectedData:[],
        favouriteMovieData:[],
        isSerach:false,
    },

    reducers : {
        selectParticularMovie : (state,action) => {
            state.selectedData = action.payload
        },

        add_to_favouries : (state,action) => {
            const isMoviePresent = state.favouriteMovieData.find((item) => item.id === action.payload.id);
            if(!isMoviePresent)
                {
                    state.favouriteMovieData.push({...action.payload ,inBucket:true});
                }
        },

        removeData : (state) => {
            state.data=[];
        },

        remove_from_favourites : (state,action) => {
            let removeditem = state.favouriteMovieData.filter((item) => item.id !== action.payload);
            state.favouriteMovieData = removeditem;
        },
        
    },

    extraReducers : (builder) => {
        builder
        .addCase(fetchSearchData.fulfilled , (state,action) => {
            state.data=action.payload
            if (state.data.length ===0) {alert('no results');}

        })
        .addCase(fetchSearchData.rejected , () => {
            alert('something went wrong!')
        })
    }
})


export const fetchSearchData =createAsyncThunk('fetch/data',async(query) => {
    const {data} = await axios.get(BASE_URL+query);
    return data.results;

}) 

export default MoviSlice.reducer;

export const {selectParticularMovie,add_to_favouries,removeData,remove_from_favourites,set_isSearch} = MoviSlice.actions