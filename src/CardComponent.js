import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, Typography } from '@mui/material';

const CardComponent = ({ product, onTrackDelivery, onManageDelivery }) => (
  <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
    <CardHeader
      title={product.name}
      subheader={`Category: ${product.category}`}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Price: ${product.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Quantity: {product.quantity}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onTrackDelivery(product.id)}>Track Delivery</Button>
      <Button size="small" onClick={() => onManageDelivery(product.id)}>Manage Delivery Status</Button>
    </CardActions>
  </Card>
);

export default CardComponent;
