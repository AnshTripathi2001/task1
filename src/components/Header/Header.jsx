import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../Header/delivery.png';
import vector from '../../img/Vector 1.png';
import rect from '../../img/Rect.png';
export const Header = () => {
  return (
    <>
      <Flex
        width={'100%'}
        height={'auto'}
        flexDirection={{ lg: 'row', base: 'column-reverse' }}
      >
        <Box
          width={400}
          height={580}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'space-around'}
          gap={20}
        >
          <Image
            position={'absolute'}
            top={5}
            left={20}
            display={{ lg: 'block', base: 'none' }}
            src={logo}
          ></Image>

          <Spacer />
          <Box
            textAlign={{ md: 'left', base: 'center' }}
            w="450px"
            h="370px"
            ml={{ md: '200px', base: 'auto' }}
          >
            <Box width="250px" ml={{ md: '0', base: '100px' }}>
              <Heading
                fontFamily="'Source Sans Pro', sans-serif"
                fontSize="2.5rem"
                mb={10}
                color={'#0E2368'}
              >
                Discover the
                <Text as="span" mx={3} color="#E23744">
                  Best
                </Text>
                Food and Drinks
              </Heading>
            </Box>
            <Box>
              <Text mb={10} px={2}>
                Naturally made Healthcare Products for the better care & support
                of your body.
              </Text>
            </Box>

            <Box>
              <Button
                borderRadius={34}
                fontFamily="'Open Sans', sans-serif"
                p={3}
                bgColor="#E23744"
                colorScheme="#fff"
                width={40}
                height={50}
              >
                Expolore
              </Button>
            </Box>
          </Box>
        </Box>
        <Spacer />
        <Box
          width={{ base: '100%', lg: '735px', md: '100%' }}
          height={{ lg: '664px', md: '680px', base: '454px' }}
          borderBottomRadius="103px"
          backgroundImage={`url(${rect})`}
        >
          <Box right="0" position={'absolute'}>
            <Image
              w={{ lg: '755px', md: '780px', base: '650px' }}
              h={{ lg: '685px', md: '700px', sm: '480px' }}
              src={vector}
            ></Image>
          </Box>
          <Button
            colorScheme="#FFFFFF"
            mx={3}
            my={3}
            border="1px"
            right={0}
            borderRadius={'34px'}
            fontWeight={600}
            fontFamily="'Source Sans Pro', sans-serif"
            position={'absolute'}
          >
            Get In Touch
          </Button>
        </Box>
      </Flex>
    </>
  );
};
