import { Breadcrumb, Col, Row } from "antd";
// import {
//   UserOutlined,
//   CalendarOutlined,
//   CommentOutlined,
//   ProfileOutlined,
//   StarFilled,
// } from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const PcDetailPage = ({ pc }) => (
  <>
      <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
      <Breadcrumb.Item>/ Home</Breadcrumb.Item>
      <Breadcrumb.Item>PC</Breadcrumb.Item>
      <Breadcrumb.Item>{pc?.id}</Breadcrumb.Item>
    </Breadcrumb>
  <Row style={{ marginTop: "80px", alignItems: "center" }}>
    <Col md={6} lg={12}>
      <Image
        alt="example"
        src={pc?.image_url}
        width={500}
        height={300}
        responsive
      />
    </Col>
    <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
      <h1 style={{ fontSize: "30px" }}>{pc?.title}</h1>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        Category: {pc?.category}
      </span>
      <div
        className="line"
        style={{
          height: "5px",
          margin: "20px 0",
          background: "#000",
          width: "100%",
        }}
      ></div>

      {/* <p
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          color: "gray",
          margin: "10px 0px",
          fontSize: "20px",
        }}
      >
        <span>
          <ProfileOutlined /> {pc?.status}
        </span>
        <span>
          <StarFilled /> {pc?.rating}
        </span>
      </p> */}
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        Status: {pc?.status}
      </span>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        Price: {pc?.price}
      </span>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        Description: {pc?.description}
      </span>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        Key Features: {pc?.keyFeature}
      </span>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        Individual Rating: {pc?.individualRating}
      </span>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
       Average Rating : {pc?.averageRating}
      </span>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        Reviews: {pc?.reviews}
      </span>

      {/* <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
        {pc?.description}
      </p> */}
    </Col>
  </Row>
  </>
);
export default PcDetailPage;

PcDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/pc");
  const pces = await res.json();
  const pcs = pces.data;

  const paths = pcs.map((pc) => ({
    params: { pcId: pc.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  //   http://localhost:3000/api/pc?pcId=3
  const res = await fetch(`http://localhost:3000/api/pc/?pcId=${params.pcId}`);
  const data = await res.json();
  // console.log(
  //   "---------------------------------------------------------------------",
  //   data
  // );

  return {
    props: {
      pc: data?.data,
    },
  };
};
