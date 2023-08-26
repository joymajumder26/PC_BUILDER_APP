import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";

import Head from "next/head";
const ProfilePage = () => {
  const {data:session} = useSession()
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      {/* <Avatar size={64} icon={<UserOutlined />} /> */}
      <img src={session?.user?.image} alt="" />
      <h1>Name: {session?.user?.name}</h1>
      <h2>Email: {session?.user?.email}</h2>
    </div>
  );
};

export default ProfilePage;
