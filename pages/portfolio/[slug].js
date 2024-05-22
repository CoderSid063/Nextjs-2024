import { useRouter } from "next/router";

export default function PortfoloProjectPage(params) {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>This is </h1>
    </div>
  );
}
