import React from 'react'

class ReviewForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name: "",
      rating: "",
      content: ""
    }
    this.onChangeReview = this.onChangeReview.bind(this)
    this.onChangeRating = this.onChangeRating.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  onChangeReview(event){
    let restaurantReview = event.target.value
    this.setState({
      content: restaurantReview
    })
  }

  onChangeRating(event){
    let restaurantRating = event.target.value
    this.setState({
      rating: parseFloat(restaurantRating)
    })
  }

  onChangeName(event){
    let newRestaurant = event.target.value
    this.setState({
      name: newRestaurant
    })
  }

  handleClear(){
    this.setState({
      name: "",
      rating: "",
      content: ""
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let newArray = {
      restaurant_id: this.props.restaurantId,
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    }
    this.props.trackReview(newArray)
    this.handleClear()
  }

render(){
  // debugger
return(
  <div>
    <h4>Form Reviews</h4>
  <form className="review-form" onSubmit={this.handleSubmit}>
    <label name="name"><h3>Restaurant Name</h3></label>
    <input type="text" placeholder="enter name here" name="name" value={this.state.name} onChange={this.onChangeName}></input>
    <label name="rating"><h3>Restaurant Rate</h3></label>
    <input type="text" placeholder="rating here" name="rating" value={this.state.rating} onChange={this.onChangeRating}></input>
    <label name="review"><h3>Restaurant Reviews</h3></label>
  <input type="text" placeholder="enter reviews" name="content" value={this.state.content} onChange={this.onChangeReview}></input>
    <input type="submit" value="Add Review" />
</form>
  </div>
)
}

}

export default ReviewForm
