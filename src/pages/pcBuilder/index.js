import RootLayout from "@/components/Layouts/RootLayout";
import AllPc from "@/components/UI/AllPc";
import { Breadcrumb, Button, Card, Col, Image, Row } from "antd";

import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";

import {
  ArrowRightOutlined,
  ProfileOutlined,
  StarFilled,
} from "@ant-design/icons";
import CategoriesPage from "../categories";
import { CartContext } from "@/context/cart";


const PcBuilderPage = ({ allPc }) => {
  // console.log(allPc);
  const { Meta } = Card;
  const { cartItems, addToCart } = useContext(CartContext);
  console.log("🚀 ~ file: index.js:21 ~ PcBuilderPage ~ cartItems:", cartItems);

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
        style={{ gap: 10, marginBottom: 10 }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {/*  */}

        {cartItems.length > 0 ? (
          cartItems?.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
           (item?.item?.category === "cpu" ) &&  <Link
           href={
             item?.item?.category === "cpu"
               ? "/categories/cpu"
               : "/categories/cpu"
           }
         >
           <Card
             key={index} // Adding a unique key for each card (assuming you have unique keys)
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
               description={
                 item?.item?.category === "cpu"
                   ? item?.item?.title
                   : "Select CPU Item For Pc"
               }
             />
           </Card>
         </Link>
          ))
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
        {cartItems.length > 0 ? (
          cartItems?.map((item, index) => (
            (item?.item?.category === "motherboard" ) && 
            // eslint-disable-next-line react/jsx-key
            <Link
              href={
                item?.item?.category === "motherboard"
                  ? "/categories/motherboard"
                  : "/categories/motherboard"
              }
            >
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
              >
                <Meta
                  title="Motherboard"
                  description={
                    item?.item?.category === "motherboard"
                      ? item?.item?.title
                      : "Select Motherboard Item For Pc"
                  }
                />
              </Card>
            </Link>
          ))
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
              <Meta title="Motherboard" description="Select Motherboard Item For Pc Build" />
            </Card>
          </Link>
        )}
        {/*  */}

        {/*  */}
        {cartItems.length > 0 ? (
          cartItems?.map((item, index) => (
            (item?.item?.category === "ram" ) && 
            // eslint-disable-next-line react/jsx-key
            <Link
              href={
                item?.item?.category === "ram"
                  ? "/categories/ram"
                  : "/categories/ram"
              }
            >
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
              >
                <Meta title="Ram" description={
                    item?.item?.category === "ram"
                      ? item?.item?.title
                      : "Select Ram Item For Pc"
                  } />
              </Card>
            </Link>
          ))
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

        {/*  */}
        {cartItems.length > 0 ? (
          cartItems?.map((item, index) => (
            (item?.item?.category === "powerSupply" ) && 
            // eslint-disable-next-line react/jsx-key
            <Link
              href={
                item?.item?.category === "powerSupply"
                  ? "/categories/powerSupply"
                  : "/categories/powerSupply"
              }
            >
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
              >
                <Meta title="powerSupply" description={
                    item?.item?.category === "powerSupply"
                      ? item?.item?.title
                      : "Select powerSupply Item For Pc"
                  } />
              </Card>
            </Link>
          ))
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
              <Meta title="powerSupply" description="Select powerSupply Item For Pc Build" />
            </Card>
          </Link>
        )}
     
        {/*  */}
        {cartItems.length > 0 ? (
          cartItems?.map((item, index) => (
            (item?.item?.category === "storage" ) && 
            // eslint-disable-next-line react/jsx-key
            <Link
              href={
                item?.item?.category === "storage"
                  ? "/categories/storage"
                  : "/categories/storage"
              }
            >
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
              >
                <Meta title="Device Storage" description={
                    item?.item?.category === "storage"
                      ? item?.item?.title
                      : "Select Device Storage Item For Pc"
                  } />
              </Card>
            </Link>
          ))
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
              <Meta title="Device Storage" description="Select Device Storage Item For Pc Build" />
            </Card>
          </Link>
        )}
     
     
        {/*  */}
        {cartItems.length > 0 ? (
          cartItems?.map((item, index) => (
            (item?.item?.category === "monitor" ) && 
            // eslint-disable-next-line react/jsx-key
            <Link
              href={
                item?.item?.category === "monitor"
                  ? "/categories/monitor"
                  : "/categories/monitor"
              }
            >
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
              >
                <Meta title="monitor" description={
                    item?.item?.category === "monitor"
                      ? item?.item?.title
                      : "Select monitor Item For Pc"
                  } />
              </Card>
            </Link>
          ))
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
              <Meta title="Monitor" description="Select Monitor Item For Pc Build" />
            </Card>
          </Link>
        )}
        {/*  */}
        {cartItems.length > 0 ? (
          cartItems?.map((item, index) => (
            (item?.item?.category === "casing" ) && 
            // eslint-disable-next-line react/jsx-key
            <Link
              href={
                item?.item?.category === "casing"
                  ? "/categories/casing"
                  : "/categories/casing"
              }
            >
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
              >
                <Meta title="casing" description={
                    item?.item?.category === "casing"
                      ? item?.item?.title
                      : "Select casing Item For Pc"
                  } />
              </Card>
            </Link>
          ))
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
              <Meta title="Casing" description="Select casing Item For Pc Build" />
            </Card>
          </Link>
        )}
     



      
       
       
     
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
