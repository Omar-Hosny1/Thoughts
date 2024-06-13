import React from 'react';

import AddThoughtForm from '@/components/add-thought/add-thought-form';
import Header from '@/components/common/header';
import MenusSection from '@/components/home/menus-section';
import SearchSection from '@/components/home/search-section';
import BaseLayout from '@/components/layouts/base-layout';

function AddThought() {
  return (
    <BaseLayout
      headerContent={<Header />}
      mainSection={
        <>
          <MenusSection />
          <AddThoughtForm />
        </>
      }
      sectionEnd={<SearchSection />}
    />
  );
}

export default AddThought;
