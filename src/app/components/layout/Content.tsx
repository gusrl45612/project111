'use client'; // 클라이언트 전용 컴포넌트로 지정

import React from 'react';
import {
  Grid,
  Box,
  styled,
  TextField,
  Typography,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CallIcon from '@mui/icons-material/Call';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import svgGroup from '../Mask group.svg';
import map from '../img/map.jpg';

const StyledBox = styled(Box)({
  width: '100%',
  maxWidth: '1720px',
  height: '100%',
  maxHeight: '800px',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px',
  margin: '200px auto 0',
});

const StyleBox = styled(Box)({
  width: '100%',
  maxWidth: '574px',
  height: '100%',
  maxHeight: '800px',
  backgroundColor: '#ffffff',
  border: '1px solid #e5e5e5',
  borderRadius: '40px 0 0 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '70px',
  marginRight: '70px',
});

const SBox = styled(Box)({
  width: '860px',
  height: '240px',
  marginLeft: '94px',
  marginTop: '138px',
  backgroundColor: '#1565c0',
  borderRadius: '10px',
  color: '#FFFFFF',
  textAlign: 'center',
  fontSize: '40px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& > *': {
    marginRight: '24px',
    marginTop: '8px',
  },
});

const SsBox = styled(Box)({
  width: '860px',
  height: '580px',
  marginLeft: '94px',
  marginTop: '244px',
  backgroundColor: '#1565c0',
  color: '#FFFFFF',
  fontSize: '32px',
  display: 'flex',
});

const StyledImage = styled('img')({
  width: '100%',
  maxWidth: '860px',
  height: '100%',
  maxHeight: '800px',
  borderRadius: '10px',
});

const currencies = [
  { value: '구 선택', label: '구 선택' },
  { value: '북구', label: '북구' },
  { value: '서구', label: '서구' },
  { value: '중구', label: '중구' },
  { value: '달서구', label: '달서구' },
  { value: '수성구', label: '수성구' },
  { value: '달성군', label: '달성군' },
  { value: '군위군', label: '군위군' },
];

const advice = [
  { label: '원하는 상담 유형 선택', value: '원하는 상담 유형 선택' },
  { label: '원하는 상담 유형 선택', value: '원하는 상담 유형 선택' },
  { label: '원하는 상담 유형 선택', value: '원하는 상담 유형 선택' },
  { label: '원하는 상담 유형 선택', value: '원하는 상담 유형 선택' },
  { label: '원하는 상담 유형 선택', value: '원하는 상담 유형 선택' },
  { label: '원하는 상담 유형 선택', value: '원하는 상담 유형 선택' },
];

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '32px',
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: '120px',
});

const StyledButton = styled(Button)({
  width: '120px',
  height: '32px',
  padding: '0px',
  backgroundColor: 'white',
  color: 'black',
  display: 'flex',
  marginTop: '60px',
  marginLeft: 'auto',
  marginRight: '68px',
});

const StyledSwiper = styled(Swiper)({
  color: 'black',
});

export function Content() {
  return (
    <>
      <StyledBox sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent={'flex-end'}>
          <Grid item xs={6}>
            <StyledImage src={svgGroup} alt="사진" />
          </Grid>
          <Grid item xs={6}>
            <StyleBox>
              <Typography
                fontSize={'20px'}
                marginLeft={'30px'}
                marginTop={'38px'}
                marginBottom={'14px'}
              >
                온라인상담
              </Typography>
              <hr />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': {
                        height: '52px',
                        width: '212px',
                        marginLeft: '52px',
                        marginTop: '28px',
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="이름"
                      variant="outlined"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': {
                        height: '52px',
                        width: '212px',
                        marginRight: '52px',
                        marginTop: '28px',
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="전화번호"
                      variant="outlined"
                    />
                  </Box>
                </Grid>

                <TextField
                  sx={{
                    width: '456px',
                    height: '52px',
                    marginLeft: '68px',
                    marginTop: '30px',
                  }}
                  id="outlined-select-currency"
                  select
                  label="주소"
                  defaultValue="중구"
                  helperText="구를 선택해주세요"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  sx={{
                    width: '456px',
                    height: '52px',
                    marginLeft: '68px',
                    marginTop: '50px',
                  }}
                  id="outlined-select-currency"
                  select
                  label="상담유형"
                  defaultValue="원하는 상담 유형 선택"
                  helperText="원하시는 상담 유형을 선택해주세요"
                >
                  {advice.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': {
                      width: '456px',
                      height: '102px',
                      marginLeft: '68px',
                      marginTop: '50px',
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{
                      width: '456px',
                      height: 'auto',
                      marginLeft: '68px',
                      marginTop: '50px',
                      textAlign: 'center',
                    }}
                    id="outlined-basic"
                    label="요청사항/문의사항"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Box>
              </Grid>
              <StyledButton
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                endIcon={<AddPhotoAlternateOutlinedIcon />}
              >
                첨부파일
                <VisuallyHiddenInput type="file" />
              </StyledButton>
              <FormGroup>
                <FormControlLabel
                  sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: '38px',
                    justifyContent: 'center',
                  }}
                  control={<Checkbox />}
                  label="개인정보수집 및 이용동의"
                />
              </FormGroup>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Button
                  sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    width: '180px',
                    height: '50px',
                  }}
                  variant="contained"
                >
                  신청하기
                </Button>
              </Box>
            </StyleBox>
          </Grid>
        </Grid>
      </StyledBox>
      {/* 박스 */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SBox>
            <CallIcon fontSize="large" />
            053-123-1234
          </SBox>
        </Grid>
        <Grid item xs={6}>
          <SBox
            sx={{
              padding: 0,
              marginLeft: 0,
              marginRight: '94px',
              marginTop: '138px',
              backgroundColor: '#ffffff',
            }}
          >
            <StyledSwiper
              direction="vertical"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </StyledSwiper>
          </SBox>
        </Grid>
      </Grid>
      {/* 지도, 공지사항 */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SsBox>
            <StyledImage sx={{ borderRadius: '0' }} src={map} alt="사진" />
          </SsBox>
        </Grid>
        <Grid item xs={6}>
          <SsBox></SsBox>
        </Grid>
      </Grid>
    </>
  );
}
