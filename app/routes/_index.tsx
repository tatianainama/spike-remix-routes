import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Login to start</h1>
      <Link to="/prisma">Login</Link>
    </div>
  );
}
