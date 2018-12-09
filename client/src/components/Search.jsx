import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      selectedGenre: genres[0]
    };
    this.setGenre = this.setGenre.bind(this)
  }
  getGenres() {
    
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    //axios.get('/genres')
    //.then((things) =>(
    //   this.setState({
    //     genres: things
    //   })
    //  )
    // )
  }

  setGenres(event){
    this.setState({
      selectedGenre: event.target.value
    })
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <DropdownButton>
        {genres.map((genre)=>{
          <MenuItem 
          onClick = {()=> setGenre(event)}
          value = {genre}>genre</MenuItem>
        })}
        {/* <select>
          <option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option>
        </select> */}
        <DropdownButton/>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;