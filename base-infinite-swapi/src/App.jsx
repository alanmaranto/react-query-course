import "./App.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { InfinitePeople } from "./people/InfinitePeople";
import { InfiniteSpecies } from "./species/InfiniteSpecies";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <ReactQueryDevtools />
        {/* <InfinitePeople /> */}
        <InfiniteSpecies />
      </div>
    </QueryClientProvider>
  );
}

export default App;
