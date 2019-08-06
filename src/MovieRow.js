// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
//
// class MovieRow extends React.Component {
//   viewMovie() {
//     const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
//     window.open(url, '_blank')
//   }
//
//   addDefaultSrc(ev) {
//     ev.target.src = 'green_movie_icon.png'
//   }
//
//   render() {
//     return (
//       <table className="table table-dark" key={this.props.movie.id}>
//         <tbody>
//           <tr>
//             <td style={{width:"10%"}}>
//               <img alt="poster" widsth="120" src={this.props.movie.poster_src} onError={this.addDefaultSrc}/>
//             </td>
//             <td>
//               <h3 className="align-top">{this.props.movie.title}</h3>
//               <p className="align-middle">{this.props.movie.overview}</p>
//               <input type="button" className="btn btn-light align-bottom" onClick={this.viewMovie.bind(this)} value="View"/>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     )
//   }
// }
//
// export default MovieRow
