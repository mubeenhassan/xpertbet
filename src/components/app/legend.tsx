import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const Legend = ({ legendItems }: { legendItems: { name: string; description: string }[] }) => {
  return (
    <Box sx={{ flexGrow: 1 }} px={4} pt={4}>
      <Grid container spacing={2}>
        {legendItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Typography variant="body1">
              <b>{item.name}</b>: {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Legend;
