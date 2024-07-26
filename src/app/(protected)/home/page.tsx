'use client';

import React from 'react';

import Header from '@/components/common/header';
import MenusSection from '@/components/common/menus-section';
import SearchSection from '@/components/home/search-section';
import ThoughtsSection from '@/components/home/thoughts-section';
import BaseLayout from '@/components/layouts/base-layout';

function AddThought() {
  return (
    <BaseLayout
      headerContent={<Header />}
      mainSection={<ThoughtsSection />}
      sectionStart={<MenusSection />}
      sectionEnd={<SearchSection />}
    />
  );
}

export default AddThought;
