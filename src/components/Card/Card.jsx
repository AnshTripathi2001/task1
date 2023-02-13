import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { CardData } from './cardData';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import { useState } from 'react';

const CardUI = () => {
  const [page, setPage] = useState(1);
  const filterBlog = CardData.data.filter(data => data.pageNumber === page);

  return (
    <>

    <Box  h="65px" >
    <Heading  left={8}  position={{md:"absolute"}} color="#0E2368" fontFamily="'Source Sans Pro', sans-serif">
        Latest Articles
      </Heading>
    </Box>
    
      
      <Flex
        w={'100%'}
        height="auto"
        my={3}
        justifyContent="space-evenly"
        flexWrap="wrap"
        gap="20px"
      >
        {filterBlog.map((data, index) => {
          return (
            <Card
              key={index}
              w="350px"
              h="535px"
              borderRadius="20.937px"
              textAlign="left"
            >
              <CardHeader>
                <Image objectFit={'cover'} src={data.image}></Image>
              </CardHeader>
              <CardBody>
                <Heading
                  as={'h1'}
                  sx={{
                    display: '-webkit-box',
                    '-webkit-line-clamp': '1',
                    '-webkit-box-orient': 'vertical',
                    overflow: 'hidden',

                    color: '#0E2368',
                  }}
                  fontSize="1.2rem"
                  lineHeight="20px"
                  mb={2}
                  fontFamily="'Poppins', sans-serif"
                >
                  {data.title}
                </Heading>
                <Text
                  as={'p'}
                  fontSize="1rem"
                  fontFamily="'Open Sans', sans-serif"
                  sx={{
                    display: '-webkit-box',
                    '-webkit-line-clamp': '3',
                    '-webkit-box-orient': 'vertical',
                    overflow: 'hidden',
                  }}
                  lineHeight="30px"
                >
                  {data.description}
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  mb={10}
                  borderRadius={35}
                  colorScheme="#424961"
                  variant="outline"
                  fontFamily="'Source Sans Pro', sans-serif"
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </Flex>

      <Box w="100%" h="100px" display="flex" justifyContent="center" gap="20px">
        {page === 1 ? (
          <Button isDisabled fontSize="2rem" onClick={() => setPage(page - 1)}>
            <BiChevronLeft />
          </Button>
        ) : (
          <Button fontSize="2rem" onClick={() => setPage(page - 1)}>
            <BiChevronLeft />
          </Button>
        )}

        <Text fontFamily="'Source Sans Pro', sans-serif">
          {page}/{CardData.data[5].pageNumber}
        </Text>
        {page === 2 ? (
          <Button fontSize="2rem" isDisabled onClick={() => setPage(page + 1)}>
            <BiChevronRight />{' '}
          </Button>
        ) : (
          <Button fontSize="2rem" onClick={() => setPage(page + 1)}>
            <BiChevronRight />{' '}
          </Button>
        )}
      </Box>
     
    </>
  );
};

export default CardUI;
