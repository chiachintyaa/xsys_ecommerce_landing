import React from "react";
import Blogs from "../src/components/Blogs";

import { fetch as fetch2 } from 'fetch-h2';

function categoryByBlogs({ data }) {
    return (
        <>
            <Blogs blogs={data.blogs.data} />
        </>
    );
}
export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch2(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/blog?category=${context.query.category}`
    );
    const data = await res.json();
    return { props: { data } };
}
export default categoryByBlogs;
