import { Nunito } from 'next/font/google';
import Image from "next/image";
import avatar from "../public/avatar.png";

const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-4 z-10">
      <div className="w-full p-8 rounded-lg bg-base-profile shadow-lg flex gap-8">
        <Image src={avatar} alt="profile picture" />
        <div>
          <h2 className="text-2xl font-bold ">Cameron Williamson</h2>
        </div>
      </div>
    </main>
  );
}