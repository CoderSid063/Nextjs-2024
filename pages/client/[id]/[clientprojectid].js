import { useRouter } from "next/router";

export default function clientprojectId(params) {
  const router = useRouter();
  console.log(router.query);
  const { id, clientprojectid } = router.query;
  return (
    <div>
      <h1>
        The Project page for {id} a Specific Project called {clientprojectid}
      </h1>
    </div>
  );
}
