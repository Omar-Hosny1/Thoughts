'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import Header from '@/components/common/header';
import SearchSection from '@/components/home/search-section';
import BaseLayout from '@/components/layouts/base-layout';

const AddThoughtForm = dynamic(
  () => import('../../components/add-thought/add-thought-form'),
  { ssr: false },
);
const MenusSection = dynamic(
  () => import('../../components/common/menus-section'),
  { ssr: false },
);

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
