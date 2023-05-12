import { fetchData } from "@/lib/get-item";
import Image from 'next/image'

export default function Apod ({item}) {
    return (
        <div>
            <h1>{item.title}</h1>
            <Image src={item.url} alt={item.title}/>
            <p>{item.explanation}</p>
        </div>
    );
}

export async function getStaticProps() {
    const item = await fetchData();
    return {
        props : {item},
    };
}