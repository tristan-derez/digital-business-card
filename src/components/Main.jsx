import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Main() {
  return (
    <Flex direction='column' justifyContent='center' paddingX='36px' pt='33px'>
      <Heading as='h3' fontFamily='Inter' fontWeight='thin' fontSize='16px'>
        About
      </Heading>
      <Text
        fontSize='10.24px'
        textAlign='left'
        lineHeight='15.36px'
        mt='5px'
        color='#DCDCDC'
      >
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </Text>
      <Heading
        as='h3'
        fontFamily='Inter'
        fontWeight='thin'
        fontSize='16px'
        mt='10px'
      >
        Interests
      </Heading>
      <Text
        fontSize='10.24px'
        textAlign='left'
        lineHeight='15.36px'
        mt='5px'
        color='#DCDCDC'
      >
        Food, travel, movies, music, coding, comics, manga, anime, tv shows,
        streaming, video games
      </Text>
    </Flex>
  );
}
