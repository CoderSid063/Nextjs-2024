import fs from "fs/promises";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import path from "path";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

//getStaticProps() in Next.js fetches data at build time for static generation.
export async function getStaticProps() {
  console.log("regenerating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    //"revalidate" is use to regenerate the page in every give second in build server
    revalidate: 10,
  };
}

export default HomePage;
