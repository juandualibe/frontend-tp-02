"use client";

import { useState, useEffect, useCallback } from "react";

export function useApiData() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  const fetchComics = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const offset = page + 2;
      const fallbackResponse = await fetch(
        "https://picsum.photos/v2/list?limit=10&page=" + offset
      );
      const fallbackData = await fallbackResponse.json();

      const transformedData = fallbackData.map((item) => ({
        id: item.id,
        title: `Comic Antihero #${item.id}`,
        description: `Una historia épica de antiheroes y villanos en un mundo oscuro. Explora las profundidades de la moralidad gris.`,
        thumbnail: item.download_url,
      }));

      setComics(transformedData);
    } catch (err) {
      console.error(err);
      setError(
        "Error al cargar los datos. Por favor, intenta de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchComics();
  }, [fetchComics]);

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    comics,
    loading,
    error,
    page,
    handlePrevPage,
    handleNextPage,
    fetchComics,
  };
}
