import {
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import Switch from 'react-switch';

export const Pricing = () => {
  const theme = useMantineTheme();
  const [monthly, setMonthly] = useState(false);

  const handleChange = () => {
    setMonthly(!monthly);
  };

  return (
    <>
      <Group id="pricing" sx={{ zIndex: 50 }}>
        <Box
          sx={{
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[10] : 'hsl(208, 0%, 97%)',
            height: '100vh',
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            '@media (max-width:755px)': {
              paddingBlock: '5rem',
              height: '100%',
            },
          }}
        >
          <Stack spacing={40}>
            {/** header section */}
            <Flex direction="column" gap={10} align="center" justify="start">
              <Title
                order={2}
                color={theme.colorScheme === 'dark' ? 'white' : 'hsl(233, 13%, 49%)'}
              >
                Penawaran Kami
              </Title>
              <Box
                sx={{
                  fontWeight: 700,
                  color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : 'hsl(234, 14%, 74%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 19,
                }}
              >
                <Text fz={'sm'}>PerTahun</Text>
                <Switch
                  checked={monthly}
                  onChange={handleChange}
                  checkedIcon={null}
                  uncheckedIcon={null}
                  boxShadow=""
                  activeBoxShadow=""
                  width={45}
                  height={25}
                  onColor={'#228be6'}
                  offColor={'#85c7ff'}
                  handleDiameter={18}
                />
                <Text fz={'sm'}>Bulanan</Text>
              </Box>
            </Flex>
            {/** cards section */}
            <Group>
              <Flex
                align={'center'}
                direction={{ base: 'column', sm: 'row' }}
                color={'hsl(232, 13%, 33%)'}
                gap={{ base: '1.5rem', sm: 0 }}
              >
                <Box
                  sx={{
                    boxShadow: '0px 30px 50px -7px rgba(0,0,0,0.1)',
                    height: '25rem',
                    width: '18rem',
                    paddingInline: '1.5rem',
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
                    borderRadius: '0 0.7rem 0.7rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    '@media (max-width: 755px)': {
                      width: '19rem',
                      borderRadius: '0.7rem',
                    },
                    '@media (min-width: 756px) and (max-width: 820px)': {
                      width: '15rem',
                      borderRadius: '0 0.7rem 0.7rem 0',
                    },
                  }}
                >
                  <Stack w={'100%'} align={'center'} spacing={20}>
                    <Text
                      sx={{
                        fontWeight: 700,
                        color:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[1]
                            : 'hsl(233, 13%, 33%)',
                      }}
                      fz={'md'}
                    >
                      Basic
                    </Text>
                    <Title
                      order={2}
                      sx={{
                        color: theme.colorScheme === 'dark' ? 'white' : 'hsl(232, 13%, 33%)',
                        fontSize: 30,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                      }}
                    >
                      <Text fz={'2rem'}>Rp</Text>
                      {monthly ? '1.000.000' : '10.000.000'}
                    </Title>
                    <Stack
                      w={'100%'}
                      align="center"
                      spacing={10}
                      sx={{ color: theme.colorScheme === 'light' && 'hsl(233, 13%, 49%)' }}
                    >
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        Mencatat barang masuk
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        Mencatat barang keluar
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        Mencatat hasil keuntungan
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                    </Stack>
                    <Button
                      variant="gradient"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      gradient={{ from: 'hsl(207, 48%, 76%)', to: 'hsl(208, 85%, 54%)' }}
                      w="100%"
                    >
                      Pilih Penawaran
                    </Button>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    boxShadow: '0px 30px 50px -7px rgba(0,0,0,0.1)',
                    height: '30rem',
                    width: '19rem',
                    paddingInline: '1.5rem',
                    background:
                      'linear-gradient(to bottom right, hsl(207, 48%, 76%), hsl(208, 85%, 54%))',
                    color: 'white',
                    borderRadius: '0.7rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    '@media (min-width: 756px) and (max-width: 820px)': {
                      width: '15rem',
                      borderRadius: '0.7rem',
                    },
                  }}
                >
                  <Stack w={'100%'} align={'center'} spacing={20}>
                    <Text
                      sx={{
                        fontWeight: 700,
                        color:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[1]
                            : 'hsl(233, 13%, 33%)',
                      }}
                      fz={'md'}
                    >
                      Entrepreneur
                    </Text>
                    <Title
                      order={2}
                      sx={{
                        color: theme.colorScheme === 'dark' ? 'white' : 'hsl(232, 13%, 33%)',
                        fontSize: 30,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                      }}
                    >
                      <Text fz={'2rem'}>Rp</Text>
                      {monthly ? '2.500.000' : '25.000.000'}
                    </Title>
                    <Stack
                      w={'100%'}
                      align="center"
                      spacing={10}
                      sx={{ color: theme.colorScheme === 'light' && 'hsl(232, 13%, 33%)' }}
                    >
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        Mencatat barang masuk dan keluar
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        Mencatat Keuntungan
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                      <Text align="center" fz={'sm'} fw={600}>
                        Dapat menganalisa hasil penjualan dengan CHART
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        Support 7x24 Jam
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        Export data ke Excel
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        AI Prediksi penghasilan
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'gray',
                          opacity: theme.colorScheme === 'dark' && 0.7,
                        }}
                      />
                    </Stack>
                    <Button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Pilih Penawaran
                    </Button>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    boxShadow: '0px 30px 50px -7px rgba(0,0,0,0.1)',
                    height: '25rem',
                    width: '18rem',
                    paddingInline: '1.5rem',
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
                    borderRadius: '0 0.7rem 0.7rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    '@media (max-width: 755px)': {
                      width: '19rem',
                      borderRadius: '0.7rem',
                    },
                    '@media (min-width: 756px) and (max-width: 820px)': {
                      width: '15rem',
                      borderRadius: '0 0.7rem 0.7rem 0',
                    },
                  }}
                >
                  <Stack w={'100%'} align={'center'} spacing={20}>
                    <Text
                      sx={{
                        fontWeight: 700,
                        color:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[1]
                            : 'hsl(233, 13%, 33%)',
                      }}
                      fz={'md'}
                    >
                      Business
                    </Text>
                    <Title
                      order={2}
                      sx={{
                        fontSize: 30,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                      }}
                    >
                      <Text fz={'2rem'}>Rp</Text>
                      {monthly ? '1.500.000' : '15.000.000'}
                    </Title>
                    <Stack w={'100%'} align="center" spacing={10}>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'white',
                          opacity: theme.colorScheme === 'dark' && 0.6,
                        }}
                      />
                      <Text align="center" fz={'sm'} fw={600}>
                        Mencatat barang masuk dan keluar
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'white',
                          opacity: theme.colorScheme === 'dark' && 0.6,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        Mencatat Keuntungan
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'white',
                          opacity: theme.colorScheme === 'dark' && 0.6,
                        }}
                      />
                      <Text align="center" fz={'sm'} fw={600}>
                        Dapat menganalisa hasil penjualan dengan CHART
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'white',
                          opacity: theme.colorScheme === 'dark' && 0.6,
                        }}
                      />
                      <Text fz={'sm'} fw={600}>
                        Support 7x24 Jam
                      </Text>
                      <Divider
                        sx={{
                          width: '100%',
                          borderColor: theme.colorScheme === 'dark' && 'white',
                          opacity: theme.colorScheme === 'dark' && 0.6,
                        }}
                      />
                    </Stack>
                    <Button
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      variant="gradient"
                      gradient={{ from: 'hsl(207, 48%, 76%)', to: 'hsl(208, 85%, 54%)' }}
                      w="100%"
                    >
                      Pilih Penawaran
                    </Button>
                  </Stack>
                </Box>
              </Flex>
            </Group>
          </Stack>
        </Box>
      </Group>
    </>
  );
};
