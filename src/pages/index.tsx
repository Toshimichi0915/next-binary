import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Hello, world!</h1>
      <Image src="/api/image" alt="" width={72} height={72} />
    </main>
  );
}
