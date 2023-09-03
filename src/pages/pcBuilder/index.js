import RootLayout from "@/components/Layouts/RootLayout";
import AllPc from "@/components/UI/AllPc";
import { Breadcrumb, Button, Card, Col, Image, Row } from "antd";

import Head from "next/head";
import Link from "next/link";
import React from "react";

import {
  ArrowRightOutlined,
  ProfileOutlined,
  StarFilled,
} from "@ant-design/icons";
import CategoriesPage from "../categories";

const PcBuilderPage = ({ allPc }) => {
  // console.log(allPc);
  const { Meta } = Card;
  return (
    <>
      <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
      <Breadcrumb.Item>/ Home</Breadcrumb.Item>
      <Breadcrumb.Item>PC Builder</Breadcrumb.Item>
      
    </Breadcrumb>
      <Head>
        <title>PC Builder Page</title>
      </Head>
      
      {/* <AllPc allPc={allPc}></AllPc> */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #Select Items For Build PC
      </h1>
      <Row
        style={{ gap: 10 ,marginBottom:10 }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Link href="/categories/cpu">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <Image
                src="https://t3.ftcdn.net/jpg/00/81/24/72/360_F_81247213_OYvGTCn5mnQQ2c0gWJ1U5ixcbmNBaMOp.jpg"
                width={239}
                height={150}
                responsive
                alt="cpu image"
              />
            }
          >
            <Meta
              title="CPU / Processor"
              description="Select CPU Item For Pc Build"
            />
          </Card>
        </Link>
        <Link href="/categories/motherboard">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <Image
                src="https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?cs=srgb&dl=pexels-pixabay-163140.jpg&fm=jpg"
                width={239}
                height={150}
                responsive
                alt="motherboard image"
              />
            }
          >
            <Meta
              title="MotherBoard"
              description="Select MotherBoard Item For Pc Build"
            />
          </Card>
        </Link>
        <Link href="/categories/ram">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <Image
                src="https://www.groovypost.com/wp-content/uploads/2013/03/PC-Memory-DDR3-RAM.jpg"
                width={239}
                height={150}
                responsive
                alt="ram image"
              />
            }
          >
            <Meta title="RAM" description="Select Ram Item For Pc Build" />
          </Card>
        </Link>
        <Link href="/categories/powerSupply">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <Image
                src="https://azeshop.s3.ap-southeast-2.amazonaws.com/pcbyte/Category%20Page/image_1024-removebg-preview.png"
                width={239}
                height={150}
                responsive
                alt="powerSupply image"
              />
            }
          >
            <Meta
              title="Power Supply"
              description="Select Power Supply Item For Pc Build"
            />
          </Card>
        </Link>
        <Link href="/categories/storage">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <Image
                src="https://www.computerlounge.co.nz/data/media/images/blog//SSD-vs-HDD-images.jpg"
                width={239}
                height={150}
                responsive
                alt="storage image"
              />
            }
          >
            <Meta
              title="Storage Device"
              description="Select Storage Device Item For Pc Build"
            />
          </Card>
        </Link>
        <Link href="/categories/monitor">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <Image
                src="https://oasis.opstatics.com/content/dam/oasis/page/2022/in/product/monitor-e24/assets/kv-banner.jpeg"
                width={239}
                height={150}
                responsive
                alt="monitor image"
              />
            }
          >
            <Meta
              title="Monitor"
              description="Select Monitor Item For Pc Build"
            />
          </Card>
        </Link>
      </Row>
      {/* <CategoriesPage></CategoriesPage> */}
      {/* <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allPc?.map((pc) => (
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
      </Row> */}
    </>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/pc");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allPc: data.data,
    },
    // revalidate: 10, //auto build hobe 5 sec porei
  };
};
