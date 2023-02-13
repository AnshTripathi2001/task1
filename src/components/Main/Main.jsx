import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import pharmaImg from '../../img/about/pharma.png';
const Main = () => {
  return (
    <Flex
      as={'div'}
      width={'100%'}
      height="auto"
      bgGradient={
        'linear(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)'
      }
      borderBottom="solid 0.1px gray"
      textAlign={{ md: 'left', base: 'center' }}
      my={10}
      flexWrap={'wrap'}
      justifyContent={'space-evenly'}
      alignItems={'center'}
    >
      <Image
        display={{ md: 'flex', base: 'none' }}
        width={300}
        height="inherit"
        src={pharmaImg}
      ></Image>

      <Box w={400}>
        <Heading as={'h1'} p={2} color={'#0E2368'}>
          About Us
        </Heading>
        <Text color={'#444957'} fontSize="1rem" lineHeight="35px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </Text>
        <Button
          my={3}
          borderRadius="21px"
          fontFamily="'Source Sans Pro', sans-serif "
          w="132px"
          h="42px"
          bgColor={'#E23744'}
          colorScheme="#fff"
        >
          Read More
        </Button>
      </Box>
    </Flex>
  );
};

export default Main;
