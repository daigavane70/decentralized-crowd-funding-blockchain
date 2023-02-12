import React, { useState, useEffect } from "react";
import { Radio, Space, Table, Tag } from "antd";
import { Descriptions } from "antd";

const topOptions = [
  {
    label: "topLeft",
    value: "topLeft",
  },
  {
    label: "topCenter",
    value: "topCenter",
  },
  {
    label: "topRight",
    value: "topRight",
  },
  {
    label: "none",
    value: "none",
  },
];
const bottomOptions = [
  {
    label: "bottomLeft",
    value: "bottomLeft",
  },
  {
    label: "bottomCenter",
    value: "bottomCenter",
  },
  {
    label: "bottomRight",
    value: "bottomRight",
  },
  {
    label: "none",
    value: "none",
  },
];
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Investor = ({ investorId }) => {
  const [investor, setInvestor] = useState({});
  const [top, setTop] = useState("topLeft");
  const [bottom, setBottom] = useState("bottomRight");

  useEffect(() => {
    async function fetchInvestorData() {
      // Make an API call to retrieve investor data based on the investorId
      const response = await fetch(`/api/investors/${investorId}`);
      const data = await response.json();
      setInvestor(data);
    }
    fetchInvestorData();
  }, [investorId]);

  return (
    <div className="investor-profile">
      <h2>name</h2>
      {/* <h1>{investor.name}</h1> */}
      <p>Email: {investor.email}</p>
      <p>Id: {investor.id}</p>
      {/* <Descriptions title="User Info">
            <Descriptions.Item label="UserName">bcs</Descriptions.Item>
            <Descriptions.Item label="Email">{investor.email}</Descriptions.Item>
            <Descriptions.Item label="Id">{investor.id}</Descriptions.Item>s
        </Descriptions> */}

      <div>
        {/* <div>
        <Radio.Group
          style={{
            marginBottom: 10,
          }}
          options={topOptions}
          value={top}
          onChange={(e) => {
            setTop(e.target.value);
          }}
        />
      </div> */}
        {/* <Radio.Group
        style={{
          marginBottom: 10,
        }}
        options={bottomOptions}
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      /> */}
        <Table
          columns={columns}
          pagination={{
            position: [top, bottom],
          }}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default Investor;
