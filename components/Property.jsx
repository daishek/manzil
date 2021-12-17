 //mui imports
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Avatar } from '@mui/material';
import { LocationOn, Bed, BathtubOutlined, BathtubSharp , CropOutlined} from '@mui/icons-material';
// default Image
import DefaultImage from '../public/defaultImage.jpg';
//millify
import millify from 'millify';
import { red } from '@mui/material/colors';
export default function ImgMediaCard({ property: { coverPhoto, price, rentFrequency, title, rooms, baths, area, agency, isVerified, externalID} }) {
    return (
    <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={coverPhoto? coverPhoto.url : DefaultImage}
            />
            <CardContent>
                <Typography variant="body2" component="h6">{title}{/* {title.length>30?title.substring(0, 30) + "...":title} */}</Typography>
                <div>
                    <Bed /> {rooms} | <BathtubOutlined /> {baths} | <CropOutlined/> {millify(area)*10.764} m²
                </div>
                <Typography>{"UAED"+millify(price)}</Typography>
            </CardContent>
            <CardActions >
                <Avatar sx={{ display: 'block' }} src={agency.logo.url && agency.logo.url}>R</Avatar>
                <Typography>{agency.name}</Typography>
            </CardActions>
        </Card>
    </Grid>
  );
}
