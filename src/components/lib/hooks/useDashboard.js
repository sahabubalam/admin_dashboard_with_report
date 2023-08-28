import { Dropdown, Form, Menu, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { notifyResponseError } from "../common/notifications";
import facebook from "../../../assets/images/facebook.png";
import medium from "../../../assets/images/medium.png";
import youtube from "../../../assets/images/youtube.png";
import bing from "../../../assets/images/bing.png";
import google from "../../../assets/images/google.png";

const CustomImg = styled.img`
  vertical-align: middle;
  height: 24px;
  width: 24px;
`;

export default function useDashboard() {
  let { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [showAllData, setShowAllData] = useState(false);

  const today = Form.useWatch("today", form);
  const overview = [{ id: 1, type: "today" }];

  const toggleShowAllData = () => {
    setShowAllData(!showAllData);
  };

  const handleDelete = async (id) => {
    console.log({ id: id });
  };
  const data = [
    {
      year: "Jan",
      2020: 0,
      2021: 1,
    },
    {
      year: "Feb",
      2020: 5,
      2021: 3,
    },
    {
      year: "Mar",
      2020: 10,
      2021: 8,
    },
    {
      year: "Apr",
      2020: 15,
      2021: 6,
    },
    {
      year: "May",
      2020: 12,
      2021: 3,
    },
    {
      year: "Jun",
      2020: 10,
      2021: 2,
    },
    {
      year: "Jul",
      2020: 9,
      2021: 1,
    },
    {
      year: "Aug",
      2020: 15,
      2021: 6,
    },
    {
      year: "Sep",
      2020: 0,
      2021: 1,
    },
    {
      year: "Oct",
      2020: 5,
      2021: 3,
    },
    {
      year: "Nov",
      2020: 10,
      2021: 8,
    },
    {
      year: "Dec",
      2020: 15,
      2021: 6,
    },
  ];
  const config = {
    data: [data, data],
    xField: "year",
    yField: ["2020", "2021"],
    geometryOptions: [
      {
        geometry: "line",
        color: "#0D6EFD",
      },
      {
        geometry: "line",
        color: "#A8CBFE",
      },
    ],
    legend: {
      layout: "horizontal",
      position: "top-left",
      marker: { symbol: "circle" },
    },
  };

  const data1 = [
    {
      type: "Email",
      value: 0.2,
    },
    {
      type: "Refferal",
      value: 0.4,
    },
    {
      type: "Social",
      value: 0.3,
    },
  ];
  const config1 = {
    appendPadding: 10,
    data: data1,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.8,
    color: ["#E6F0FF", "#81B4FE", "#3485FD"],
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
      },
      autoRotate: false,
      content: "",
    },
    statistic: null,
    legend: {
      layout: "horizontal",
      position: "bottom",
    },
  };

  const columns = [
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      render: (text, record) => (
        <span>
          {getIcon(record.source)} {text}
        </span>
      ),
    },
    {
      title: "Page Views",
      dataIndex: "views",
      key: "views",
      sorter: (a, b) => a.views - b.views,
    },
    {
      title: "Change",
      dataIndex: "change",
      key: "change",
      sorter: (a, b) => a.change.localeCompare(b.change),
      render: (text, record) => <span style={getColor(text)}>{text}%</span>,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      sorter: (a, b) => a.duration.localeCompare(b.duration),
    },
    {
      title: "Bounce",
      dataIndex: "bounce",
      key: "bounce",
      sorter: (a, b) => a.bounce.localeCompare(b.bounce),
    },
    {
      dataIndex: "",
      key: "actions",
      render: (text, record) => (
        <Dropdown
          overlay={
            <Menu style={{ height: "38px" }}>
              <Menu.Item key="delete" onClick={() => handleDelete(record.key)}>
                Delete
              </Menu.Item>
            </Menu>
          }
        >
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "#E9ECEF",
              height: "24px",
              width: "24px",
              verticalAlign: "middle",
            }}
          >
            <Link>
              <i style={{ fontSize: "10px", color: "black" }} className="fa">
                &nbsp; &nbsp; &#xf142;
              </i>
            </Link>
          </div>
        </Dropdown>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      source: "Facebook",
      views: 25,
      change: 773,
      duration: "444",
      bounce: "77",
    },
    {
      key: "2",
      source: "Google",
      views: 33,
      change: -355,
      duration: "34",
      bounce: "78",
    },
    {
      key: "3",
      source: "Youtube",
      views: 33,
      change: -636,
      duration: "34",
      bounce: "78",
    },
    {
      key: "4",
      source: "Medium",
      views: 33,
      change: 65.31,
      duration: "34",
      bounce: "78",
    },
    {
      key: "5",
      source: "Bing",
      views: 33,
      change: -675,
      duration: "34",
      bounce: "78",
    },
  ];

  const getColor = (change) => {
    if (parseFloat(change) < 0) {
      return { backgroundColor: "#FFE0E3", padding: "3px", color: "red" };
    } else if (parseFloat(change) > 0) {
      return { backgroundColor: "#DCFFF5", padding: "3px", color: "#20C997" };
    }
  };

  const getIcon = (name) => {
    switch (name) {
      case "Facebook":
        return <CustomImg src={facebook} />;
      case "Medium":
        return <CustomImg src={medium} />;
      case "Google":
        return <CustomImg src={google} />;
      case "Youtube":
        return <CustomImg src={youtube} />;
      case "Bing":
        return <CustomImg src={bing} />;
    }
  };

  const getSingleData = async (id) => {};

  useEffect(() => {
    if (!id) return;
    getSingleData(id);
  }, [id]);

  return {
    id,
    form,
    getSingleData,
    handleDelete,
    data,
    config,
    config1,
    columns,
    dataSource,
    toggleShowAllData,
    showAllData,
    overview,
  };
}
