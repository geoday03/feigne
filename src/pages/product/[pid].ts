import { productService } from "lib/features/product-service";
import Product from "lib/pages/product";

export async function getStaticPaths() {
  const pids = productService.getPIDs();

  const paths = pids.map((pid) => ({ params: { pid: pid } }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(props: { params: { pid: string } }) {
  return {
    props: { product: productService.getProduct(props.params.pid) },
    revalidate: 1,
  };
}

export default Product;
