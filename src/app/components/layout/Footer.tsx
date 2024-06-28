'use client'; // 클라이언트 전용 컴포넌트로 지정

import { Box, Container, Grid, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        py: 6,
        boxShadow: '0px -1px 3px  #ccc',
      }}
    >
      <Container>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography fontWeight={'bold'} fontSize={'24px'}>
              (주)000 인테리어
            </Typography>
            <Typography fontSize={'16px'}>
              대표: 홍길동 | 010-1234-5678
              <br />
              대구광역시 달서구 이곡동 555로 <br />
              전화: 053-123-1234 | 팩스: 053-222-2222 <br />
              사업자등록번호: 10202308592059295 <br />
              email : interior@naver.com <br />
              copyright &copy; (주)000 인테리어
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography fontWeight={'bold'} fontSize={'24px'}>
              Quick Links
            </Typography>
            <Box
              display="flex"
              marginTop={'5px'}
              flexDirection="column"
              alignItems="flex-start"
              gap={2}
            >
              <Box display="flex" alignItems="center" gap={4}>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  underline="hover"
                  fontSize={'16px'}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  underline="hover"
                  fontSize={'16px'}
                >
                  About
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  underline="hover"
                  fontSize={'16px'}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  underline="hover"
                  fontSize={'16px'}
                >
                  Contact
                </Link>
              </Box>
              <Box display="flex" alignItems="center" marginTop={'5px'} gap={4}>
                <Link
                  href="https://www.facebook.com/"
                  color="inherit"
                  variant="body2"
                  underline="hover"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="https://www.youtube.com/"
                  color="inherit"
                  variant="body2"
                  underline="hover"
                >
                  <YouTubeIcon />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                  variant="body2"
                  underline="hover"
                >
                  <InstagramIcon />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
