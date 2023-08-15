import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import type { Charger } from '@type';

function ChargerCard(charger: Charger) {
  const { chargerId, capacity, method, price, type } = charger;

  return (
    <Card key={`charger-${chargerId}`} variant="outlined" sx={{ width: 'fit-content' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {capacity >= 50 ? `급속 (${capacity})` : `완속 (${capacity})`}
        </Typography>
        <Typography variant="h5" sx={{ mb: 1 }} component="div">
          {chargerId}
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.4 }} color="text.secondary">
          [TYPE] {type}
        </Typography>
        <Typography variant="body2" display={'inline-block'}>
          {method || '충전 방식 알 수 없음'}
        </Typography>
        <Typography variant="body2" display={'inline-block'}>
          &nbsp;/&nbsp;{price || '가격 알 수 없음'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ChargerCard;
