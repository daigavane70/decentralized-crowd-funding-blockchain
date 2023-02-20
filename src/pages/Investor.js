import React, { useState, useEffect } from "react";
import { Radio, Space, Table, Tag, Avatar } from "antd";
import { Descriptions } from "antd";
import { UserOutlined } from "@ant-design/icons";

const topOptions = [
    {
      label: 'topLeft',
      value: 'topLeft',
    },
    {
      label: 'topCenter',
      value: 'topCenter',
    },
    {
      label: 'topRight',
      value: 'topRight',
    },
    {
      label: 'none',
      value: 'none',
    },
  ];
  const bottomOptions = [
    {
      label: 'bottomLeft',
      value: 'bottomLeft',
    },
    {
      label: 'bottomCenter',
      value: 'bottomCenter',
    },
    {
      label: 'bottomRight',
      value: 'bottomRight',
    },
    {
      label: 'none',
      value: 'none',
    },
  ];


  const columns = [
    {
      title: 'Sr no.',
      dataIndex: 'srno',
      key: 'srno',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Start up Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Campaign Manager Name',
      dataIndex: 'cmname',
      key: 'cmname',
    },
    {
      title: 'Vendor Name',
      dataIndex: 'vendorname',
      key: 'vendorname',
    },
    {
      title: 'Amount to be raised',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Total Amount Raised',
      dataIndex: 'tamount',
      key: 'tamount',
    },
    {
      title: 'Approvals',
      dataIndex: 'approvals',
      key: 'approvals',
    },
    {
      title: 'Creation Date',
      dataIndex: 'dateTime',
      key: 'dateTime',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Accept</a>
          <a>Reject</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

const Investor = ({ investorId }) => {
    const [investor, setInvestor] = useState({});
    const [top, setTop] = useState('topLeft');
    const [bottom, setBottom] = useState('bottomRight');

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
    <div className="investor-profile space-y-3">
      <div className="text-4xl mb-4 font-bold border-b pb-2 text-gray-400">
        Investor Profile
      </div>
      <div className="grid grid-cols-5 p-4 rounded-xl py-4 border">
        <Space wrap size={16}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Space>
        <div className="grid grid-cols-3 col-span-4">
          <div className="flex space-x-3">
            <div className=" text-slate-500">Name: </div>
            <div className=" font-bold">Bhavana Bafna</div>
          </div>
          <div className="flex space-x-3">
            <div className=" text-slate-500">Email: </div>
            <div className=" font-bold">bhavnaabafna.bb@gmail.com</div>
          </div>
          <div className="flex space-x-3">
            <div className=" text-slate-500">Mobile: </div>
            <div className=" font-bold">9823889479</div>
          </div>
          <div className="flex space-x-3">
            <div className=" text-slate-500">Total Investments: </div>
            <div className=" font-bold">21</div>
          </div>
          <div className="flex space-x-3">
            <div className=" text-slate-500">Amount invested: </div>
            <div className=" font-bold">$ 450,000</div>
          </div>
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          pagination={{
            position: [bottom],
          }}
          dataSource={data}
        />
      </div>
    </div>
    );
  };
  
  export default Investor;