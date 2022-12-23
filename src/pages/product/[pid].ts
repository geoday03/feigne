import { productService } from "lib/features/product-service";
import Product from "lib/pages/product";

export async function getStaticPaths() {
  const pids = productService.getPIDs();

  const paths = pids.map((pid) => ({ params: { pid: pid } }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(params: { pid: string }) {
  return {
    props: {},
    revalidate: 1,
  };
}

export default Product;
