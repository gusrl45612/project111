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

const AdminEmployee = () => {
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
              <TableCell>회원여부</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>주소</TableCell>
              <TableCell>상담시간</TableCell>
              <TableCell>접수이력</TableCell>
              <TableCell>상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 여기에 데이터 맵핑 */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>회원</TableCell>
              <TableCell>ㅇㅇㅇ</TableCell>
              <TableCell>대구 동구 ...</TableCell>
              <TableCell></TableCell>
              <TableCell>1</TableCell>
              <TableCell>진행중</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>회원</TableCell>
              <TableCell>ㅇㅇㅇ</TableCell>
              <TableCell>대구 동구 ...</TableCell>
              <TableCell></TableCell>
              <TableCell>1</TableCell>
              <TableCell>진행중</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminEmployee;
