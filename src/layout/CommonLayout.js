import { Layout } from 'antd';
import { useAppContext } from '../contexts/apps';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';

const { Content, Footer } = Layout;

export default function CommonLayout({ children }) {
  const { logo, collapsed, setCollapsed } = useAppContext();

  return (
    <Layout
      style={{
        minHeight: '100vh',
        marginLeft: collapsed ? 80 : 220,
        transition: '.5s',
      }}
    >
      <Sidebar
        collapsed={collapsed}
        logo={logo}
      />
      <Layout className="site-layout">
        <AppHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Content
          style={{
            margin: collapsed ? '1em' : '1em 1em 1em 2em',
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          © All rights reserved for Admin Report 2023
        </Footer>
      </Layout>
    </Layout>
  );
}
