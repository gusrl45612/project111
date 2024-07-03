'use client';
import { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const AdminConstruction = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleRegister = () => {
    // 등록 로직
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <Container>
      <Box mt={4}>
        <TextField
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          style={{ height: '300px', marginBottom: '40px' }}
        />
        <Button variant="contained" color="primary" onClick={handleRegister}>
          등록
        </Button>
      </Box>
    </Container>
  );
};

export default AdminConstruction;
