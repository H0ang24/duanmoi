import React from "react";


//JSX
export default function id({ sanPhamTraVe }) {
  return sanPhamTraVe.product ? (
    <>
    <div>{sanPhamTraVe.product.title}</div>
    <div>
        <div></div>
        <div></div>
    </div>
    </>
  ) : (
    <div>404</div>
  );
}

//ReactJS => Client => SEO! =>

//NextJS
export const getServerSideProps = async (context) => {
  const { id } = context.query;

  ///API
  const response = await fetch(
    `https://panofrontendstore.myshopify.com/admin/api/2023-07/products/${id}.json`,
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  );
  const responseJson = await response.json();
  return { props: { sanPhamTraVe: responseJson } };
};