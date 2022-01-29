import { json } from "remix";

export async function loader({ request }: any) {
  return json({ data: "pong" });
}
