import {Form} from 'antd';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import API from "../../../services/apiService/API";
import {deleteKey, paginationObjectTemplate, setPagination} from "../../../redux/reducers/paginate.reducers";


export const refreshPagination = (key, url) => async (dispatch, getState) => {
    const state = getState();
    const obj = paginationSelector(key)(state);
    const {model, ...params} = obj;
    dispatch(fetchPagination(key, url, params));
};

export const fetchPagination = (key, url, params) => async (dispatch) => {
    try {
        //dispatch(setLoadingStatus(true));
        const response = await API.post(url, params, {
            params: {
                page: params.page,
                size: params.size,
            },
        });
        dispatch(setPagination({key, data: {...params, ...response.data}}));
    } catch (e) {
        // dispatch(setPagination({ key, data: paginationObjectTemplate }));
    } finally {
        //dispatch(setLoadingStatus(false));
    }
};

const paginationSelector = (key) => (state) => {
    if (state.pagination.hasOwnProperty(key)) {
        return state.pagination[key];
    }
    return paginationObjectTemplate;
};


export function usePaginate(key, url, values = {}) {
    const dispatch = useDispatch();
    const data = useSelector(paginationSelector(key));
    const [form] = Form.useForm();

    const {
        model: collection,
        currentPage,
        totalPages,
        totalElements,
        page,
        size,
    } = data;

    const paginate = (page) => {
        const formValues = form.getFieldsValue();
        fetchData({page, ...formValues, ...values});
    };


    const fetchData = (params = {}) => {
        const data = {
            page: 1,
            size: 10,
            ...params,
        };

        dispatch(fetchPagination(key, url, data));
    };


    const refreshPagination = (params = {}) => {
        const values = form.getFieldsValue();
        fetchData({page, ...values, ...params});
    };

    const deleteReduxKey = () => {
        dispatch(deleteKey({key}))
    }

    const resetFilter = () => {
        form.resetFields();
        fetchData({
            page: 1,
        });
    };


    useEffect(() => {
        const {model, ...rest} = data;
        form.setFieldsValue({...rest});
        dispatch(fetchPagination(key, url, {...rest, ...values}));
    }, []);


    return {
        form,
        page,
        fetchData,
        collection,
        currentPage,
        totalPages,
        totalElements,
        refreshPagination,
        resetFilter,
        deleteReduxKey,
        size: Number(size),
    };
}
