import Link from "next/link";

export default function ClientPage() {
  const clients = [
    { id: "max", name: "maximus" },
    { id: "sam", name: "samson" },
    { id: "vicky", name: "vicky" },
    { id: "chicku", name: "virat" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          // <li key={client.id}>
          //   <Link href={`client/${client.id}`}>{client.name}</Link>
          // </li>

          // Alternative Way :-
          <li key={client.id}>
            <Link
              href={{
                pathname: "client/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
