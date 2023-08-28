import React from "react";
import {Button, Col, Form, Modal, Table} from "antd";
import CommonLayout from "../../layout/CommonLayout";
import DashboardLayout from "../../layout/DashboardLayout";
import ReportCard from "../lib/common/ReportCard";
import useReports from "../lib/hooks/useReports";
import useUsers from "../lib/hooks/useUsers";
import AddUser from "./AddUser";
import SubmitBtn from "../lib/common/button/SubmitBtn";
import ResetBtn from "../lib/common/button/ResetBtn";
import CRPForm from "../lib/common/CRPForm";
import CustomInput from "../lib/common/CustomInput";
import {CustomTableSkeleton} from "../lib/common/CustomTableSkeleton";
import {CloseCircleOutlined} from "@ant-design/icons";

export const Users = () => {
    const {
        filteredData,
        applyFilters,
        resetFilters,
        filterOptions,
        setFilterOptions,
        visibleColumns,
    } = useReports()

    const {onReset, id, form, showUserModal, setShowUserModal, handleUserModelSubmit} = useUsers();


    const data = [1,2,3,4]

    return (
        <CommonLayout>
            <Modal
                title={"Add New User Info"}
                style={{
                    top: 20,
                }}
                closeIcon={<CloseCircleOutlined />}
                onOk={() => setShowUserModal(false)}
                onCancel={() => setShowUserModal(false)}
                centered
                visible={showUserModal}
                width={450}
                footer={null}
            >
                <AddUser onReset={onReset} id={id} form={form} handleUserModelSubmit={handleUserModelSubmit}></AddUser>
            </Modal>
            <DashboardLayout>
                <ReportCard title="Filter" style={{marginBottom: 10}}>
                    <div style={{display: 'flex'}}>
                        <CRPForm layout="inline" style={{flex: 1}} >
                            <Col lg={6} md={6} sm={24} xs={24}>
                                <Form.Item>
                                    <CustomInput
                                        placeholder="Enter Name"
                                        value={filterOptions.name}
                                        onChange={(e) => setFilterOptions((prev) => ({...prev, name: e.target.value}))}
                                    />
                                </Form.Item>
                            </Col>
                            <Col lg={6} md={6} sm={24} xs={24}>
                                <Form.Item>
                                    <CustomInput
                                        placeholder="Enter Age"
                                        value={filterOptions.age}
                                        style={{background: '#F8F9FA'}}
                                        onChange={(e) => setFilterOptions((prev) => ({...prev, age: e.target.value}))}
                                    />
                                </Form.Item>
                            </Col>
                            <Col lg={6} md={6} sm={24} xs={24}>
                                <Form.Item>
                                    <SubmitBtn type="primary" onClick={applyFilters} style={{marginRight: 8}}>
                                        Apply
                                    </SubmitBtn>
                                    <ResetBtn onClick={resetFilters}>Reset</ResetBtn>
                                </Form.Item>
                            </Col>

                            <Col lg={6} md={6} sm={24} xs={24}>
                                <Form.Item>
                                    <Button
                                        onClick={() => setShowUserModal(true)}
                                        style={{
                                            backgroundColor: '#72AC51',
                                            width: '132px',
                                            radius: '4px',
                                            color: 'white',
                                            float: "right"
                                        }}><i className="fa fa-plus" style={{marginRight: '4px'}}></i>Add New</Button>
                                </Form.Item>
                            </Col>
                        </CRPForm>

                    </div>
                </ReportCard>
                <ReportCard>
                    { data ? <CustomTableSkeleton active/> :   <Table dataSource={filteredData} columns={visibleColumns}/>}

                </ReportCard>

            </DashboardLayout>
        </CommonLayout>
    )
        ;
}