import type { V2_MetaFunction } from '@remix-run/node';
import {  Outlet, useMatches } from '@remix-run/react';
import { Layout } from '~/components/Layout';
import '~/styles/styles.css'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }];
};

export default function Index() {
  const matches = useMatches()
  const nestedRoute = matches[matches.length - 1]
  return (
    <Layout.Root style={{ fontFamily: 'system-ui, sans-serif' }}>
      <Layout.Navbar>
        <div>{nestedRoute.pathname}</div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#E2E8F0" />
        </svg>
      </Layout.Navbar>
      <Outlet />
    </Layout.Root>
  );
}
