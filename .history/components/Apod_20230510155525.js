import { fetchData } from "@/lib/get-item";
import Image from 'next/image'

export default function Apod ({item}) {
    return (
        <div>
            <input>{item.title}</input>
            <Image src={item.url} alt={item.title}/>
            <p>{item.explanation}</p>
        </div>
    );
}

export async function getStaticProps() {
    const item = await fetchData();
    return {
        props : {data},
    };
}