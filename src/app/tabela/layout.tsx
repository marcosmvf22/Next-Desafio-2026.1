import Footer from "@/src/components/footer";
import Sidebar from "@/src/components/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </section>
  );
}
