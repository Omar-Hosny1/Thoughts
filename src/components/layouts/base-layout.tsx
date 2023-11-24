import type { GridProps } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

interface Props extends GridProps {
  headerContent: JSX.Element;
  sectionStart: JSX.Element;
  sectionEnd: JSX.Element;
  sectionCenter: JSX.Element;
}

function BaseLayout({
  headerContent,
  sectionEnd,
  sectionStart,
  sectionCenter,
  ...props
}: Props) {
  return (
    <Grid
      h={{ base: 'calc(100vh - 20px)', md: 'calc(100vh - 40px)' }}
      templateColumns="repeat(8, 1fr)"
      templateRows="repeat(10, 1fr)"
      gap={2}
      {...props}
    >
      <GridItem rowSpan={1} colSpan={8}>
        {headerContent}
      </GridItem>
      <GridItem
        rowSpan={10}
        colSpan={2}
        display={{ base: 'none', md: 'initial' }}
      >
        {sectionStart}
      </GridItem>
      <GridItem
        colSpan={{ base: 8, md: 6, lg: 4 }}
        rowSpan={10}
        borderEndColor={{ md: 'secondary' }}
        borderStartColor={{ md: 'secondary' }}
        borderEndWidth={{ md: '1px' }}
        borderStartWidth={{ md: '1px' }}
      >
        {sectionCenter}
      </GridItem>
      <GridItem
        rowSpan={10}
        colSpan={2}
        display={{ base: 'none', lg: 'initial' }}
      >
        {sectionEnd}
      </GridItem>
    </Grid>
  );
}

export default BaseLayout;
