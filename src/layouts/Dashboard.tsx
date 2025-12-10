import '../App.css';
import type { FC, ReactNode } from 'react';
import DashboardGrid from '../components/Grid';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Breadcrumbs, { type BreadcrumbItem } from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Region from '../components/Region';

interface DashboardProps {
  children?: ReactNode;
  breadcrumbs: BreadcrumbItem[];
}

const Dashboard: FC<DashboardProps> = ({children, breadcrumbs}) => {
  return (
    <DashboardGrid>
      <Header>Header</Header>
      <Sidebar>Side Navigation</Sidebar>
      <Breadcrumbs items={breadcrumbs} />
      <Main>
        Main Content
        {children}
        <Region label="My Custom Region">My Custom Region Content</Region>
      </Main>
      <Footer>Footer</Footer>
    </DashboardGrid>
  );
}

export default Dashboard;
