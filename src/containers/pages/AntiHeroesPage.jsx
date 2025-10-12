"use client";

import AntiHeroesHeader from "../../components/antiheroes/AntiHeroesHeader";
import AntiHeroesControls from "../../components/antiheroes/AntiHeroesControls";
import AntiHeroesGrid from "../../components/antiheroes/AntiHeroesGrid";
import { useAntiHeroes } from "../../components/antiheroes/useAntiHeroes";

export default function AntiHeroesPage() {
  const {
    filteredHeroes,
    totalHeroes,
    selectedUniverse,
    setSelectedUniverse,
    searchTerm,
    setSearchTerm,
    universes,
  } = useAntiHeroes();

  return (
    <div style={styles.container}>
      <section style={styles.content}>
        <AntiHeroesHeader totalHeroes={totalHeroes} />
        <AntiHeroesControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedUniverse={selectedUniverse}
          setSelectedUniverse={setSelectedUniverse}
          universes={universes}
        />
        <AntiHeroesGrid
          filteredHeroes={filteredHeroes}
          totalHeroes={totalHeroes}
          setSearchTerm={setSearchTerm}
          setSelectedUniverse={setSelectedUniverse}
        />
      </section>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
  },
  content: {
    margin: "0 auto",
    padding: "clamp(30px, 6vw, 60px) clamp(20px, 4vw, 40px)", // Responsive padding
    maxWidth: "1400px",
  },
};
