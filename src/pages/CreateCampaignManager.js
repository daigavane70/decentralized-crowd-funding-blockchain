import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const CreateInvestor = () => {
  const [data, setData] = useState({});
  const [form] = Form.useForm();
  const formRef = React.useRef(null);
  const { Option } = Select;

  const onFinish = (values) => {
    console.log(values);
  };
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

  return (
    <div className="text-center space-y-2 mt-40">
      <h1 className=" text-4xl font-bold mb-10">Create campaign manager</h1>
      <Form
        className="w-[500px] mx-auto border p-4 py-8 bg-gray-50 rounded-lg"
        title="Enter campaign manager details"
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true, gender: "male" }}
        onFinish={() => {}}
        onFinishFailed={() => {}}
        autoComplete="off"
        ref={formRef}
      >
        <Form.Item
          label="Name"
          name={"name"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="Email"
          name={"email"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="Mobile"
          name={"mobile"}
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select your gender"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout} className="space-x-4">
          <Button className=" bg-blue-500 text-white mr-2" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" className="mr-2" onClick={onReset}>
            Reset
          </Button>
          <Button type="dashed" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateInvestor;
