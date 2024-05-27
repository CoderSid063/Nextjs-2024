import { useRouter } from "next/router";

function ClientProjectPage(params) {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;

  function ClientProjectPage() {
    // router.push("/client/max/projectA");

    router.push({
      pathname: `/client/${id}/[clientprojectid]`,
      query: { id: { id }, clientprojectid: "projectA" },
    });
  }

  return (
    <div>
      <h1>The Project of a Given Client called {id}</h1>
      <button onClick={ClientProjectPage}>Project A</button>
    </div>
  );
}

export default ClientProjectPage;
