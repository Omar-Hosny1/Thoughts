import type { GridProps } from '@chakra-ui/react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

interface Props extends GridProps {
  headerContent: JSX.Element;
  sectionStart: JSX.Element;
  mainSection: JSX.Element;
  sectionEnd: JSX.Element;
}

function BaseLayout({
  headerContent,
  sectionEnd,
  sectionStart,
  mainSection,
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
      {/* <GridItem
        rowSpan={10}
        colSpan={2}
        display={{ base: 'none', md: 'initial' }}
      >
        {sectionStart}
      </GridItem> */}
      <GridItem colSpan={{ base: 8, md: 8, lg: 6 }} rowSpan={10} display="flex">
        {sectionStart}
        <Box h="100%" overflow="scroll" w="100%">
          {mainSection}
        </Box>
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
