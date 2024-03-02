import { Table } from "antd";
import React, { useState } from "react";
import { productData } from "../productData";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {
   const [data, setData] = useState(productData) 
   let navigate = useNavigate();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filterMode: "tree",
      filterSearch: true,
      onFilter: (record, value) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      sorter: (a, b) => a.rate - b.rate,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      render: (value, record) => (
        <button 
        style={{ cursor: "pointer" }}
        onClick={() => navigate("edit", {state: record})}
        >
          Edit {console.log(record)}
        </button>
      ),
    },
    {
      title: "Delete",
      dataIndex: "Delete",
      key: "delete",
      render: (value, record) => (
        <button
          style={{ cursor: "pointer" }}
          onClick={() => setData(data.filter((product) => product !== record))}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={data} columns={columns} />;
    </>
  );
};

export default ProductTable;
