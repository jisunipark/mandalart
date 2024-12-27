import localFont from "next/font/local";
import { Sen } from "next/font/google";

export const pretendard = localFont({
  src: "./PretendardVariable.ttf",
  variable: "--font-pretendard",
});

export const sen = Sen({ subsets: ["latin"], variable: "--font-sen" });
