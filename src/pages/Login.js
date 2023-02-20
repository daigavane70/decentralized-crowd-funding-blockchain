import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, login } from "../config/Requests";

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const CreateInvestor = ({ setLoggedIn, loginWithToken }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const formRef = React.useRef(null);
  const { Option } = Select;

  const navigate = useNavigate();

  const onFinish = (values) => {
    async function getData() {
      try {
        const res = await login(values);
        console.log(res.data);
        loginWithToken(res.data.token);
        setLoading(false);
        setLoggedIn(true);
        navigate("/");
      } catch (e) {}
    }

    setLoading(true);
    getData();
  };

  return (
    <div className="text-center space-y-2 mt-40">
      <h1 className=" text-4xl font-bold mb-10">Login</h1>
      <Form
        className="w-[400px] mx-auto border p-4 py-8 bg-gray-50 rounded-lg"
        title="Enter campaign manager details"
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{
          email: "iamalbert@gmai.com",
          password: "password123",
        }}
        onFinish={onFinish}
        onFinishFailed={() => {}}
        autoComplete="off"
        ref={formRef}
      >
        <Form.Item
          label="Email"
          name={"email"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="Password"
          name={"password"}
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item {...tailLayout} className="space-x-4">
          <Button
            className="bg-blue-500 text-white mr-2"
            loading={loading}
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateInvestor;
