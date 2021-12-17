import Link from 'next/link'
import Image from 'next/image'
//mui components
import { Typography, Grid } from '@mui/material'
//app components
import { Property } from '../components'

import { baseUrl, fetchApi } from '../utils/fetchApi'
const index = ({ propertyForSale, propertyForRent }) => {
  console.log(propertyForSale);
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}><Typography variant='h6'>For Sale</Typography></Grid>
        {propertyForSale.map((property)=> <Property key={property.id} property={property} />)}
        <Grid item xs={12}><Typography variant='h6'>For Rent</Typography></Grid>
        {propertyForRent.map((property)=> <Property key={property.id} property={property} />)}
      </Grid>
    </div>
  )
}

export default index






//get Props

export async function getStaticProps(){
  //get only 6 in each one of sale and rent
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  }
}