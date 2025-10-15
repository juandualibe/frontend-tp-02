// src/components/api-data/useApiData.js
"use client";

import { useState, useEffect } from "react";

const seriesDeAntiheroes = [
  "The Boys", "The Punisher", "Peacemaker", "Loki", "Moon Knight",
  "The Umbrella Academy", "Doom Patrol", "Lucifer", "Watchmen",
  "Harley Quinn", "The Sandman", "Constantine", "Invincible",
  "Preacher", "Spawn", "Arrow", "Stargirl", "Daredevil",
  "Iron Fist", "Luke Cage", "Agents of S.H.I.E.L.D.", "MODOK"
];

export function useApiData() {
  const [seriesMostradas, setSeriesMostradas] = useState([]); // <-- Estado para las series de la página actual
  const [listaCompleta, setListaCompleta] = useState([]); // <-- Estado para guardar las 22 series
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // <-- El estado de la página vuelve a ser importante

  const seriesPorPagina = 10; // <-- ¡NUEVO! Definimos cuántas series mostrar por página.

  // --- PRIMER PASO: Se ejecuta 1 sola vez para buscar todas las series ---
  useEffect(() => {
    const fetchTodasLasSeries = async () => {
      try {
        setLoading(true);
        const promesas = seriesDeAntiheroes.map(nombreSerie => {
          const url = `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(nombreSerie)}`;
          return fetch(url).then(res => {
            if (!res.ok) return null; // Si no encuentra una serie, devuelve null
            return res.json();
          });
        });

        const resultados = await Promise.all(promesas);
        
        // Filtramos los resultados nulos por si alguna serie no fue encontrada
        const seriesValidas = resultados.filter(show => show !== null);
        
        const transformedData = seriesValidas.map((show) => ({
          id: show.id,
          title: show.name,
          description: show.summary ? show.summary.replace(/<[^>]*>?/gm, '') : "Sinopsis no disponible.",
          thumbnail: show.image.medium,
        }));

        setListaCompleta(transformedData); // Guardamos la lista completa de las 22 series
      } catch (err) {
        console.error(err);
        setError("Error al cargar las series. La API puede estar ocupada.");
      } finally {
        setLoading(false);
      }
    };
    fetchTodasLasSeries();
  }, []);

  // --- SEGUNDO PASO: Se ejecuta cada vez que cambia la página o la lista completa está lista ---
  useEffect(() => {
    if (listaCompleta.length > 0) {
      // Calculamos qué porción de la lista mostrar
      const inicio = (page - 1) * seriesPorPagina;
      const fin = inicio + seriesPorPagina;
      setSeriesMostradas(listaCompleta.slice(inicio, fin));
    }
  }, [page, listaCompleta]); // Depende de 'page' y 'listaCompleta'

  const totalPaginas = Math.ceil(listaCompleta.length / seriesPorPagina);

  // --- TERCER PASO: Reactivamos los manejadores de paginación ---
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (page < totalPaginas) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    comics: seriesMostradas,
    loading,
    error,
    page,
    totalPaginas, // <--- ¡AQUÍ ESTÁ LA CORRECCIÓN!
    handlePrevPage,
    handleNextPage,
    fetchComics: () => {},
  };
}