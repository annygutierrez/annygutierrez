import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import ReactGA from 'react-ga';

const MenuItems = [
  {
      name: 'About me',
      code: 0
  },
  {
      name: 'Portfolio',
      code: 1
  },
  {
      name: 'Projects',
      code: 2
  },
  {
      name: 'Certifications',
      code: 3
  },
  {
      name: 'Experience',
      code: 4
  },
  {
    name: 'Education',
    code: 5
}
];

const Home = () => {
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

    const SelectItem = (id) => {
       setActiveId(id);
    }

  return (
    <div style={{ backgroundColor: 'white', width: '100vw', height: '100vh' }}>
      <Header onNavigate={SelectItem} activePage={activeId} menuItems={MenuItems} />
      <Body onNavigate={SelectItem} activePage={activeId} menuItems={MenuItems} />
      <Footer />
    </div>
  )
}

export default Home;