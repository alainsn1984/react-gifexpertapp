//import React, { useEffect, useState } from 'react';
import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
//import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifts(category);

    
    return (
        <>
            <h3>{ category }</h3>
            
            {  loading && <p> Loading </p> }
           
            <div className="card-grid">
            
                {
                    images.map(img=> (
                    
                        <GifGridItem 
                            key={ img.id} 
                            {... img } 
                        />

                    ))
                    
                }
            </div>
        </>
    )
}
