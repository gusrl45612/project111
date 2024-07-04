import { useRouter } from 'next/router';
import { Container, Box, Typography } from '@mui/material';

const dummyData = [
  { id: 1, title: '현장명1', subtitle: '시공내역1', beforeImageUrl: '/placeholder-before.png', afterImageUrl: '/placeholder-after.png', review: '고객 리뷰 내용' },
  // 더미 데이터 추가
];

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = dummyData.find(data => data.id === Number(id));

  if (!item) return <div>Loading...</div>;

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4">{item.title}</Typography>
        <Typography variant="h6">{item.subtitle}</Typography>
        <Box mt={2}>
          <Typography variant="h6">시공 전</Typography>
          <Box component="img" src={item.beforeImageUrl} alt="시공 전" sx={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
          <Typography variant="h6">시공 후</Typography>
          <Box component="img" src={item.afterImageUrl} alt="시공 후" sx={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
          <Typography variant="h6">고객 리뷰</Typography>
          <Box sx={{ padding: '20px', backgroundColor: '#f0f0f0' }}>{item.review}</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DetailPage;