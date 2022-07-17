import { Card, Empty } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface OrdersProps {}

const Orders: FC<OrdersProps> = () => {
  return (
    <Card
      title="My Orders"
      style={{ minHeight: "90vh" }}
      extra={<Link to="/">Go back</Link>}
    >
      <Empty description="Your orders is empty!" />
    </Card>
  );
};

export default Orders;
