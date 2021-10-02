import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart:[] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {

    let url="http://localhost:3000/products";
    if(categoryId){
      url+="?categoryId="+categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart =(product)=>{
   let newCart = this.state.cart;
   var addedItem = newCart.find(c=>c.product.id===product.id);
   if(addedItem){
     addedItem.quantity+=1;
   }
   else{
    newCart.push({product:product,quantity:1});
    this.setState({cart:newCart});
   }
  
}

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };

    return (
      <div>
        <Container>            
            <Navi cart={this.state.cart} />         
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                currentCategory={this.state.currentCategory}
                addToCart={this.addToCart}
                info={productInfo}
                products={this.state.products}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
