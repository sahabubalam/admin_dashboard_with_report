import {createSlice} from "@reduxjs/toolkit";

export const paginationObjectTemplate = {
    model: [],
    currentPage: 0,
    totalPages: 0,
    totalElements: 0,
    page: 1,
    size: 10,
};

export const paginationSlice = createSlice({
    name: 'pagination',

    initialState: {
        demo: paginationObjectTemplate,
    },

    reducers: {
        setPagination: (state, action) => {
            const { key, data } = action.payload;
            state[key] = data;
        },

        resetState() {
            return {
                demo: paginationObjectTemplate,
            };
        },

        deleteKey(state, action) {
            const { key } = action.payload;
            delete state[key];
        }
    },
});

const { reducer: paginationReducer, actions } = paginationSlice;
export const {
    setPagination,
    setLoadingStatus,
    changeErrorStatus,
    resetState,
    deleteKey
} = actions;
export default paginationReducer;
