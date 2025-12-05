import "./globals.css";
import MainTemplate from "@/components/MainTemplate";

export const metadata = {
  title: "Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainTemplate>
          {children}
        </MainTemplate>
      </body>
    </html>
  );
}
