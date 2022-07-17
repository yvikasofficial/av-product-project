import { Button, Card, Col, Image, Row, Tag, Typography } from "antd";
import axios from "axios";
import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";

interface ItemProps {}

const { Title, Text } = Typography;
const Item: FC<ItemProps> = () => {
  const [state, setState] = React.useState({
    loading: false,
    data: null as any,
    error: false,
  });
  const { loading, data } = state;
  const params: any = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));
        const res = await axios.get(
          `https://fakestoreapi.com/products/${params?.id}`
        );
        setState((prevState) => ({
          ...prevState,
          loading: false,
          data: res.data,
        }));
        console.log(res.data);
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
        }));
      }
    };

    fetchData();
  }, [params?.id]);
  return (
    <Card
      loading={loading}
      title="Single Product"
      style={{ minHeight: "90vh" }}
      extra={<Link to="/">Go back</Link>}
    >
      {data && (
        <Row justify="center">
          <Card
            actions={[
              <Button size="large" type="primary">
                Add to Cart
              </Button>,
            ]}
            style={{ width: 800 }}
          >
            <Row gutter={16}>
              <Col span={12}>
                {data && (
                  <Image
                    height={400}
                    width={"100%"}
                    style={{ objectFit: "cover" }}
                    preview
                    srcSet={data.image}
                  />
                )}
              </Col>
              <Col span={12}>
                <Title level={4}>{data?.title}</Title>
                <Text>{data.description}</Text>
                <div style={{ height: "15px" }}></div>
                <Row className="logo" justify="space-between" align="middle">
                  <Tag>{data.category}</Tag>
                  <Title ellipsis type="success" level={5}>
                    ${data.price}
                  </Title>
                </Row>
              </Col>
            </Row>
          </Card>
        </Row>
      )}
    </Card>
  );
};

export default Item;
