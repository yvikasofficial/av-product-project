import { Card, Typography } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface ContactProps {}

const { Title, Text } = Typography;

const Contact: FC<ContactProps> = () => {
  return (
    <Card
      title="Contact us"
      style={{ minHeight: "90vh" }}
      extra={<Link to="/">Go back</Link>}
    >
      <Title>Feel free to reach out to us!</Title>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam sunt
        enim veritatis ratione laboriosam dolorem labore, fugiat optio libero,
        maxime illum id? Nisi laudantium quae error, necessitatibus mollitia
        asperiores, adipisci quibusdam ipsam sapiente nemo voluptates ut!
        Dignissimos tempore exercitationem atque expedita eveniet fuga
        reprehenderit dolorem minus? Non, molestias! Quibusdam, adipisci saepe
        ut atque, quos sit vitae repudiandae voluptatem, alias nulla nam error
        labore quod hic praesentium laboriosam! Molestias ex voluptas eligendi
        debitis quam expedita mollitia? Suscipit mollitia dolore temporibus id
        obcaecati earum enim a aperiam architecto quam qui nisi libero
        asperiores, facere consequatur tenetur, voluptates ullam aliquid nemo!
        Soluta, ex.
      </Text>
      <div style={{ height: 30 }}></div>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam sunt
        enim veritatis ratione laboriosam dolorem labore, fugiat optio libero,
        maxime illum id? Nisi laudantium quae error, necessitatibus mollitia
        asperiores, adipisci quibusdam ipsam sapiente nemo voluptates ut!
        Dignissimos tempore exercitationem atque expedita eveniet fuga
        reprehenderit dolorem minus? Non, molestias! Quibusdam, adipisci saepe
        ut atque, quos sit vitae repudiandae voluptatem, alias nulla nam error
        labore quod hic praesentium laboriosam! Molestias ex voluptas eligendi
        debitis quam expedita mollitia? Suscipit mollitia dolore temporibus id
        obcaecati earum enim a aperiam architecto quam qui nisi libero
        asperiores, facere consequatur tenetur, voluptates ullam aliquid nemo!
        Soluta, ex.
      </Text>
    </Card>
  );
};

export default Contact;
