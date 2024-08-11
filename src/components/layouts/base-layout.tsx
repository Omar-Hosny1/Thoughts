import 'allotment/dist/style.css';

import type { GridProps } from '@chakra-ui/react';
import { Box, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { Allotment } from 'allotment';
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
  const showAllotment = useBreakpointValue({ base: false, md: true });

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

      <GridItem colSpan={{ base: 8, md: 8, lg: 6 }} rowSpan={10} display="flex">
        {showAllotment ? (
          <Allotment>
            <Allotment.Pane minSize={100} maxSize={300}>
              {sectionStart}
            </Allotment.Pane>
            <Allotment.Pane>
              <Box h="100%" overflow="scroll" w="100%">
                {mainSection}
              </Box>
            </Allotment.Pane>
          </Allotment>
        ) : (
          <Box h="100%" overflow="scroll" w="100%">
            {mainSection}
          </Box>
        )}
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
