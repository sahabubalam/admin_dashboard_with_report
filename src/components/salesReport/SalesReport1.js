import React from 'react';
import {Table, Button, Dropdown, Form, Row, Col, Card, Select, Empty, Pagination} from 'antd';
import {DownOutlined, FileExcelFilled, FilePdfFilled} from '@ant-design/icons';
import 'jspdf-autotable';
import ReportCard from "../lib/common/ReportCard";
import {exportToExcel, exportToPDF} from '../lib/common/Helper';
import CommonLayout from "../../layout/CommonLayout";
import DashboardLayout from "../../layout/DashboardLayout";
import {ExportButton} from '../lib/common/ExportButton';
import useReports from "../lib/hooks/useReports";
import CustomInput from "../lib/common/CustomInput";
import SubmitBtn from "../lib/common/button/SubmitBtn";
import ResetBtn from "../lib/common/button/ResetBtn";
import CRPForm from "../lib/common/CRPForm";
import {CustomTableSkeleton} from "../lib/common/CustomTableSkeleton";

const SalesReport1 = () => {

        const customFilterOptions = {
            name: '',
            age: '',
        }

        const customColumns = [
            {
                title: 'Name',
                dataIndex: 'name',
                sorter: (a, b) => a.name.localeCompare(b.name),
                sortDirections: ['ascend', 'descend'],
            },
            {
                title: 'Age',
                dataIndex: 'age',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: 'Address',
                dataIndex: 'address',
            },
            // ... Other columns
        ];

        const customSalesData = [
            {key: '1', name: 'John Doe', age: 28, address: '53 Main St'},
            {key: '2', name: 'John', age: 37, address: 'St'},
            {key: '3', name: 'h', age: 88, address: 'kkk'},
        ];


        const {
            filteredData,
            handleDropdownClick,
            handleSearchTable,
            applyFilters,
            resetFilters,
            menu,
            searchText,
            filterOptions,
            setFilterOptions,
            columns,
            visibleColumns,
            data

        } = useReports(customSalesData, customFilterOptions, customColumns)
const amount = 127000
        return (
            <CommonLayout>
                <DashboardLayout>
                    <ReportCard title="Filter" style={{marginBottom: 10}}>
                        <div style={{display: 'flex'}}>
                            <CRPForm layout="inline" style={{flex: 1}}>
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
                                            onChange={(e) => setFilterOptions((prev) => ({...prev, age: e.target.value}))}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col lg={6} md={6} sm={24} xs={24}>
                                    <Form.Item>
                                        <SubmitBtn onClick={applyFilters} style={{marginRight: 8}}>
                                            Apply
                                        </SubmitBtn>
                                        <ResetBtn onClick={resetFilters}>Reset</ResetBtn>
                                    </Form.Item>
                                </Col>

                            </CRPForm>

                        </div>
                    </ReportCard>

                    <ReportCard title="Summary" style={{marginBottom: 8}}>
                        <Row gutter={[16, 16]}>
                            {
                                [1, 2, 3, 4].map((item) => (
                                    <Col span={6}>
                                        <Card
                                            style={{
                                                boxShadow:
                                                    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                                                background: "#F8F9FA",
                                                borderRadius: "15px",
                                                height: "100px",
                                                color: "#000000",
                                                border: 'none'
                                            }}
                                        >
                                            <div style={{padding: '15px'}}>
                                                <span>Summary</span>
                                                <br/>
                                                <span style={{fontWeight: 'bold', fontSize: '20px'}}>{amount.toLocaleString()}</span>
                                            </div>
                                        </Card>
                                    </Col>
                                ))}
                        </Row>
                    </ReportCard>
                    <ReportCard>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', justifyContent: 'start', paddingTop: '10px', marginRight: '5px'}}>
                                <CRPForm layout="inline" >
                                    <div>

                                        <Form.Item
                                            name="size"
                                            initialValue="10"
                                            label={'Show'}
                                        >
                                            <Select id="antSelect" style={{width: '100%', background: '#F8F9FA'}}>
                                                <Select.Option value="10">10 Entries </Select.Option>
                                                <Select.Option value="20">20 Entries</Select.Option>
                                                <Select.Option value="30">30 Entries</Select.Option>
                                                <Select.Option value="40">40 Entries</Select.Option>
                                                <Select.Option value="50">50 Entries</Select.Option>
                                            </Select>
                                        </Form.Item>

                                    </div>
                                    <div>
                                        <Form.Item>
                                            <CustomInput
                                                placeholder="Search..."
                                                value={searchText}
                                                onChange={(e) => handleSearchTable(e.target.value)}
                                            />
                                        </Form.Item>
                                    </div>
                                </CRPForm>
                            </div>
                            <CRPForm>
                                <div style={{display: "flex", paddingTop: '10px'}}>
                                    <Col>
                                        <Form.Item>
                                            <Dropdown overlay={menu} onClick={handleDropdownClick}>
                                                <Button>
                                                    Column Options <DownOutlined/>
                                                </Button>
                                            </Dropdown>
                                        </Form.Item>
                                    </Col>
                                    <Col>

                                        <Form.Item>
                                            <ExportButton
                                                onClick={() => exportToExcel(columns, data)}>
                                                Export to Excel
                                                <FileExcelFilled style={{fontSize: '16px', color: '#107C41'}}/>
                                            </ExportButton>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <ExportButton
                                                onClick={() => exportToPDF(columns, data)}>
                                                Export to PDF
                                                <FilePdfFilled style={{fontSize: '16px', color: '#FF5733'}}/>
                                            </ExportButton>
                                        </Form.Item>
                                    </Col>

                                </div>
                            </CRPForm>
                        </div>

                        {filteredData ?  <Table dataSource={filteredData} columns={visibleColumns}/> : <CustomTableSkeleton/> }
                    </ReportCard>

                </DashboardLayout>
            </CommonLayout>
        )
            ;
    }
;

export default SalesReport1;