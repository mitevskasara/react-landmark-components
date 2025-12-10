import './App.css';
import DashboardGrid from './components/Grid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Breadcrumbs from './components/Breadcrumb';
import Footer from './components/Footer';
import Region from './components/Region';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Reports', href: '/dashboard/reports', isCurrent: true },
];

function App() {
  return (
    <DashboardGrid>
      <Header>Header</Header>
      <Sidebar>Side Navigation</Sidebar>
      <Breadcrumbs items={breadcrumbItems} />
      <Main>
        Main Content
        <Region label="My Custom Region">My Custom Region Content</Region>
      </Main>
      <Footer>Footer</Footer>
    </DashboardGrid>
  );
}

export default App;
