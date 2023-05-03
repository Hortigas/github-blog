import { Nunito } from 'next/font/google';
import Image from "next/image";
import effect1 from '../public/effect1.svg';
import effect2 from '../public/effect2.svg';
import logo from '../public/logo.svg';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
});

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
      <body className={nunito.className}>
        <header className="w-screen h-[300px] flex flex-row justify-between bg-base-profile -mb-24 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-8 w-full max-w-4xl bg-blue blur-[108px]"></div>
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue blur-[200px] rounded-full"></div>
          <div className="absolute top-0 right-16 h-16 w-16 bg-blue blur-[184px] rounded-full"></div>
          <div className="w-auto flex-1 flex justify-start">
            <Image src={effect1} alt="" />
          </div>
          <div className="h-full m-16 min-w-[120px]">
            <Image src={logo} alt="Github Blog" />
          </div>
          <div className="w-auto flex-1 flex justify-end">
            <Image src={effect2} alt="" />
          </div>
        </header>
        <div className="w-screen flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
