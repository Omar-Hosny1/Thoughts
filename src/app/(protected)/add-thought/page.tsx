'use client';

import React from 'react';

import AddThoughtForm from '@/components/add-thought/add-thought-form';
import Header from '@/components/common/header';
import MenusSection from '@/components/common/menus-section';
import SearchSection from '@/components/home/search-section';
import BaseLayout from '@/components/layouts/base-layout';
// impor
// const AddThoughtForm = dynamic(
//   () => import('@/components/add-thought/add-thought-form'),
//   { ssr: false },
// );

function AddThought() {
  return (
    <BaseLayout
      headerContent={<Header />}
      mainSection={<AddThoughtForm />}
      sectionStart={<MenusSection />}
      sectionEnd={<SearchSection />}
    />
  );
}

export default AddThought;
