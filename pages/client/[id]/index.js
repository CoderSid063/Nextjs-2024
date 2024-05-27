import { useRouter } from "next/router";

function ClientProjectPage(params) {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  return (
    <div>
      <h1>The Project of a Given Client called {id}</h1>
    </div>
  );
}

export default ClientProjectPage;
