import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllPc from "@/components/UI/AllPc";
import { Breadcrumb } from "antd";


const HomePage = ({allPc}) => {
  // const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
  //   loading: () => <h1>Loading...</h1>,
  //   ssr:false,
  // })
  return (
    <>
      <Head>
        <title>PC Builder App</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
      <Breadcrumb.Item>/ Home</Breadcrumb.Item>
      {/* <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item> */}
    </Breadcrumb>
      <Banner />
      <AllPc allPc={allPc}></AllPc>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
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

