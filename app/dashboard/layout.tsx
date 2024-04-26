import { Navbar } from "@/components/Navbar";


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-5 min-h-screen">
      <Navbar />
      {children}
    </section>
  );
}