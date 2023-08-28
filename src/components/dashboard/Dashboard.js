import { Card, Col, Form, Row, Select, Table } from "antd";
import CommonLayout from "../../layout/CommonLayout";
import DashboardLayout from "../../layout/DashboardLayout";
import ReportCard from "../lib/common/ReportCard";
import { DualAxes, Pie } from "@ant-design/plots";
import lineChart from "../../assets/images/lineChart.PNG";
import singleLineChart from "../../assets/images/singleLineChart.png";
import pieChart from "../../assets/images/pie.png";
import barChart from "../../assets/images/bar.png";
import increase from "../../assets/images/increase.png";
import decrease from "../../assets/images/decrease.png";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useDashboard from "../lib/hooks/useDashboard";

const CustomTable = styled(Table)`
  .ant-table {
    width: 100%;
    overflow-x: auto;
  }
`;
export default function Dashboard() {
  const {
    id,
    form,
    dataSource,
    columns,
    config,
    config1,
    toggleShowAllData,
    showAllData,
    overview,
  } = useDashboard();

  return (
    <CommonLayout>
      <DashboardLayout>
        <>
          <Row gutter={[10, 10]}>
            <Col xs={24} md={6} sm={24} lg={6}>
              <Card
                style={{
                  boxShadow:
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                  background: "#FFFFFF",
                  borderRadius: "15px",
                  height: "110px",
                  color: "#000000",
                  border: "none",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span style={{ color: "#6C757D" }}>Page Views</span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      37543
                    </span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "10px" }}>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "3px" }}>
                          <img alt="" src={increase} />
                        </div>
                        <div>12.54%</div>
                      </div>
                    </span>
                  </div>
                  <div>
                    <img
                      alt=""
                      style={{
                        width: "90px",
                        height: "50px",
                        backgroundColor: "#FFFFFF",
                      }}
                      src={lineChart}
                    />
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={6} sm={24} lg={6}>
              <Card
                style={{
                  boxShadow:
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                  background: "#FFFFFF",
                  borderRadius: "15px",
                  height: "110px",
                  color: "#000000",
                  border: "none",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span style={{ color: "#6C757D" }}>Users</span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      6443
                    </span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "10px" }}>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "3px" }}>
                          <img alt="" src={decrease} />
                        </div>
                        <div>-10.45%</div>
                      </div>
                    </span>
                  </div>
                  <div>
                    <img
                      alt=""
                      style={{
                        width: "90px",
                        height: "50px",
                        backgroundColor: "#FFFFFF",
                      }}
                      src={singleLineChart}
                    />
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={6} sm={24} lg={6}>
              <Card
                style={{
                  boxShadow:
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                  background: "#FFFFFF",
                  borderRadius: "15px",
                  height: "110px",
                  color: "#000000",
                  border: "none",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span style={{ color: "#6C757D" }}>Goals</span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      50.1%
                    </span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "10px" }}>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "3px" }}>
                          <img alt="" src={increase} />
                        </div>
                        <div>2.7%</div>
                      </div>
                    </span>
                  </div>
                  <div>
                    <img
                      alt=""
                      style={{
                        width: "35px",
                        height: "50px",
                        backgroundColor: "#FFFFFF",
                      }}
                      src={pieChart}
                    />
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={6} sm={24} lg={6}>
              <Card
                style={{
                  boxShadow:
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                  background: "#FFFFFF",
                  borderRadius: "15px",
                  height: "110px",
                  color: "#000000",
                  border: "none",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span style={{ color: "#6C757D" }}>Avg. Time</span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      04:20
                    </span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "10px" }}>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "3px" }}>
                          <img alt="" src={decrease} />
                        </div>
                        <div>-4.4%</div>
                      </div>
                    </span>
                  </div>
                  <div>
                    <img
                      alt=""
                      style={{
                        width: "80px",
                        height: "50px",
                        backgroundColor: "#FFFFFF",
                      }}
                      src={barChart}
                    />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <br />

          <Row gutter={[16, 16]}>
            <Col sm={24} xs={24} md={16} lg={16}>
              <Card
                title="User Overview"
                extra={
                  <Form form={form} style={{ marginTop: "8px" }}>
                    <Form.Item name="today">
                      <Select style={{ width: 120 }}>
                        {overview.map((item) => (
                          <Select.Option key={item.id} value={item.type}>
                            {item.type}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Form>
                }
              >
                <div>
                  <DualAxes style={{ height: "200px" }} {...config} />
                </div>
              </Card>
            </Col>

            <Col sm={24} xs={24} md={8} lg={8}>
              <Card title="Refferals">
                <div>
                  <Pie style={{ height: "208px" }} {...config1} />
                </div>
              </Card>
            </Col>
          </Row>
          <br />
          <ReportCard title="Sources">
            <div>
              <CustomTable
                dataSource={showAllData ? dataSource : dataSource.slice(0, 4)}
                columns={columns}
                pagination={false}
              />
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <Link to="" onClick={toggleShowAllData}>
                  <span style={{ color: "#0D6EFD", fontWeight: "bold" }}>
                    {showAllData ? "Show less data" : "See all data"}{" "}
                    <RightOutlined
                      style={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        color: "black",
                      }}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </ReportCard>
        </>
      </DashboardLayout>
    </CommonLayout>
  );
}
