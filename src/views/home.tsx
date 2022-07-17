import { Card, Col, Image, Row, Tag, Typography } from "antd";
import axios from "axios";
import * as React from "react";
import { useHistory } from "react-router-dom";

interface HomeProps {}

const { Title } = Typography;
const Home: React.FC<HomeProps> = () => {
  const history = useHistory();
  const [state, setState] = React.useState({
    loading: false,
    data: null as any,
    error: false,
  });
  const { loading, data } = state;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));
        const res = await axios.get("https://fakestoreapi.com/products/");
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
  }, []);

  return (
    <Card loading={loading} title="All Products" style={{ minHeight: "90vh" }}>
      <Row gutter={[16, 16]}>
        {data?.map((el: any, i: any) => {
          return (
            <Col
              onClick={() => history.push(`/${el.id}`)}
              style={{ cursor: "pointer" }}
              key={i}
              span={6}
            >
              <Card style={{ height: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Image
                      height={"250px"}
                      width={"100%"}
                      style={{ objectFit: "cover" }}
                      preview={false}
                      srcSet={el.image}
                    />
                    <div style={{ height: "15px" }}></div>
                    <Title level={4}>{el.title}</Title>
                    <Row
                      className="logo"
                      justify="space-between"
                      align="middle"
                    >
                      <Tag>{el.category}</Tag>
                      <Title ellipsis type="success" level={5}>
                        ${el.price}
                      </Title>
                    </Row>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default Home;
