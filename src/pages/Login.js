import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { createUser, login } from "../config/Requests";

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const CreateInvestor = ({ setLoggedIn, setUser }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const formRef = React.useRef(null);
  const { Option } = Select;

  const onReset = () => {
    formRef.current?.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const onFinish = (values) => {
    async function getData() {
      try {
        const res = await login(values);
        console.log(res.data);
        setLoading(false);
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
          <Button className=" bg-blue-500 text-white mr-2" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateInvestor;
