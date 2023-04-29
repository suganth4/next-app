import { Box, Input, Flex, Button, Image } from "@chakra-ui/react";
import Section from "./Section";

function Main() {

    return (
        <Flex>
            <Box flexBasis="780px" p={"30px 36px 15px 36px"} display="flex" flexDirection="column" gap="20px" borderRight="1px solid #242731">
                <Flex justifyContent="space-between" alignItems="center">
                    <Box fontWeight="600" fontSize="18px" lineHeight="18px" color="#FFFFFF" borderBottom="1px solid #3772FF" pb="7px" fontFamily="Inter">Section</Box>
                    <Flex fontFamily="Inter" alignItems="center" gap="20px" bgColor="#191B20" borderRadius="12px" p="5px">
                        <Flex gap="5px" alignItems="center">
                            <Image src="Wallet.png" width="30px" position="relative" top="5px" />
                            <Box fontWeight="500" fontSize="16px" lineHeight="35px" textTransform="uppercase" color="#FFFFFF" fontFamily="Poppins">0.2 $XYZ</Box>
                        </Flex>
                        <Button fontFamily="Poppins" bgColor="#A3E3FF" borderRadius="5px" fontWeight="600" fontSize="12px" lineHeight="15px" textTransform="uppercase" color="#3772FF" letterSpacing="0.240494px" p="6px 10px" height="25px">Tier 1</Button>
                    </Flex>
                </Flex>
                <Flex bgColor="#ABE8FF" borderRadius="10px" m="7px" justifyContent="space-between" px="15px" alignItems="center">
                    <Box >
                        <Box fontFamily="Poppins" fontWeight="500" fontSize="14px" lineHeight="26px" color="#2B2557" whiteSpace={[null, null, null, null, "wrap", "nowrap"]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Box>
                        <Button fontFamily="Inter" height='24px' fontWeight="600" fontSize="12px" lineHeight="24px" color="#2B2557" cursor="pointer">
                            Tutorial
                        </Button>
                    </Box>
                    <Image src="11.png" w="114px" h="90px" position="relative" top="10px" />
                </Flex>
                <Flex fontFamily='Poppins' color="#FFFFFF" borderRadius="24px" bgColor="#191B20" p="24px" justifyContent="space-between" alignItems="center">
                    <Flex flexDirection="column">
                        <Box fontWeight="500" fontSize="18px" lineHeight="24px">Your rewards</Box>
                        <Box fontWeight="600" fontSize="28px" lineHeight="48px">$ 0.26231428</Box>
                        <Flex fontWeight="600" fontSize="12px" lineHeight="17px" gap="6px"><Box bgColor="#353945" borderRadius="11px" p="8px">$40 AVAX</Box><Box bgColor="#353945" borderRadius="11px" p="8px">$10 BNB</Box><Box bgColor="#353945" borderRadius="11px" p="8px">$210 BTC</Box></Flex>
                    </Flex>
                    <Button bgColor="#3772FF" borderRadius="10px" height="36px" gap="7px"> <Image src="Group.png" w="16px" />Custom link</Button>
                </Flex>
                <Flex color="#FFFFFF" gap="22px" fontFamily="Poppins">
                    <Flex flex={1} bgColor="#191B20" borderRadius="16px" flexDirection="column" gap="18px" p="22px">
                        <Box display="flex" gap="10px"><Image src="Group1.png" width="24px" /> <Box fontWeight="700" fontSize="20px" lineHeight="24px" >12.5% of fee</Box></Box>
                        <Flex gap="15px" flexDirection="column" fontFamily="Inter">
                            <Box fontWeight="500" fontSize="16px" lineHeight="16px" color="#808191">Your Referral Link for xyz</Box>
                            <Flex alignItems="center" bgColor="#242731" borderRadius="8px" p="20px" pr="20px" gap="28px" fontWeight="700" fontSize="14px" lineHeight="24px"><Box >https://unityexchange.design </Box> <Image src="ungroup.png" w="16px" h="16px" /></Flex>
                        </Flex>
                    </Flex>
                    <Flex flex={1} bgColor="#191B20" borderRadius="16px" flexDirection="column" gap="18px" p="22px" fontFamily="Poppins">
                        <Box display="flex" gap="10px"><Image src="Group1.png" width="24px" /> <Box fontWeight="700" fontSize="20px" lineHeight="24px" >12.5% of fee</Box></Box>
                        <Flex gap="15px" flexDirection="column" fontFamily="Inter">
                            <Box fontWeight="500" fontSize="16px" lineHeight="16px" color="#808191">Your Referral Link for xyz</Box>
                            <Flex display="flex" alignItems="center" bgColor="#242731" borderRadius="8px" p="20px" gap="28px" fontWeight="700" fontSize="14px" lineHeight="24px"><Box >https://unityexchange.design </Box> <Image src="ungroup.png" w="16px" h="16px" /></Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Section />
            </Box>
            <Flex flexBasis="406px" p={"30px 36px 0px 36px"} flexDirection="column" gap="30px" fontFamily="Inter" >
                <Flex justifyContent="space-between" gap="14px">
                    <Flex gap="5px" alignItems="center" bgColor="#353945" borderRadius="10px" p="5px 14px">
                        <Image src="Ellipse2.png" width="20px" />
                        <Box fontFamily="Poppins" fontWeight="400" fontSize="15px" lineHeight="29px" color="#FFFFFF" > Avalanche</Box>
                        <Image src="Vector.png" width="9px" />
                    </Flex>
                    <Flex gap="5px" alignItems="center" border="1px solid #3772FF" borderRadius="10px" p="5px 15px">
                        <Image src="Wallet.png" w="30px" position="relative" top="5px" />
                        <Flex gap="16px" alignItems="center"><Box fontWeight="600" fontSize="14px" lineHeight="29px" color="#FFFFFF" textTransform="uppercase">0xf6...1353</Box>
                            <Image src="Vector.png" width="9px" h="6px" /></Flex>
                    </Flex>
                </Flex>
                <Flex color="#FFFFFF" flexDirection="column" gap="7px" >
                    <Flex flexDirection="column" gap="20px">
                        <Flex alignItems="center" gap="14px"><Image src="Path.png" w="12px" h="10px" /> <Box fontWeight="500" fontSize="18px" lineHeight="24px" >Custom link</Box></Flex>
                        <Box fontFamily="Poppins" fontWeight="400" fontSize="16px" lineHeight="48px">https://testnet.xyz.xyz/trade?ref=</Box>
                    </Flex>
                    <Flex flexDirection="column" gap="30px">
                        <Input bgColor="#242731" borderRadius="12px" placeHolder="ENTER" border="0px" />
                        <Flex gap="18px" justifyContent="space-around">
                            <Button bgColor="#3772FF" borderRadius="10px" height="36px" gap="7px" fontWeight="700" fontSize="14px" lineHeight="24px"> <Image src="Group.png" w="16px" />Custom link</Button>
                            <Button bgColor="#000000" borderRadius="12px" height="36px" gap="7px" border="1px solid #242731" p="6px 27px" fontWeight="700" fontSize="14px" lineHeight="24px"> <Image src="deposit.png" w="16px" />Cancel</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )

}

export default Main;