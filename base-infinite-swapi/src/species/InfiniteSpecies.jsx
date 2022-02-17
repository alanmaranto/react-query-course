import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  // TODO: get data for InfiniteScroll via React Query
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery(
    "sw-species",
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    { getNextPageParam: (lastPage) => lastPage.next || undefined }
  );

  if (isLoading) return <div className="loading">Loading</div>;
  if (isError) return <div>{error.toString()}</div>;

  return (
    <>
      {isFetching && <div className="loading">Loading</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) =>
          pageData.results.map((species) => (
            <Species
              key={species.name}
              name={species.name}
              averageLifespan={species.average_lifespan}
              language={species.language}
            />
          ))
        )}
      </InfiniteScroll>
    </>
  );
}
