import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

import AllPc from '@/components/UI/AllPc';
import { Breadcrumb, Button, Card, Col, Image, Row } from "antd";

import Head from "next/head";
import Link from "next/link";

import {
  ArrowRightOutlined,
  ProfileOutlined,
  StarFilled,
} from "@ant-design/icons";

const ram = ({allPc}) => {
    const { Meta } = Card;
    const ramPc = allPc.filter((pc) => pc.category === 'ram');
    return (
      <>
        <Head>
        <title>Ram Page</title>
      </Head>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item href='/'>/ Home</Breadcrumb.Item>
      <Breadcrumb.Item href='/categories'>Categories</Breadcrumb.Item>
        <Breadcrumb.Item>Ram</Breadcrumb.Item>
      </Breadcrumb>
        <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {ramPc?.map((pc) => (
          <Col key={pc.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={pc?.image_url}
                  width={100}
                  height={100}
                  responsive
                  alt="news image"
                />
              }
            >
              <Meta title={pc?.title} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>
              {/* {/* <h1>category={pc?.category}</h1>  */}
              <p
                style={{
                  display: "flex",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                Category:{" "}
                <Meta style={{ paddingLeft: "7px" }} title={pc?.category} />
              </p>
              <p
                style={{
                  display: "flex",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                Price: <Meta style={{ paddingLeft: "7px" }} title={pc?.price} />
              </p>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <ProfileOutlined /> {pc?.status}
                </span>
                <span>
                  <StarFilled /> {pc?.rating}
                </span>
              </p>

              <Link href={`/pc/${pc?.id}`}>
                <Button
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  <p>
                    Add to Builder <ArrowRightOutlined />
                  </p>
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row></>
    );
};

export default ram;

ram.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/pc");
    const data = await res.json();
    // console.log(data);
    return {
      props: {
        allPc: data.data,
      },
      revalidate: 10, //auto build hobe 5 sec porei
    };
  };