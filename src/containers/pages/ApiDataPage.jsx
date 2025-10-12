"use client";

import Sidebar from "../../components/navigation/Sidebar";
import ApiDataHeader from "../../components/api-data/ApiDataHeader";
import ApiDataContent from "../../components/api-data/ApiDataContent";
import Footer from "../../components/navigation/Footer";
import { useApiData } from "../../components/api-data/useApiData";

export default function ApiDataPage() {
  const {
    comics,
    loading,
    error,
    page,
    handlePrevPage,
    handleNextPage,
    fetchComics,
  } = useApiData();

  return (
    <div style={styles.container}>
      <section style={styles.content}>
        <ApiDataHeader page={page} />
        <ApiDataContent
          comics={comics}
          loading={loading}
          error={error}
          page={page}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          fetchComics={fetchComics}
        />
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
  },
  content: {
    margin: "0 auto",
    padding: "60px 40px",
  },
};
