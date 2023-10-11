import React from "react";
import FlashSale from "../src/components/FlashSale";
import PageHead from "../src/components/Helpers/PageHead";

import { fetch as fetch2 } from 'fetch-h2';

export default function flashSalePage(data) {
  const { seoSetting } = data.data;
  return (
    <>
      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      <FlashSale fetchData={data.data} />
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch2(`${process.env.NEXT_PUBLIC_BASE_URL}api/flash-sale`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
