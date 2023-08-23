import { Modal, Form, Input, Button, Select } from "antd";
import React from "react";
import { IModalProps } from "../../../types";
import {
  generalValidationRules,
  textInputValidationRules,
} from "../../../lib/validation";
import { TProduct } from "../types";
import { useAppDispatch } from "../../../config/redux/hooks";
import { productActions } from "../slices/product";
import { PRODUCT_STATUSES, PRODUCT_TYPES } from "../constants";

export const AddProduct: React.FC<IModalProps> = ({ handleClose, open }) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const handleSubmit = (data: Omit<TProduct, "id" | "createdAt">) => {
    dispatch(productActions.add({ data }));
    form.resetFields();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onCancel={() => handleClose()}
      footer={null}
      title={"Add Product"}
      style={{ top: 20 }}
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        requiredMark={false}
      >
        <Form.Item
          rules={textInputValidationRules}
          name="name"
          label="Product Name"
        >
          <Input placeholder="Product Name" />
        </Form.Item>
        <Form.Item
          rules={textInputValidationRules}
          name="description"
          label="Description"
        >
          <Input.TextArea placeholder="Describe product" />
        </Form.Item>
        <Form.Item name="status" label="Status" rules={generalValidationRules}>
          <Select
            options={PRODUCT_STATUSES.map((item) => ({
              label: <span className="capitalize">{item}</span>,
              value: item,
            }))}
          />
        </Form.Item>
        <Form.Item name="type" label="Type" rules={generalValidationRules}>
          <Select
            options={PRODUCT_TYPES.map((item) => ({
              label: <span className="capitalize">{item}</span>,
              value: item,
            }))}
          />
        </Form.Item>

        <div className="flex justify-end">
          <Button htmlType="submit" type="dashed">
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
