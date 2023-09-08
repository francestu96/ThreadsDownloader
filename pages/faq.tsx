import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Link, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, transition } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Default from 'templates/Default';

const FaqPage: NextPage = () => {
  return (
    <Default pageName="ThreadsDownloader | F.A.Q.">
      <Flex w={'full'} h={'20vh'} backgroundImage="/faq-banner.jpg" backgroundSize="cover" justify="center" align="center">
        <Text color="white" fontWeight={600} fontSize={["md", "2xl", "5xl"]} >
          Frequantly Asked Questions
        </Text>
      </Flex>
      <Flex justify="center" py="10" h="fit-content">
        <Tabs borderWidth='2px' rounded='lg' p={["2", "3", "5", "6"]} variant='soft-rounded' isFitted w={["90%", "70%", "60%", "50%"]} boxShadow="0px 0px 15px 5px rgba(0,0,0,0.5)" colorScheme="red">
          <TabList>
            <Tab fontWeight='bold' fontSize={["xs", "md"]}>Frequent questions</Tab>
            <Tab fontWeight='bold' fontSize={["xs", "md"]}>Usage limits</Tab>
          </TabList>
          <TabPanels fontSize={["xs", "md"]}>
            <TabPanel>
              <Accordion>
                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Which are the Ouroboros pricing plans?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    Ouroboros, at the moment, is completely free to use
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Do I need sound technical skills to setup Ouroboros?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <b>Ouroboros</b> is very simple to setup and anyone can do this. The only think you need is a good <b>PineScript</b> strategy to apply to your charts.
                    Fortunately the TradingView community is full of strategies you can use.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Do I have to leave my computer 24/7 open and running or rent a VPS?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    No, you do not need any of these services, Ouroborus and TradingView will take care of all for you!
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Is any service license subscription required?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    The only required license is (at least) the <b>TradingView Pro</b> license. This is necessary to access the <b>Alert Webhook</b> notification =(
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Is ApolloX a reliable service?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Link href="https://www.apollox.finance/en/futures/BTCBUSD" target="_blank">ApolloX</Link> is the leader in DEX trading. Sponsored by many big companies and used even by PancakeSwap
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion>
                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Which are the Ouroboros pricing plans?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    Ouroboros, at the moment, is completely free to use
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Do I need sound technical skills to setup Ouroboros?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <b>Ouroboros</b> is very simple to setup and anyone can do this. The only think you need is a good <b>PineScript</b> strategy to apply to your charts.
                    Fortunately the TradingView community is full of strategies you can use.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Do I have to leave my computer 24/7 open and running or rent a VPS?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    No, you do not need any of these services, Ouroborus and TradingView will take care of all for you!
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Is any service license subscription required?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    The only required license is (at least) the <b>TradingView Pro</b> license. This is necessary to access the <b>Alert Webhook</b> notification =(
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Is ApolloX a reliable service?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Link href="https://www.apollox.finance/en/futures/BTCBUSD" target="_blank">ApolloX</Link> is the leader in DEX trading. Sponsored by many big companies and used even by PancakeSwap
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Default>
  );
};

export async function getStaticProps(context: any) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    }
  }
}

export default FaqPage;