import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import ComicsGrid from "./ComicsGrid";
import Pagination from "./Pagination";

export default function ApiDataContent({
  comics,
  loading,
  error,
  page,
  handlePrevPage,
  handleNextPage,
  fetchComics,
}) {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} fetchComics={fetchComics} />;
  }

  return (
    <>
      <ComicsGrid comics={comics} />
      <Pagination
        page={page}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </>
  );
}
