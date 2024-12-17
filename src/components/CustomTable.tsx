import { Table } from "antd";
import type { TableProps } from "antd";
import { DataType, ICustomTablePropsCustomTable } from "./types";
import { Button } from "antd";

const CustomTable = ({
  data,
  onDelete,
  loading,
}: ICustomTablePropsCustomTable) => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "IsHead",
      dataIndex: "isHead",
      key: "isHead",
      render: (e) => String(e ?? false),
    },
    {
      title: "Remove",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Button onClick={() => onDelete(id)} type="primary" danger>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Table<DataType>
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={false}
    />
  );
};

export default CustomTable;
