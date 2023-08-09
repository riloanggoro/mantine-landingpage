import { createStyles, Image, Container, Title, Text, List, ThemeIcon, rem } from '@mantine/core';
// import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import image from '../../public/Assets/Report.png';

const useStyles = createStyles((theme) => ({
  background: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'dark', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function About() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Pembuatan <span className={classes.highlight}>Laporan</span> pendapatan kini lebih
              mudah <br />{' '}
            </Title>
            <Text className="pt-5" color="dimmed">
              Bangun aplikasi pelaporan berbasis web yang dapat diakses dengan fungsi penuh lebih
              cepat dari sebelumnya – Mantine Coorporation menyertakan lebih dari 10 modul yang
              dapat disesuaikan untuk membantu Anda dalam situasi apa pun.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>JavaScript based</b> – Membuat apilikasi menjadi lebih mudah dan cepat.
              </List.Item>
              <List.Item>
                <b>Very affordable</b> – Penawaran yang kami berikan kepada anda adalah yang
                terbaik.
              </List.Item>
              <List.Item>
                <b>Support Anytime</b> – Kami memberikan pelayanan 24 jam untuk setiap kendala yang
                ada alami.
              </List.Item>
            </List>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
