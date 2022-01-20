import {
  Badge,
  Heading,
  Stack,
  Text,
  Grid,
  Avatar,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import './link.css'

export default function Card({ data }) {
  console.log(data[0].name);

  return (
    <div className="=links">
      <Grid
        templateColumns="repeat(auto-fit, minmax(400px, 2fr))"
        gap={10}
        m={10}
      >
        {data.map(data => (
            <Stack
              key={data.id}
              borderWidth="1px"
              borderRadius="lg"
              w={{ sm: '100%', md: '540px' }}
              height={{ sm: '476px', md: '20rem' }}
              direction={{ base: 'column', md: 'row' }}
              boxShadow={'2xl'}
              padding={4}
            >
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Stack
                  align={'center'}
                  justify={'center'}
                  direction={'row'}
                  mt={6}
                >
                  <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {data.name}
                  </Heading>
                  <Avatar
                    src={data.logo_url}
                  />
                </Stack>
                <Text className="cardlinke" textAlign={'center'} px={3} fontSize={'s'}>
                  {data.description}
                </Text>
                <Stack
                  align={'center'}
                  justify={'center'}
                  direction={'row'}
                  mt={6}
                >
                  <Badge px={2} py={1} fontWeight={'400'}>
                    {data.difficulty}
                  </Badge>
                  <Badge px={2} py={1} fontWeight={'400'}>
                    {data.road}
                  </Badge>
                  <Badge px={2} py={1} fontWeight={'400'}>
                    {data.type}
                  </Badge>
                </Stack>
              </Stack>
            </Stack>
        ))}
      </Grid>
    </div>
  );
}
