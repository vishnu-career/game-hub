import { Grid, GridItem, Show } from "@chakra-ui/react";
import NAvBAr from "./components/NAvBAr";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem area="nav">
        <NAvBAr />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
