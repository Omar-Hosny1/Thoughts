'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import Header from '@/components/common/header';
import MenusSection from '@/components/home/menus-section';
import SearchSection from '@/components/home/search-section';
import BaseLayout from '@/components/layouts/base-layout';

const AddThoughtForm = dynamic(
  () => import('../../components/add-thought/add-thought-form'),
  { ssr: false },
);

function AddThought() {
  return (
    <BaseLayout
      headerContent={<Header />}
      mainSection={
        <>
          <MenusSection /> <AddThoughtForm />
        </>
      }
      sectionEnd={<SearchSection />}
    />
  );
}

export default AddThought;
