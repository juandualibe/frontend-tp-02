"use client";

import { useState, useEffect } from "react";
import antiheroes from "../../data/antiheroes.json";

export function useAntiHeroes() {
  const [selectedUniverse, setSelectedUniverse] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState(antiheroes);

  useEffect(() => {
    let filtered = antiheroes;

    if (selectedUniverse !== "all") {
      filtered = filtered.filter((hero) => hero.universe === selectedUniverse);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (hero) =>
          hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hero.realName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hero.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredHeroes(filtered);
  }, [selectedUniverse, searchTerm]);

  const universes = [
    "all",
    ...new Set(antiheroes.map((hero) => hero.universe)),
  ];

  return {
    filteredHeroes,
    totalHeroes: antiheroes.length,
    selectedUniverse,
    setSelectedUniverse,
    searchTerm,
    setSearchTerm,
    universes,
  };
}
