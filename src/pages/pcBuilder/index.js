import RootLayout from "@/components/Layouts/RootLayout";
import AllPc from "@/components/UI/AllPc";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Image,
  Row,
  Tooltip,
  message,
} from "antd";

import Head from "next/head";
import Link from "next/link";
import React, { useContext, useState } from "react";

import {
  ArrowRightOutlined,
  ProfileOutlined,
  StarFilled,
} from "@ant-design/icons";
import CategoriesPage from "../categories";
import { CartContext } from "@/context/cart";
import CartSidebar from "./cartSilder";

const PcBuilderPage = ({ allPc }) => {
  // console.log(allPc);
  const { Meta } = Card;
  const { cartItems, addToCart } = useContext(CartContext);
  console.log("🚀 ~ file: index.js:21 ~ PcBuilderPage ~ cartItems:", cartItems);
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>/ Home</Breadcrumb.Item>
        <Breadcrumb.Item>PC Builder</Breadcrumb.Item>
      </Breadcrumb>
      <Head>
        <title>PC Builder Page</title>
      </Head>
      <Button onClick={() => setCartVisible(!cartVisible)}>
        Open Cart ({cartItems.length})
      </Button>

      {/* Render the CartSidebar component */}
      <CartSidebar
        visible={cartVisible}
        onClose={() => setCartVisible(false)}
      />

      {/* <AllPc allPc={allPc}></AllPc> */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #Select Items One By One For Build PC
      </h1>
      <Row
        style={{ gap: 10, marginBottom: 10 }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {/*  */}
        <Tooltip title="Select one by one.">
          {cartItems.length > 0 ? (
            cartItems?.map((item, index) => {
              console.log(item); // Moved console.log here
              return (
                item?.category === "cpu" && (
                  <Card
                    key={index}
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={
                      <Image
                        src="https://computerinfobits.com/wp-content/uploads/2022/09/A-Rendering-of-a-CPU.webp"
                        width={239}
                        height={150}
                        responsive
                        alt="cpu image"
                      />
                    }
                    onClick={() => {
                      message.warning(
                        "Already Select the item.Please choose Second item for Build your Pc!"
                      );
                      // alert("Already Select the item.Please choose Second item for Build your Pc!");
                      // You can add more logic here if needed
                    }}
                  >
                    <Meta
                      title="CPU"
                      description={
                        item?.category === "cpu"
                          ? item?.title
                          : "Select CPU Item For Pc.................................."
                      }
                    />
                  </Card>
                )
              );
            })
          ) : (
            <Link href="/categories/cpu">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <Image
                    src="https://computerinfobits.com/wp-content/uploads/2022/09/A-Rendering-of-a-CPU.webp"
                    width={239}
                    height={150}
                    responsive
                    alt="cpu image"
                  />
                }
              >
                <Meta title="CPU" description="Select CPU Item For Pc Build" />
              </Card>
            </Link>
          )}
        </Tooltip>

        {/* <div>
      {cartItems.length > 0 ? (
        cartItems?.map((item, index) => {
          console.log(item); // Moved console.log here
          return (
            item?.category === "cpu" && (
              
                <Card
                    key={index}
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={
                      <Image
                        src="https://computerinfobits.com/wp-content/uploads/2022/09/A-Rendering-of-a-CPU.webp"
                        width={239}
                        height={150}
                        responsive
                        alt="cpu image"
                      />
                    }
                  >
                    <Meta
                      title="CPU"
                      author=" done. Please Select Next category"
                      description={
                        item?.category === "cpu"
                          ? item?.title 
                          : "Select CPU Item For Pc.................................."
                      }
                    />
                  </Card>
            
            )
          );
        })
      ) : (
        <Link href="/categories/cpu" onClick={handleCpuLinkClick}>
         <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <Image
                  src="https://computerinfobits.com/wp-content/uploads/2022/09/A-Rendering-of-a-CPU.webp"
                  width={239}
                  height={150}
                  responsive
                  alt="cpu image"
                />
              }
            >
              <Meta title="CPU" description="Select CPU Item For Pc Build" />
            </Card>
        </Link>
      )}
    </div> */}
        <Tooltip title="If you select Previous Category than click the button. Select one by one.">
          {cartItems.length > 1 ? (
            cartItems?.map(
              (item, index) =>
                item?.category === "motherboard" && (
                  // eslint-disable-next-line react/jsx-key

                  <Card
                    key={index} // Adding a unique key for each card (assuming you have unique keys)
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
                    onClick={() => {
                      message.warning(
                        "Already Select the item.Please choose Second item for Build your Pc!"
                      );
                      // alert("Already Select the item.Please choose Second item for Build your Pc!");
                      // You can add more logic here if needed
                    }}
                  >
                    <Meta
                      title="Motherboard"
                      description={
                        item?.category === "motherboard"
                          ? item?.title
                          : "Select Motherboard Item For Pc"
                      }
                    />
                  </Card>
                )
            )
          ) : (
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
                  title="Motherboard"
                  description="Select Motherboard Item For Pc Build"
                />
              </Card>
            </Link>
          )}
        </Tooltip>
        {/*  */}

        {/*  */}
        <Tooltip title="If you select Previous Category than click the button. Select one by one.">
          {cartItems.length > 2 ? (
            cartItems?.map(
              (item, index) =>
                item?.category === "ram" && (
                  // eslint-disable-next-line react/jsx-key

                  <Card
                    key={index} // Adding a unique key for each card (assuming you have unique keys)
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
                    onClick={() => {
                      message.warning(
                        "Already Select the item.Please choose Second item for Build your Pc!"
                      );
                      // alert("Already Select the item.Please choose Second item for Build your Pc!");
                      // You can add more logic here if needed
                    }}
                  >
                    <Meta
                      title="Ram"
                      description={
                        item?.category === "ram"
                          ? item?.title
                          : "Select Ram Item For Pc"
                      }
                    />
                  </Card>
                )
            )
          ) : (
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
                <Meta title="RAM" description="Select ram Item For Pc Build" />
              </Card>
            </Link>
          )}
        </Tooltip>

        {/*  */}
        <Tooltip title="If you select Previous Category than click the button. Select one by one.">
          {cartItems.length > 3 ? (
            cartItems?.map(
              (item, index) =>
                item?.category === "powerSupply" && (
                  // eslint-disable-next-line react/jsx-key

                  <Card
                    key={index} // Adding a unique key for each card (assuming you have unique keys)
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
                    onClick={() => {
                      message.warning(
                        "Already Select the item.Please choose Second item for Build your Pc!"
                      );
                      // alert("Already Select the item.Please choose Second item for Build your Pc!");
                      // You can add more logic here if needed
                    }}
                  >
                    <Meta
                      title="powerSupply"
                      description={
                        item?.category === "powerSupply"
                          ? item?.title
                          : "Select powerSupply Item For Pc"
                      }
                    />
                  </Card>
                )
            )
          ) : (
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
                  title="powerSupply"
                  description="Select powerSupply Item For Pc Build"
                />
              </Card>
            </Link>
          )}
        </Tooltip>

        {/*  */}
        <Tooltip title="If you select Previous Category than click the button. Select one by one.">
          {cartItems.length > 4 ? (
            cartItems?.map(
              (item, index) =>
                item?.category === "storage" && (
                  // eslint-disable-next-line react/jsx-key

                  <Card
                    key={index} // Adding a unique key for each card (assuming you have unique keys)
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
                    onClick={() => {
                      message.warning(
                        "Already Select the item.Please choose Second item for Build your Pc!"
                      );
                      // alert("Already Select the item.Please choose Second item for Build your Pc!");
                      // You can add more logic here if needed
                    }}
                  >
                    <Meta
                      title="Device Storage"
                      description={
                        item?.category === "storage"
                          ? item?.title
                          : "Select Device Storage Item For Pc"
                      }
                    />
                  </Card>
                )
            )
          ) : (
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
                  title="Device Storage"
                  description="Select Device Storage Item For Pc Build"
                />
              </Card>
            </Link>
          )}
        </Tooltip>

        {/*  */}
        <Tooltip title="If you select Previous Category than click the button. Select one by one.">
          {cartItems.length > 5 ? (
            cartItems?.map(
              (item, index) =>
                item?.category === "monitor" && (
                  // eslint-disable-next-line react/jsx-key

                  <Card
                    key={index} // Adding a unique key for each card (assuming you have unique keys)
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
                    onClick={() => {
                      message.warning(
                        "Already Select the item.Please choose Second item for Build your Pc!"
                      );
                      // alert("Already Select the item.Please choose Second item for Build your Pc!");
                      // You can add more logic here if needed
                    }}
                  >
                    <Meta
                      title="monitor"
                      description={
                        item?.category === "monitor"
                          ? item?.title
                          : "Select monitor Item For Pc"
                      }
                    />
                  </Card>
                )
            )
          ) : (
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
          )}
        </Tooltip>
        {/*  */}
        <Tooltip title="If you select Previous Category than click the button. Select one by one.">
          {cartItems.length > 6 ? (
            cartItems?.map(
              (item, index) =>
                item?.category === "casing" && (
                  // eslint-disable-next-line react/jsx-key

                  <Card
                    key={index} // Adding a unique key for each card (assuming you have unique keys)
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={
                      <Image
                        src="https://www.pcworld.com/wp-content/uploads/2023/04/dsc04685_final-100802535-orig.jpg?quality=50&strip=all&w=1024"
                        width={239}
                        height={150}
                        responsive
                        alt="casing image"
                      />
                    }
                    onClick={() => {
                      message.warning(
                        "Already Select the item.Please choose Second item for Build your Pc!"
                      );
                      // alert("Already Select the item.Please choose Second item for Build your Pc!");
                      // You can add more logic here if needed
                    }}
                  >
                    <Meta
                      title="casing"
                      description={
                        item?.category === "casing"
                          ? item?.title
                          : "Select casing Item For Pc"
                      }
                    />
                  </Card>
                )
            )
          ) : (
            <Link href="/categories/casing">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <Image
                    src="https://www.pcworld.com/wp-content/uploads/2023/04/dsc04685_final-100802535-orig.jpg?quality=50&strip=all&w=1024"
                    width={239}
                    height={150}
                    responsive
                    alt="casing image"
                  />
                }
              >
                <Meta
                  title="Casing"
                  description="Select casing Item For Pc Build"
                />
              </Card>
            </Link>
          )}
        </Tooltip>
      </Row>
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
