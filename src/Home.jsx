import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import frontend from './images/Frontend.png';
import backend from './images/backend.png';
import tool from './images/tool.jpg';
import { Image } from '@chakra-ui/react';
import Footer from './Footer';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';



function Home() {
const Container = styled.div`
  height: 80vh;
  width: 100%;
  background-image: url('');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export default function Home() {
  return (
    <>
    <Container>
      <Link to="/frontend">
        <Center py={6}>
          <Box
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <Box
              h={'210px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
            >
              <Image src={frontend} layout={'fill'} />
            </Box>
            <Stack>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
              ></Text>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}
              >
                Frontend
              </Heading>
              <Text color={'gray.500'}>
                <strong>Front-end</strong> web development is the development of
                the graphical user interface of a website, through the use of
                HTML, CSS, and JavaScript, so that users can view and interact
                with that website.
              </Text>
            </Stack>
          </Box>
        </Center>
      </Link>
      <Link to="/backend">
        <Center py={6}>
          <Box
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <Box
              h={'210px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
            >
              <Image h={'220px'} w={'full'} src={backend} layout={'fill'} />
            </Box>
            <Stack>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
              ></Text>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}
              >
                Backend
              </Heading>
              <Text color={'gray.500'}>
                <strong>Back-end Developmen</strong>t refers to the server-side
                development. It focuses on databases, scripting, website
                architecture. It contains behind-the-scene activities that occur
                when performing any action on a website.
              </Text>
            </Stack>
          </Box>
        </Center>
      </Link>
      <Link to="/tools">
        <Center py={6}>
          <Box
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <Box
              h={'210px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
            >
              <Image h={'220px'} w={'full'} src={tool} layout={'fill'} />
            </Box>
            <Stack>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
              ></Text>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}
              >
                Tools
              </Heading>
              <Text color={'gray.500'}>
                <strong>Tech-Tools </strong> are programs that allow a developer
                to create, test and debug software. e.g web developement tools
                that supports the rapid implementation of software applications
                upon a programming platform.
              </Text>
            </Stack>
          </Box>
        </Center>
      </Link>
    </Container>
   <Footer/>
   </>
  );
}
