import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const monitor = () => {
  return (
    <div>
      <h1>this is monitor page</h1>
    </div>
  );
};

export default monitor;
monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
