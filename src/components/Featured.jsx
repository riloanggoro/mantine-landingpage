import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
} from '@mantine/core';
import { IconServer2, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconServer2,
    title: 'Local Server',
    description:
      'BMS dikonfigurasi untuk satu unit Perusahaan atau grup Perusahaan yang terdistribusi secara mandiri. Server terletak di lokasi Perusahaan. Sangat cocok bagi Perusahaan yang ingin beroperasi secara mandiri dan memerlukan kinerja sangat tinggi. Memiliki kemudahan dan keluwesan dalam konfigurasi dan pengelolaannya.',
  },
  {
    icon: IconServer2,
    title: 'Coorporate Server',
    description:
      'BMS dikonfigurasi dengan cloud server namun ditambah fitur-fitur pengelolaan korporasi seperti Corporate Single Master, Corporate Central Purchasing, Corporate Central Agreement, Executive Information System, dll.Sangat cocok untuk corporate yang miliki banyak anakan perusahaan dan ingin mengelola semua anakan perusahaan secara terpadu.',
  },
  {
    icon: IconServer2,
    title: 'Cloud Server',
    description:
      'BMS dikonfigurasi di cloud. Sistem dapat diakses dari mana saja kapan saja. Customer dapat melakukan appointment online, telekonsultasi dengan spesialis dan membayar secara online. Sangat cocok untuk Perusahaan yang memiliki banyak cabang dan dapat mengurangi biaya investasi infrastruktur dan pemeliharaan.',
  },
];

export function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div id="about" className={classes.wrapper}>
      <Grid className="px-10" gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            PT. Mantine Indonesia
          </Title>
          <Text c="dimmed">
            PT Mantin Indonesia mempersembahkan BMS (Business Management System) untuk Perusahaan
            yang bergerak dibidang conventional stor, Food and Beverage (F&B). Kami menawarkan
            merupakan solusi yang menyeluruh sehingga permasalahan pelaporan yang sering anda hadapi
            dapat beroperasi secara lengkap dan terintegrasi. Kami telah memiliki pengalaman sejak
            tahun 2022 dalam mengembangkan sistem informasi terpadu bagi setiap client dan telah
            digunakan oleh lebih dari 18 Perusahaan yang tersebar di Indonesia.
          </Text>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
