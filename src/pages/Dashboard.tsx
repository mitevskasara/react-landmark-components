import Dashboard from '../layouts/Dashboard';

const breadcrumbs = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Reports', href: '/dashboard/reports', isCurrent: true },
];

const DashboardPage = () => {
  return (
    <Dashboard breadcrumbs={breadcrumbs}>
      <p>Welcome to your accessible dashboard!</p>
    </Dashboard>
  );
}

export default DashboardPage;
