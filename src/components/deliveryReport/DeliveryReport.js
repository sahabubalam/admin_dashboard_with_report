import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  Button,
  Dropdown,
  Form,
  Row,
  Col,
  Card,
  Select,
  Pagination,
} from "antd";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  DownOutlined,
  FileExcelFilled,
  FilePdfFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import "jspdf-autotable";
import ReportCard from "../lib/common/ReportCard";
import { exportToExcel, exportToPDF } from "../lib/common/Helper";
import CommonLayout from "../../layout/CommonLayout";
import DashboardLayout from "../../layout/DashboardLayout";
import { ExportButton } from "../lib/common/ExportButton";
import useReports from "../lib/hooks/useReports";
import CustomSelect from "../lib/common/CustomSelect";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "rc-field-form";

const CustomTable = styled(Table)`
  .ant-table {
    width: 100%;
    overflow-x: auto;
  }
  .ant-pagination .ant-pagination-item-active a {
    color: black !important;
  }
  .ant-pagination-item {
    background-color: #ffffff !important;
    color: black !important;
    border: 1px solid #f1f1f1 !important;
  }
  .ant-pagination-item-active {
    background-color: #ffc900 !important;
    color: black !important;
    border-color: transparent !important;
  }
`;
const CustomSpan = styled.span`
  padding: 0 8px;
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  margin-inline-end: 8px;
  vertical-align: middle;
  display: inline-block;
  border: 1px solid #f1f1f1 !important;
`;

const DeliveryReport = () => {
  const customFilterOptions = {
    name: "",
    age: "",
  };

  const customColumns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "City",
      dataIndex: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: "Line1",
      dataIndex: "line1",
      sorter: (a, b) => a.line1.localeCompare(b.line1),
    },
    {
      title: "Line2",
      dataIndex: "line2",
    },
  ];

  const customSalesData = [
    {
      key: "1",
      name: "John Doe",
      age: 28,
      city: "53 Main St",
      address: "dummy",
      line1: "dummy",
      line2: "dummy",
    },
    {
      key: "2",
      name: "test",
      age: 28,
      city: "43 Main St",
      address: "dummy",
      line1: "dummy",
      line2: "dummy",
    },
    {
      key: "3",
      name: "test",
      age: 28,
      city: "33 Main St",
      address: "dummy",
      line1: "dummy",
      line2: "dummy",
    },
    {
      key: "4",
      name: "test",
      age: 28,
      city: "32 Main St",
      address: "dummy",
      line1: "dummy",
      line2: "dummy",
    },
    {
      key: "5",
      name: "test",
      age: 28,
      city: "33 Main St",
      address: "dummy",
      line1: "dummy",
      line2: "dummy",
    },
    {
      key: "6",
      name: "test",
      age: 28,
      city: "35 Main St",
      address: "dummy",
      line1: "dummy",
      line2: "dummy",
    },
    {
      key: "7",
      name: "test",
      age: 28,
      city: "13 Main St",
      address: "dummy",
      line1: "dummy",
      line2: "dummy",
    },
  ];

  const {
    handleDropdownClick,
    applyFilters,
    resetFilters,
    menu,
    filterOptions,
    setFilterOptions,
    columns,
    visibleColumns,
    data,
  } = useReports(customSalesData, customFilterOptions, customColumns);

  const [pagination, setPagination] = useState({ current: 1, pageSize: 2 });
  const [form] = Form.useForm();

  const size = Form.useWatch("size", form);

  useEffect(() => {
    setPagination({ ...pagination, pageSize: size });
  }, [size]);

  const handleTableChange = (page) => {
    if (page === "prev_5") {
      setPagination({ ...pagination, current: pagination.current - 3 });
    } else if (page === "next_5") {
      setPagination({ ...pagination, current: pagination.current + 3 });
    } else {
      setPagination(page);
    }
  };

  const [searchText, setSearchText] = useState('');
  const handleSearchTable = (value) => {
    setSearchText(value);
  };
  const filteredData = customSalesData.filter((item) =>
  item.name.toLowerCase().includes(searchText.toLowerCase()) ||
  item.address.toLowerCase().includes(searchText.toLowerCase()) ||
  item.city.toLowerCase().includes(searchText.toLowerCase())
);
  

  return (
    <CommonLayout>
      <DashboardLayout>
        <>
          <ReportCard title="Filter" style={{ marginBottom: 10 }}>
            <Form>
              <Row gutter={[10, 10]}>
                <Col sm={20} md={5} xs={20}>
                  <Form.Item>
                    <CustomSelect style={{ width: "100%" }}>
                      <Select.Option>Dummy</Select.Option>
                    </CustomSelect>
                  </Form.Item>
                </Col>
                <Col sm={20} md={5} xs={20}>
                  <Form.Item>
                    <CustomSelect
                      style={{ width: "100%", background: "#FAFAFA" }}
                    >
                      <Select.Option>Dummy</Select.Option>
                    </CustomSelect>
                  </Form.Item>
                </Col>
                <Col sm={20} md={5} xs={20}>
                  <Form.Item>
                    <CustomSelect style={{ width: "100%" }}>
                      <Select.Option>Dummy</Select.Option>
                    </CustomSelect>
                  </Form.Item>
                </Col>
                <Col sm={20} md={5} xs={20}>
                  <Form.Item>
                    <CustomSelect style={{ width: "100%" }}>
                      <Select.Option>Dummy</Select.Option>
                    </CustomSelect>
                  </Form.Item>
                </Col>
                <Col sm={20} md={4} xs={20}>
                  <Form.Item>
                    <Button
                      type="primary"
                      onClick={applyFilters}
                      style={{ marginRight: 8 }}
                    >
                      Apply
                    </Button>
                    <Button onClick={resetFilters}>Reset</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </ReportCard>
          <ReportCard title="Summary" style={{ marginBottom: 8 }}>
            <Row gutter={[16, 16]}>
              {[1, 2, 3, 4].map((item) => (
                <Col sm={24} xs={24} md={6} lg={6} key={item}>
                  <Card
                    style={{
                      boxShadow:
                        "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                      background: "#F8F9FA",
                      borderRadius: "15px",
                      height: "100px",
                      color: "#000000",
                      border: "none",
                    }}
                  >
                    <div style={{ padding: "15px" }}>
                      <span>Dummy</span>
                      <br />
                      <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        127000
                      </span>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </ReportCard>
          <ReportCard>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  paddingTop: "10px",
                  marginRight: "5px",
                }}
              >
                <div>
                  <Form form={form} layout="inline">
                    <Form.Item name="size" initialValue="5" label={"Show"}>
                      <Select
                        id="antSelect"
                        style={{ width: "100%", background: "#F8F9FA" }}
                      >
                        <Select.Option value="5">5 Entries </Select.Option>
                        <Select.Option value="20">20 Entries</Select.Option>
                        <Select.Option value="30">30 Entries</Select.Option>
                        <Select.Option value="40">40 Entries</Select.Option>
                        <Select.Option value="50">50 Entries</Select.Option>
                      </Select>
                    </Form.Item>
                  </Form>
                </div>
                <div>
                  <Form.Item>
                    <Input
                      placeholder="Search..."
                      value={searchText}
                      onChange={(e) => handleSearchTable(e.target.value)}
                      style={{ background: "#F8F9FA" }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div>
                <Dropdown overlay={menu} onClick={handleDropdownClick}>
                  <Button>
                    Column Options <DownOutlined />
                  </Button>
                </Dropdown>
                <ExportButton onClick={() => exportToExcel(columns, data)}>
                  Export to Excel
                  <FileExcelFilled
                    style={{ fontSize: "16px", color: "#107C41" }}
                  />
                </ExportButton>
                <ExportButton onClick={() => exportToPDF(columns, data)}>
                  Export to PDF
                  <FilePdfFilled
                    style={{ fontSize: "16px", color: "#FF5733" }}
                  />
                </ExportButton>
              </div>
            </div>
            <CustomTable
              dataSource={filteredData}
              columns={visibleColumns}
              pagination={{
                ...pagination,
                showLessItems: true,
                itemRender: (page, type, originalElement) => {
                  if (type === "jump-prev" || type === "jump-next") {
                    return <span>...</span>;
                  }
                  if (
                    type === "prev" ||
                    type === "next" ||
                    type === "prev_5" ||
                    type === "next_5"
                  ) {
                    return (
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTableChange(type);
                        }}
                      >
                        {type === "prev" && (
                          <>
                            {/* <CustomSpan>
                              <DoubleLeftOutlined />
                            </CustomSpan> */}
                            <CustomSpan>
                              <LeftOutlined />
                            </CustomSpan>
                          </>
                        )}
                        {type === "next" && (
                          <>
                            <CustomSpan>
                              <RightOutlined />
                            </CustomSpan>
                            {/* <CustomSpan>
                              <DoubleRightOutlined />
                            </CustomSpan> */}
                          </>
                        )}
                        {type === "prev_5" && <DoubleLeftOutlined />}
                        {type === "next_5" && <DoubleRightOutlined />}
                      </Link>
                    );
                  }
                  return originalElement;
                },
              }}
              onChange={handleTableChange}
            />
          </ReportCard>
        </>
      </DashboardLayout>
    </CommonLayout>
  );
};
export default DeliveryReport;
