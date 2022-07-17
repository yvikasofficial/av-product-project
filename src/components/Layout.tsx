import { Col, Input, Layout, Menu, Row, Typography } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

const AppLayout: React.FC<any> = ({ children }) => {
  const history = useHistory();

  const config = [
    {
      label: "Home",
      path: "/",
      key: "/",
    },
    {
      label: "My Orders",
      path: "/orders",
      key: "/orders",
    },
    {
      label: "Contact us",
      path: "/contact",
      key: "/contact",
    },
  ];

  return (
    <Layout>
      <Header>
        <Row gutter={24} align="middle">
          <Col className="logo">
            <Row align="middle">
              <Link to="/">
                <Title
                  style={{
                    color: "white",
                    margin: "0 !important",
                    cursor: "pointer",
                  }}
                  level={2}
                >
                  Cartify
                </Title>
              </Link>
            </Row>
          </Col>

          <Col flex={1}>
            <Menu
              style={{ width: "300px" }}
              title="Hello"
              mode="horizontal"
              theme="dark"
              defaultSelectedKeys={[history.location.pathname]}
            >
              {config?.map((el) => (
                <Menu.Item key={el.key}>
                  <Link to={el.path}>{el.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Col>
          <Col>
            <Row align="middle">
              <Search placeholder="search for product" />
            </Row>
          </Col>
        </Row>
      </Header>
      {children}
    </Layout>
  );
};

export default AppLayout;
