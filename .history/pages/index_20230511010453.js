import Apod from "@/components/Apod";

export default function Home({items}) {
  return (
    <div>
      <Apod items={items} />
    </div>
  );
}