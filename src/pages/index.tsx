import dynamic from 'next/dynamic';

import Header from '@/components/common/header';
import SearchSection from '@/components/home/search-section';
import ThoughtsSection from '@/components/home/thoughts-section';
import BaseLayout from '@/components/layouts/base-layout';

const MenusSection = dynamic(
  () => import('../components/common/menus-section'),
  { ssr: false },
);

const Index = () => {
  return (
    <BaseLayout
      headerContent={<Header />}
      mainSection={<ThoughtsSection />}
      sectionStart={<MenusSection />}
      sectionEnd={<SearchSection />}
    />
  );
};

export default Index;
