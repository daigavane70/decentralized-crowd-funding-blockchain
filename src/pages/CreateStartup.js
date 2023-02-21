import React, { useState, useEffect } from "react";
import {
  Button,
  Select,
  Form,
  Input,
} from "antd";
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

export default function CreateStartup() {
  const formRef = React.useRef(null);
  return (
    <div className="mb-4">
      <div className="investor-profile space-y-3">
        <div className="text-4xl mb-4 font-bold border-b pb-2 text-gray-400">
          Create new Startup
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
          label="Start-up Name"
          name={"startupName"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          name="segment"
          label="Select Startup Segment"
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
          label="Start-up Description"
          name={"startupDescription"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Start-up Logo Image"
          name={"startupLogo"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Start-up Size"
          name={"startupSize"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Start-up Found In"
          name={"startupFoundIn"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Start-up Valuation"
          name={"startupValuation"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>
        
        <Form.Item
          label="Start-up Ceo Name"
          name={"startupCeoName"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Start-up Country"
          name={"startupCountry"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Start-up Headquarters"
          name={"startupHeadquarters"}
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
