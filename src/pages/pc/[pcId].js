import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const PcDetailPage = ({ pc }) => (
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
      <h1 style={{ fontSize: "30px" }}>{news?.title}</h1>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        <UserOutlined /> {pc?.author}
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

      <p
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          color: "gray",
          margin: "10px 0px",
          fontSize: "20px",
        }}
      >
        <span>
          <CalendarOutlined /> {pc?.release_date}
        </span>
        <span>
          <CommentOutlined /> {pc?.comment_count} Comments
        </span>
        <span>
          <ProfileOutlined /> {pc?.category}
        </span>
      </p>

      <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
        {pc?.description}
      </p>
    </Col>
  </Row>
);
export default PcDetailPage;

PcDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/pc");
  const pces = await res.json();
    console.log("-----------------------------------------",pces);

  const paths = pces.map((pc) => ({
    params: { pcId: pc.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/pc/${params.pcId}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      pc: data,
    },
  };
};
