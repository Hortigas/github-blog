import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import avatar from "../public/avatar.png";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-4 z-10">
      <div className="w-full p-8 rounded-lg bg-base-profile shadow-lg flex gap-8">
        <Image src={avatar} alt="profile picture" />
        <div>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-base-title my-2">Cameron Williamson</h2>
            <a className="text-xs text-blue flex items-center">GITHUB<FontAwesomeIcon height={12} icon={faArrowUpRightFromSquare} className="ml-2" /></a>
          </div>
          <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
        </div>
      </div>
    </main>
  );
}