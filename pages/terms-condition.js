import React from "react";
import PageHead from "../src/components/Helpers/PageHead";
import TermsCondition from "../src/components/TermsCondition/index";

import { fetch as fetch2 } from 'fetch-h2';

export default function termsConditionPage({ data }) {
  return (
    <>
      <PageHead title="Term and Conditions" />
      <TermsCondition datas={data} />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch2(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/terms-and-conditions`
  );
  const data = await res.json();
  return { props: { data } };
}
