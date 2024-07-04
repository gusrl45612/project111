'use client';
import { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const AdminConstruction = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  

  const handleUpload = () => {
    // 등록 로직
    console.log("Title:", title);
    console.log("Subtitle:", subtitle);
    console.log("Content:", content);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h6">제목을 입력하세요</Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <Typography variant="h6">부제목을 입력하세요</Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          margin="normal"
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          style={{ height: '300px', marginBottom: '40px' }}
        /> 
        <Box>
        <Button variant="contained" color="primary" onClick={handleUpload}>
          업로드
        </Button>
        </Box>
     </Box>
    </Container>
  );
};

export default AdminConstruction;
