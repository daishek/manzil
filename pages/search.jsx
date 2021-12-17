import { Router, useRouter } from 'next/router';

import { Grid } from '@mui/material'
import { Property } from "../components";

import { fetchApi, baseUrl } from "../utils/fetchApi";



const Search = ({ properties }) => {
    console.log(properties);


    const router = useRouter();
    return (
        <div>
            search...
            <h1>Properties {router.query.purpose}</h1>
            <Grid container spacing={4}>
                {properties.map((property)=> <Property key={property.id} property={property} />)}
            </Grid>
            
            {
                //if there is no properties
                properties.length===0&&(
                    <h1>No Result Found</h1>
                )
            }
        </div>
    )
}

export default Search





export async function getServerSideProps({ query }){
    const purpose = query.purpose || 'for-sale';

    
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';


    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    
    return {
        props: {
            properties: data?.hits,
        }
    }
}