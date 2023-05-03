import { Link, Outlet } from '@remix-run/react';
import { Layout } from '~/components/Layout';

const projectLinks = [
  { label: 'Overview', to: 'overview' },
  { label: 'Accelerate', to: 'accelerate' },
  { label: 'Settings', to: 'settings' },
];

export default function Index() {
  return (
    <>
      <Layout.Sidebar>
        {projectLinks.map((link) => (
          <Link key={link.to}  to={link.to}>{link.label}</Link>
        ))}
      </Layout.Sidebar>
        
      <Outlet />
    </>
  );
}
