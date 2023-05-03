import Image from "next/image";
import effect1 from '../public/effect1.svg';
import effect2 from '../public/effect2.svg';
import logo from '../public/logo.svg';
import './globals.css';

export const metadata = {
  title: 'Github Blog',
  description: 'Github Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="w-screen h-[300px] flex flex-row justify-between bg-base-profile -mb-24 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-8 w-full max-w-4xl bg-blue blur-[108px]"></div>
          <Image src={effect1} alt="" className="min-w-0 w-auto flex-1" />
          <div className="h-full m-16 min-w-[120px]">
            <Image src={logo} alt="Github Blog" />
          </div>
          <Image src={effect2} alt="" className="min-w-0 w-auto flex-1" />
        </header>
        <div className="w-screen flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
