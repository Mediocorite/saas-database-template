import { getServerAuthSession } from "@/server/auth";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { redirect } from "next/navigation";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const session = await getServerAuthSession();
  const data = await getData();
  if (!session) redirect("/");
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
