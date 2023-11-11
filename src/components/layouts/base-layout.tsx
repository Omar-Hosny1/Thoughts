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
      h="calc(100vh - 20px)"
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
        colSpan={{ base: 7, md: 4 }}
        rowSpan={10}
        borderEndColor="secondary"
        borderStartColor="secondary"
        borderEndWidth="1px"
        borderStartWidth="1px"
      >
        {sectionCenter}
      </GridItem>
      <GridItem
        rowSpan={10}
        colSpan={2}
        display={{ base: 'none', md: 'initial' }}
      >
        {sectionEnd}
      </GridItem>
    </Grid>
  );
}

export default BaseLayout;
