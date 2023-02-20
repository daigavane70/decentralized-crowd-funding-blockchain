import React, { useState, useEffect } from "react";
import {
  Radio,
  Space,
  Table,
  Tag,
  Avatar,
  Button,
  Select,
  Form,
  Input,
} from "antd";
import { Descriptions } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../App.css";

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export default function CreateSpendingRequest() {
  const formRef = React.useRef(null);
  return (
    <div className="mb-4">
      <div className="investor-profile space-y-3">
        <div className="text-4xl mb-4 font-bold border-b pb-2 text-gray-400">
          Create new spending request
        </div>
      </div>
      <Form
        className="w-[1500px] mx-auto border p-4 py-8 bg-gray-50 rounded-lg pb-2"
        title="Enter campaign manager details"
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true, totalAmount: "0" }}
        onFinish={() => {}}
        onFinishFailed={() => {}}
        autoComplete="off"
        ref={formRef}
      >
        <Form.Item
          name="startup"
          label="Select Startup"
          rules={[{ required: true }]}
        >
          <Select
            defaultValue="select"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
              {
                value: "disabled",
                label: "Disabled",
                disabled: true,
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Amount to be raised: "
          name={"totalAmount"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item {...tailLayout} className="space-x-4">
          <Button className=" bg-blue-500 text-white mr-2" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div></div>
    </div>
  );
}
