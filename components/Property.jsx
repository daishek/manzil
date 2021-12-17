import Link from 'next/link';
//mui imports
import { Grid ,Card, CardActions, CardContent, CardMedia, Button, Typography, Avatar } from '@mui/material';
import { LocationOn, Bed, BathtubOutlined, BathtubSharp , CropOutlined, CheckCircle} from '@mui/icons-material';
// default Image
import DefaultImage from '../public/defaultImage.jpg';
//millify
import millify from 'millify';
//import styles
import styles from '../styles/property.module.scss';

export default function ImgMediaCard({ property: { coverPhoto, price, rentFrequency, title, rooms, baths, area, agency, isVerified, externalID, createdAt} }) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Link href={`/property?id=${externalID}`} passHref>
                <Card className={styles.sexmokitho} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={coverPhoto? coverPhoto.url : DefaultImage}
                    />
                    <CardContent className={styles.cardContent}>
                        <span className={styles.title} >{title.length>30?title.substring(0, 30) + "...":title}</span>
                        <div className={styles.infos} >
                            {isVerified&& <CheckCircle className={styles.icon}/>}
                            | <Bed className={styles.icon}/> {rooms} | <BathtubOutlined className={styles.icon}/> {baths} | <CropOutlined className={styles.icon}/> {millify(area*10.764)} m²
                        </div>
                        
                        <Typography className={styles.price}>{"UAED "+ millify(price)}</Typography>
                    </CardContent>
                    <CardActions className={styles.cardAction}>
                        <Avatar sx={{ display: 'block' }} src={agency.logo.url && agency.logo.url}>R</Avatar>
                        <Typography className={styles.agencyName}>{agency.name}</Typography>
                    </CardActions>
                </Card>
            </Link>
        </Grid>
  );
}
