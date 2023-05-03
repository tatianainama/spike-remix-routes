import { Link } from "@remix-run/react";
import { Layout } from '~/components/Layout';

export default function Index() {
  const projects = [
    { label: '🎛 PDP Control Plane', handle: 'pcp-control-plane' },
    { label: '✨ Looma', handle: 'looma' },
  ];

  return (
    <Layout.Main>
      <h1>Org Overview</h1>
      <div className="list">
        {projects.map((project) => (
          <div className="card" key={project.handle}>
            <Link to={`../${project.handle}/overview`}>{project.label}</Link>
          </div>
        ))}
      </div>
    </Layout.Main>
  );
} 
