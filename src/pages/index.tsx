import Header from '@/components/common/header';
import MenusSection from '@/components/home/menus-section';
import SearchSection from '@/components/home/search-section';
import ThoughtsSection from '@/components/home/thoughts-section';
import BaseLayout from '@/components/layouts/base-layout';

const Index = () => {
  return (
    <BaseLayout
      headerContent={<Header />}
      mainSection={
        <>
          <MenusSection /> <ThoughtsSection />
        </>
      }
      sectionEnd={<SearchSection />}
    />
  );
};

export default Index;
