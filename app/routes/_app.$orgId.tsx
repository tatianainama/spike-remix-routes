import { Link, Outlet } from '@remix-run/react';
import { Layout } from '~/components/Layout';

const orgLinks = [
  {label: 'Overview', to: 'overview'},
  {label: 'Usage', to: 'usage'},
  {label: 'Billing', to: 'billing'},
  {label: 'Team members', to: 'team-members'},
  {label: 'Settings', to: 'settings'},
]

export default function Index() {
  return (
    <>
      <Layout.Sidebar>
        {orgLinks.map(link => (<Link key={link.to} to={link.to}>{link.label}</Link>))}
      </Layout.Sidebar>
      
      <Outlet />
    </>
  );
}
