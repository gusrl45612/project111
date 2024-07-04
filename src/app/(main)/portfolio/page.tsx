"use client";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import React, { useState } from "react";

const dummyData = [
  {
    id: 1,
    title: "동구 ㅇㅇ아파트",
    subtitle: "올리모델링",
    imageUrl: "/placeholder.png",
  },
];

const portfolio = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    //검색 로직
  };
  const handleCardClick = (id: number) => {
    router.push(`/details/${id}`);
  };

  return (
    <Container>
      <Box display="flex" alignItems="center" mb={4}>
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <TextField
          placeholder="키워드를 검색하세요."
          variant="outlined"
          fullWidth
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Grid container spacing={4}>
        {dummyData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card onClick={() => handleCardClick(item.id)}>
              <Box
                component="img"
                src={item.imageUrl}
                alt={item.title}
                sx={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="subtitle1">{item.subtitle}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default portfolio;
