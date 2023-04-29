import React from 'react';
import {
  Box,
  Flex,
  Link,
  Text,
  Button,
  Image
} from '@chakra-ui/react';

const LinkItems = [
  { name: 'Home', icon: "1.png" },
  { name: 'Section 1', icon: "2.png" },
  { name: 'Section 2', icon: "3.png" },
  { name: 'Section 3', icon: "4.png" },
  { name: 'Section', icon: "5.png" },
  { name: 'Section 5', icon: "6.png" },
  { name: 'Section 6', icon: "7.png" },
  { name: 'Section 7', icon: "8.png" },
  { name: 'Section 8', icon: "9.png" },
  { name: 'Documentation', icon: "10.png" },
];

export default function SimpleSidebar({ children }) {
  return (
    <Box bgColor="black">
      <Header />
      <Flex>
        <SidebarContent />
        {children}
      </Flex>
    </Box>

  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      borderRight="1px solid #242731"
      w={"250px"}
      pos="sticky"
      top="0px"
      h="100vh"
      {...rest}
      color="#808191"
      className='sidebar'
      overflow="auto"
      py={"30px"}
    >
      <Flex alignItems="center" mx="8" justifyContent="space-between" color="#FFFFFF">
        <Flex alignItems="center" gap="8px">
          <Image src="Group5.png" w="30px" h="30px" />
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Name
          </Text>
        </Flex>
        <Image src="slide-left.png" w="24px" h="22px" />

      </Flex>
      <Flex flexDirection="column" gap="142px" mt="15px">
        <Flex flexDirection="column">
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </Flex>
        <Flex flexDirection="column" gap="21px">
          <Flex gap="7px" justifyContent="center">
            <Flex borderRadius="10px" p="5px 15px" alignItems="center" gap="3px" bgColor="#242731" color="#FFFFFF"> <Image src="Group5.png" w="16px" h="17px" /> $0.90</Flex>
            <Button borderRadius="10px" h="33px" bgColor="#A3E3FF" fontWeight="600" fontSize="14px" lineHeight="29px" color="#3772FF">Buy $XYZ</Button>
          </Flex>
          <Flex gap="13px" justifyContent="start" alignItems="center" pl="30px">
            <Image src="Language.png" w="20px" h="20px" />
            <Flex bgColor="#353945" borderRadius="12px" gap="12px" p="4px 7px" alignItems="center">
              <Image src="Grou4.png" w="15px" h="15px" />
              <Box bgColor="#3772FF" p="9px" borderRadius="100%"></Box>
            </Flex>
          </Flex>
        </Flex>

      </Flex>
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  console.log(icon.includes("10") , icon)
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="9px 14px"
        mx="4"
        fontWeight="600"
        borderRadius="12px"
        fontSize="14px"
        lineHeight="24px"
        role="group"
        fontFamily="Inter"
        cursor="pointer"
        _hover={{
          bg: '#353945',
          color: 'white',
        }}
        bgColor={icon.includes("9") ? "#353945":""}
        color={icon.includes("9") ? "#FFFFFF":""}
        {...rest}>
        {icon && (
          <Image src={icon} w="18px" h="18px" mr="4" />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const Header = () => {
  return (
    <Flex bgColor="#3772FF" h="36px" justifyContent="center" fontWeight="600" fontSize="14px" lineHeight="26px" color="#FFFFFF" alignItems="center">Lorem Ipsum is simply dummy text of the printing</Flex>
  );
};