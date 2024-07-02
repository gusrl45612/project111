'use client'; // 클라이언트 전용 컴포넌트로 지정

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { SyntheticEvent } from 'react';

const StyledBox = styled(Box)({
  width: '1720px',
  height: '60px',
  backgroundColor: '#ffffffaa',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
});

const StyledTab = styled(Tab)({
  color: 'black',
  padding: '0',
  fontSize: '16px',
  marginLeft: '60px',
  marginRight: '60px',
  display: 'flex',
  alignItems: 'center',
});

const Header: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledBox>
      <Tabs value={value} onChange={handleChange} centered>
        <StyledTab
          label="회사소개"
          component={Link}
          href="/company"
        />
        <StyledTab
          label="시공사례"
          component={Link}
          href="/portfolio"
        />
        <StyledTab
          label="시공상담"
          component={Link}
          href="/consult"
        />
        <StyledTab
          label="고객후기"
          component={Link}
          href="/reviews"
        />
      </Tabs>
    </StyledBox>
  );
}

export default Header;
