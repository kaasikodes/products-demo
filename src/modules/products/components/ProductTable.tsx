import { TProduct } from "../types";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useAppSelector } from "../../../config/redux/hooks";
import { usePagination } from "../../../hooks/usePagination";

export const ProductTable = () => {
  const { pagination, onChange } = usePagination();
  const products = useAppSelector((state) => state.product.products);
  const columns: ColumnsType<TProduct> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => <span className="capitalize">{item.name}</span>,
    },
    {
      title: "Type",
      dataIndex: "Type",
      key: "Type",
      render: (_, item) => <span className="capitalize">{item.type}</span>,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (_, item) => <span className="capitalize">{item.status}</span>,
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      ellipsis: true,
      render: (_, item) => <span className="">{item.description}</span>,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, item) => (
        <span className="capitalize text-caramel hover:underline">
          {item.createdAt}
        </span>
      ),
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        size="small"
        dataSource={products}
        pagination={{ ...pagination, total: products.length }}
        onChange={onChange}
      />
    </div>
  );
};
