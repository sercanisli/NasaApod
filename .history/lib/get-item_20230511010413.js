import React, { useEffect, useState } from 'react'
import axios from "axios";

export async function fetchData () {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=EE0ZIoEOksDZKvkNgEcM1TfRaKWtTACerC0GhuJQ&');
            const json = await response.json();
            const item = JSON.parse(JSON.stringify(json));
            return item;
            console.log(item);
}