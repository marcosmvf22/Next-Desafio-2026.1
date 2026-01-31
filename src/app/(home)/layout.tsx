import Navbar from "../../components/navbar";
import Footer from "@/src/components/footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar/>
      {children}
      <Footer/>
    </section>
  );
}