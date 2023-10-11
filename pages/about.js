import About from "../src/components/About";
import PageHead from "../src/components/Helpers/PageHead";

import { fetch as fetch2 } from 'fetch-h2';

export default function aboutPage({ data }) {
  const { seoSetting } = data;
  return (
    <>
      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      <About aboutData={data} />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch2(`${process.env.NEXT_PUBLIC_BASE_URL}api/about-us`);
  const data = await res.json();
  return { props: { data } };
}
