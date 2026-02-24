import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/hero_image.svg"
        alt="Hero Image"
        width={1200}
        height={60}
        className="h-auto object-cover max-w-full"
      />
    </div>
  );
}
