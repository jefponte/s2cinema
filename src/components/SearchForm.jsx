import { Toolbar, Typography } from "@material-ui/core";

function SearchForm() {
  return (
    <form>
      <SearchBar
        value={this.state.value}
        onChange={(newValue) => this.setState({ value: newValue })}
        onRequestSearch={() => doSomethingWith(this.state.value)}
      />
    </form>
  );
}

export default SearchForm;
