import React from "react";
import isMultivendor from "../../Middleware/isMultivendor";
import AllProductPage from "../../src/components/AllProductPage/index";
import PageHead from "../../src/components/Helpers/PageHead";

import { fetch as fetch2 } from 'fetch-h2';

function sellersProductsPage(data) {
  const sellerInfo = {
    seller: data.data && data.data.seller && data.data.seller,
    review:
      data.data &&
      data.data.sellerTotalReview &&
      parseInt(data.data.sellerTotalReview),
  };
  return (
    <>
      <PageHead title="shopo | products" />
      <AllProductPage
        response={data}
        sellerInfo={sellerInfo ? sellerInfo : null}
      />
    </>
  );
}
export const getServerSideProps = async (context) => {
  const res = await fetch2(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/sellers/${context.query.seller}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default isMultivendor(sellersProductsPage);
