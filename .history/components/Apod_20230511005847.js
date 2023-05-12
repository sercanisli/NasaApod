import { fetchData } from "@/lib/get-item";
import Image from 'next/image'

const Apod = ({items}) => {
    return (
        <div>
            {items.map ((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

// export async function getStaticProps() {
//     const item = await fetchData();
//     return {
//         props : {items},
//     };
// }