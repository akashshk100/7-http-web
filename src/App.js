import React, { Component } from 'react';
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    auth: "aditya-shukla"
  }
})

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      post: null
    }
  }

  getPost = (id) => {

    // axios.get("/posts/"+id)
    // .then( (response) => {
    //   this.setState({
    //     post: response.data
    //   })
    //   // console.log(response)
    // } )
    // .catch( (error) => {
      
    //   this.setState({
    //     post: {
    //       title: "Error",
    //       body: "Incorrect Error Request"
    //     }
    //   })
    // } )  

    axiosInstance.get("/posts/"+id)
    .then( (response) => {
      this.setState({
        post: response.data
      })
      // console.log(response)
    } )
    .catch( (error) => {
      
      this.setState({
        post: {
          title: "Error",
          body: "Incorrect Error Request"
        }
      })
    } )  
  }

  render(){

    let postContent = null 
    if( this.state.post ){
      // console.log(this.state.post)
      postContent = (
        <div>
          <h4>{this.state.post.title}</h4>
          <p>{this.state.post.body}</p>
        </div>
      )
    }

    return(
      <div>
        <p>Select Post</p>
        { [1,2,3].map( (id) => {
          return(
            <button key={id} onClick={ () => {this.getPost(id)} } style={{margin: "0px 10px"} } > Post {id} </button>
          )
        } ) }
        <div>
          {postContent}
        </div>
      </div>
    )
  }
}

export default App;
