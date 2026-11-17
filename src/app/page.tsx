import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import PortfolioSections from "@/components/PortfolioSections";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <div id="home">
          <Hero />
        </div>
        <PortfolioSections />
      </main>
    </>
  );
}
