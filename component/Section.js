import { useEffect, useState } from "react"
import { Box, Spinner, Flex, Button, Image, Tabs, TabPanel, TabList, TabPanels, Tab, TabIndicator } from "@chakra-ui/react";
import { fetchData } from "@/utils";

function Section() {
    const [data, setData] = useState("")
    useEffect(() => {
        fetchData().then((res) => {
            setTimeout(() => {
                setData(res.data)
            }, 5000)
        })
    }, [])


    return (
        <>
            {data === "" ? <Spinner /> :
                (<Tabs position="relative" variant="unstyled" fontFamily="Inter">
                    <TabList gap="20px">
                        <Tab fontWeight="600" fontSize="18px" color="#808191" lineHeight="18px" _selected={{ color: "#FFFFFF" }} px="0px">First Tab</Tab>
                        <Tab fontWeight="600" fontSize="18px" color="#808191" lineHeight="18px" _selected={{ color: "#FFFFFF" }} px="0px">Second Tab</Tab>
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="blue.500"
                        borderRadius="1px"
                    />
                    <TabPanels >
                        {
                            data.map((v) => {
                                return (<TabPanel px="0px">
                                    <Flex flexDirection="column" gap="5px">
                                        <Flex fontWeight="600" fontSize="10px" color="#808191" lineHeight="24px" bgColor="#191B20" borderRadius="8px" p="8px 50px" justifyContent="space-between">
                                            <Box>ASSET</Box>
                                            <Box>AMOUNT</Box>
                                            <Box>USER ACCOUNT</Box>
                                            <Box>REFERRAL EARNING</Box>
                                        </Flex>
                                        <Flex color="#FFFFFF" gap="60px" justifyContent="space-between" bgColor="rgba(36, 39, 49, 0.4)" borderRadius="5px" p="12px 43px 12px 22px" alignItems="center" ml="5px">
                                            <Flex justifyContent="space-between" gap="45px">
                                                <Flex alignItems="center" gap="12px">
                                                    <Image src={v.img} w="27px" h="27px" />
                                                    <Flex flexDirection="column">
                                                        <Box fontWeight="600" fontSize="14px" lineHeight="24px">{v.asset}</Box>
                                                        <Box display="flex" gap="7px" fontWeight="500" fontSize="12px" lineHeight="16px" color="#808191">{v.type} <Flex gap="4px" bgColor="#353945" p="3px" borderRadius="7px" as="span" fontWeight="600" fontSize="7px" lineHeight="11px"><Image src={v.chain.img} w="10px" />{v.chain.name}</Flex> </Box>
                                                    </Flex>
                                                </Flex>
                                                <Flex flexDirection="column" >
                                                    <Box fontWeight="600" fontSize="14px" lineHeight="24px" whiteSpace="nowrap">{v.amount + " BNB"}</Box>
                                                    <Box fontWeight="500" fontSize="14px" lineHeight="24px" color="#808191" align="center">{v.state}</Box>
                                                </Flex>
                                            </Flex>
                                            <Flex justifyContent="space-between" gap="80px" alignItems="center">
                                                <Box fontWeight="600" fontSize="14px" lineHeight="24px" className="code">{v.user.substring(0, 5) + '..' + v.user.slice(-7)}</Box>
                                                <Flex flexDirection="column" alignItems="center">
                                                    <Box fontWeight="600" fontSize="14px" lineHeight="24px">{v.referral_earnings + ".BNB"}</Box>
                                                    <Flex fontWeight="600" fontSize="12px" lineHeight="16px" color="#808191" alignItems="center" gap="6px" whiteSpace="nowrap"><Box>View on BSC Scan</Box><Image src="Group2.png" w="10px" h="10px" /></Flex>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </TabPanel>)
                            })
                        }


                    </TabPanels>
                </Tabs>)}
        </>

    )
}


export default Section