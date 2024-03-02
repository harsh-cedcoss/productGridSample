import { Flex, Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const EditProduct = () => {
  const { state } = useLocation();
  const { name, rate, quantity, type, description } = state;

  const [details, setDetails] = useState({
    name: name || "",
    rate: rate || "",
    quantity: quantity || "",
    type: type || "",
    description: description || "",
  })

  return (
    <div style={{ margin: "3rem" }} >
      <Space direction="vertical" size="middle">
        <Input
          addonBefore={"Name"}
          placeholder="Name"
          variant="filled"
          defaultValue={name}
          value={details.name}
          onChange={(value) => setDetails({...details, name: value})} //prev
        />
        <Input
          addonBefore={"Rate"}
          placeholder="Rate"
          variant="filled"
          defaultValue={rate}
          value={details.rate}
          onChange={(value) => setDetails({...details, rate: value})}

        />
        <Input
          addonBefore={"Quantity"}
          placeholder="Quantity"
          variant="filled"
          defaultValue={quantity}
          value={details.quantity}
          onChange={(value) => setDetails({...details, quantity: value})}
        />
        <Input
          addonBefore={"Type"}
          placeholder="Type"
          variant="filled"
          defaultValue={type}
          value={details.type}
          onChange={(value) => setDetails({...details, type: value})}
        />
        <TextArea
          addonBefore={"Description"}
          maxLength={100}
          placeholder="Description"
          defaultValue={description}
          value={details.description}
          onChange={(value) => setDetails({...details, description: value})}
        />
      </Space>
      <br/>
      <br/>
      <button style={{cursor: 'pointer'}} onClick={(() => console.log('Details', details))}>Save</button>
    </div>
  );
};

export default EditProduct;
