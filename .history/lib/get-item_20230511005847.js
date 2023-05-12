import React, { useEffect, useState } from 'react'

export const getStaticProps = async () => {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=EE0ZIoEOksDZKvkNgEcM1TfRaKWtTACerC0GhuJQ&');
            const json = await response.json();
            const item = JSON.parse(JSON.stringify(json));
            console.log(item);

            return {
                props : {
                    item,
                }
            }
}