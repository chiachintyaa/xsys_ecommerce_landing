import PageHead from "../src/components/Helpers/PageHead";
import Home from "./../src/components/Home/index";

import { fetch as fetch2 } from 'fetch-h2';

export default function HomePage({ data }) {
  const { seoSetting } = data;
  return (
    <>

      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      <Home homepageData={data} />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const url = process.env.NEXT_PUBLIC_BASE_URL + "api/";
  console.log("url: "+url);

  const res = await fetch2(url);
  const data = await res.json();
  return { props: { data } };
}
