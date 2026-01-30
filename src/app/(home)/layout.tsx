import Navbar from "../../components/navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar/>
      {children}
    </section>
  );
}