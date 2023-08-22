import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Space } from "antd";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const CategoriesPage = () => {
  return (
    <>
      <Head>
        <title>Categories Page</title>
      </Head>
      <div>
        <h1>This is categories page</h1>
      </div>
      <Space className="site-button-ghost-wrapper" wrap>
        <Link href="/categories/cpu">
          <Button type="primary" ghost>
            CPU / Processor
          </Button>
        </Link>
        <Link href="/categories/motherboard">
          <Button type="primary" ghost>
            MotherBorad
          </Button>
        </Link>
        <Link href="/categories/ram">
          <Button type="primary" ghost>
            Ram
          </Button>
        </Link>
        <Link href="/categories/powerSupply">
          <Button type="primary" ghost>
            Power Supply
          </Button>
        </Link>
        <Link href="/categories/storage">
          <Button type="primary" ghost>
            Storage Device
          </Button>
        </Link>
        <Link href="/categories/monitor">
          <Button type="primary" ghost>
            Monitor
          </Button>
        </Link>
        <Link href="/categories/others">
          <Button type="primary" ghost>
            Others
          </Button>
        </Link>
      </Space>
    </>
  );
};

export default CategoriesPage;

CategoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
