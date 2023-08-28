import {Form, Input} from "antd";
import React from "react";
import CRPForm from "../lib/common/CRPForm";
import { formLayout as layout } from "../lib/common/layout";
import SubmitBtn from "../lib/common/button/SubmitBtn";
import ResetBtn from "../lib/common/button/ResetBtn";
import CustomInput from "../lib/common/CustomInput";

const AddUser = ({onReset, id, form,handleUserModelSubmit}) => {
  return (

          <CRPForm
              {...layout}
              form={form}
              layout="vertical"
              name="nest-messages"
              onFinish={handleUserModelSubmit}
          >
            <Form.Item
                name="name"
                label="User Name"
                rules={[
                  {
                    required: true,
                      message: "User name is required"
                  },
                ]}
            >
              <CustomInput />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                      message: "Email is required"
                  },
                ]}
            >
              <CustomInput />
            </Form.Item>
              <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                      {
                          required: true,
                          message: 'Password  is required"!',
                      },
                  ]}
              >
                  <CustomInput.Password />
              </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
            <div style={{display: 'flex', float: "right"}}>
                <ResetBtn onClick={onReset} style={{marginRight: "10px"}}>
                    Reset
                </ResetBtn>
                <SubmitBtn  htmlType="submit" >
                    {id ? "Update" : "Submit"}
                </SubmitBtn>
            </div>
            </Form.Item>
          </CRPForm>

  );
};

export default AddUser;
