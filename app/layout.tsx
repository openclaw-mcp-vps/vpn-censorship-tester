import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPN Censorship Tester – Find VPNs That Actually Work",
  description:
    "Crowdsourced real-time data on which VPN providers bypass government censorship in your country. Trusted by journalists, activists, and remote workers."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="538cefce-0dcd-4a8d-aeef-05fc9e1b9407"
        />
      </head>
      <body className="min-h-screen bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
