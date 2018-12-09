import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.setGenre = this.setGenre.bind(this)
  }
  getGenres(genre) {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/genre/movie/list')
    .then((genres) =>{
      let newState = []
      genres.forEach((genre)=>(newState.push(genre.name)))
      this.setState({
        genres: newState
      })
    }
    )
  }

  setGenres(event){
    // this.setState({
    //   selectedGenre: event.target.value
    // })
    //render the movies for this genre
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <select>
        {genres.map((genre)=>{
          <option
          // onClick = {()=> setGenre(event)}
          value = {genre}>genre</option>
        })}
        {/* <select>
          <option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option>
        </select> */}
        <br/><br/>

        <button onClick={this.getGenres(event.target.value)}>Search</button>

      </div>
    );
  }
}

export default Search; 