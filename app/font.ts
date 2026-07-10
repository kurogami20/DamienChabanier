import localFont from "next/font/local";

export const myTitleFont = localFont({
  src: [
    {
      path: "/fonts/sharkbit-webfont.woff",
      //   weight: "700",
      //   style: "normal",
    },
  ],
  display: "swap",
});
