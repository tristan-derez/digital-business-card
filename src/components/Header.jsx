import React from "react";
import { Flex, Image, Heading, Button, Link } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { ImLinkedin } from "react-icons/im";

export default function Header() {
  return (
    <Flex direction='column' alignItems='center'>
      <Image
        src='https://i.ibb.co/9nm1rw7/download20210300011044.png'
        width='317px'
      ></Image>
      <Heading
        as='h1'
        fontFamily='Inter'
        fontSize='25px'
        fontWeight='bold'
        pt='21px'
      >
        Tristan Derez
      </Heading>
      <Heading
        as='h2'
        fontFamily='Inter'
        fontSize='13px'
        color='#F3BF99'
        pt='6px'
        fontWeight='thin'
      >
        Frontend Developer
      </Heading>
      <Link
        href='https://portfolio-dreyzu.vercel.app/'
        isExternal
        color='#F5F5F5'
        fontSize='10px'
        pt='5px'
      >
        portfolio.dreyzu
      </Link>
      {/* buttons section */}
      <Flex justifyContent='space-between' mt='15px' w='317px'>
        <Link href='mailto:tristan.derez@gmail.com'>
          <Button
            leftIcon={<EmailIcon />}
            bg='white'
            color='#374151'
            w='115px'
            _hover='none'
            ml='35px'
            maxH='34px'
          >
            Email
          </Button>
        </Link>
        <Link href='https://www.linkedin.com/in/tristan-derez/' isExternal>
          <Button
            leftIcon={<ImLinkedin />}
            bg='#5093E2'
            color='#FFFFFF'
            w='115px'
            _hover='none'
            mr='35px'
            maxH='34px'
          >
            LinkedIn
          </Button>
        </Link>
      </Flex>
      {/* end of buttons section */}
    </Flex>
  );
}
