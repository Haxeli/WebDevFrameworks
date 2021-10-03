import React from 'react';
import View from './components/View';
import data from './data.json'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
    }
  }

  onSearchFieldChange = (event) => {
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  render()
  {
    let output =
      <>
        <div>
          Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        </div>
        <View
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
      </>

    return (
      <>
        { output }
      </>
    )
  }
}

export default App;