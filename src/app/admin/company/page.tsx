'use client';
import { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

const AdminCompany = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSearch = () => {
    // 검색 로직
  };

  const handleRefresh = () => {
    setName('');
    setPhone('');
    setAddress('');
  };

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          label="이름"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="전화번호"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="주소"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ marginRight: '10px', flexGrow: 1 }}
        />
        <IconButton onClick={handleSearch} color="primary" style={{ marginRight: '10px' }}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={handleRefresh} color="default">
          <RefreshIcon />
        </IconButton>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>업체명</TableCell>
              <TableCell>대표자명</TableCell>
              <TableCell>전화번호</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>주소</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 여기에 데이터 맵핑 */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>ㅁㅁ인테리어</TableCell>
              <TableCell>ㄱㄴㄹ</TableCell>
              <TableCell>010-1234-5678</TableCell>
              <TableCell>aaa@aaaa.aaa</TableCell>
              <TableCell>대구..</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>ㅇㅇ인테리어</TableCell>
              <TableCell>ㅁㄴㅇ</TableCell>
              <TableCell>010-1234-5678</TableCell>
              <TableCell>aaa@aaaa.aaa</TableCell>
              <TableCell>대구..</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminCompany;
