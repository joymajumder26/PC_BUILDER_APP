import { useForm } from "react-hook-form";
import styles from "@/styles/Create.module.css";
import RootLayout from "@/components/Layouts/RootLayout";
import { Breadcrumb } from "antd";

import { useRouter } from "next/router";

const CreatePc = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    fetch("/api/pc", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("News Successfully Created");
          router.push("/");
        }
      });
  };
  return (
    <div>
        <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
      <Breadcrumb.Item>/ Home</Breadcrumb.Item>
      <Breadcrumb.Item>CreatePc</Breadcrumb.Item>
      {/* <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item> */}
    </Breadcrumb>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        name="form_item_path"
        layout="vertical"
        style={{
          width: "50%",
          margin: "50px auto",
        }}
      >
        <input
          {...register("id")}
          placeholder="Id"
          style={{ marginBottom: "10px" }}
        />
        <input {...register("title")} placeholder="Title" />

        <input
          {...register("description")}
          placeholder="Description"
          style={{ margin: "10px 0px" }}
        />

        <input {...register("price")} placeholder="Price" style={{ marginBottom: "10px" }}/>
        
        <input {...register("category")} placeholder="Category" style={{ marginBottom: "10px" }} />
        <input {...register("status")} placeholder="Status" style={{ marginBottom: "10px" }} />
        <input {...register("keyFeature")} placeholder="keyFeature" style={{ marginBottom: "10px" }} />
        <input
          {...register("rating")}
          placeholder="Rating around 5"
          type="number"
          style={{ marginBottom: "10px" }}
        />
        <input {...register("image_url")} placeholder="Image URL" style={{ marginBottom: "10px" }}/>
        <input
          {...register("individualRating")}
          placeholder="Individual Rating around 5"
          type="number"
         style={{ marginBottom: "10px" }}
        />
        <input
          {...register("averageRating")}
          placeholder="Average Rating around 5"
          type="number"
          style={{ marginBottom: "10px" }}
        />
         <input {...register("reviews")} placeholder="Reviews" />
        <input
          type="submit"
          value="Create Pc"
          style={{ margin: "10px 0px", width: "100%" }}
        />
       
      </form>
    </div>
  );
};

export default CreatePc;

CreatePc.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
