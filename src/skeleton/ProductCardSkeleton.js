import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';

function ProductCardSkeleton(props) {
  return (
    <Card className={props.className} variant="outlined">
        <Skeleton variant="rectangular" height={300} />
        <br/>
        <Skeleton width="80%" />
        <Skeleton width="40%" />
        <br/>
        <Skeleton width="90%" />
        <Skeleton width="90%" />
        <Skeleton width="90%" />
        <br/>
        <Skeleton width="40%" />
    </Card>
  )
}

export default ProductCardSkeleton
