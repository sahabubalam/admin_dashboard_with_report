import {Form} from "antd";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {notifyResponseError} from "../common/notifications";

export default function useUsers() {
    const userName = "Admin";
    let {id} = useParams();
    const [form] = Form.useForm();
    const [showUserModal, setShowUserModal] = useState(false);
    const navigate = useNavigate();


    const handleUserModelSubmit = async (values) => {
        try {
            navigate("/user");

            setShowUserModal(false);

        } catch (er) {
            notifyResponseError(er);
        }
    };


    const getSingleData = async () => {
    };

    const onReset = () => {
        if (id) {
            getSingleData(id);
        }
        form.resetFields();
    };

    useEffect(() => {
        if (!id) return;
        getSingleData(id);
    }, [id]);

    return {
        userName,
        id,
        getSingleData,
        onReset,
        showUserModal,
        setShowUserModal,
        handleUserModelSubmit
    };
}
