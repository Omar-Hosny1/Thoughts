import Header from '@/components/common/header';
import MenusSection from '@/components/home/menus-section';
import SearchSection from '@/components/home/search-section';
import ThoughtsSection from '@/components/home/thoughts-section';
import BaseLayout from '@/components/layouts/base-layout';

const Index = () => {
  return (
    <>
      <BaseLayout
        headerContent={<Header />}
        sectionCenter={<ThoughtsSection />}
        sectionEnd={<SearchSection />}
        sectionStart={<MenusSection />}
      />
      {/* <Flex justifyContent="space-between" alignItems="center">
        <Button
          iconPosition="left"
          roundedFlatFrom="right"
          icon="/edit.svg"
          margin="10px"
          styleVariants="outline"
        >
          Write Thought
        </Button>
        <Button
          iconPosition="left"
          roundedFlatFrom="right"
          icon="/edit.svg"
          margin="10px"
          styleVariants="danger"
        >
          Write Thought
        </Button>
        <Button
          iconPosition="left"
          roundedFlatFrom="right"
          icon="/edit.svg"
          margin="10px"
          styleVariants="success"
        >
          Write Thought
        </Button>
        <Button
          iconPosition="left"
          roundedFlatFrom="right"
          icon="/edit.png"
          margin="10px"
          styleVariants="base"
        >
          Write Thought
        </Button>
        <Button
          iconPosition="left"
          roundedFlatFrom="right"
          icon="/edit.png"
          margin="10px"
          withIcon={false}
          styleVariants="base"
          px="70px"
        >
          User
        </Button>
        <Input label="Name" roundedFlatFrom="right" />
        <Input label="Password" roundedFlatFrom="right" />
      </Flex>
      <Box w="500px">
        <Input
          label="Phone"
          roundedFlatFrom="left"
          withIcon
          w="500px"
          iconSrc="/edit.svg"
          iconPositon="left"
        />
      </Box> */}
    </>
  );
};

export default Index;
