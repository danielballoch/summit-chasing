import React from "react"
import Head from 'next/head'
import fetch from 'node-fetch'
import Cookies from 'js-cookie'
import { getAllPostsWithSlug, getProductAndMoreProducts} from '../../lib/api'
import Heading from '../../components/product-page-components/heading'
import Carousal from "../../components/product-page-components/carousal";
import AddCart from "../../components/product-page-components/add-cart"
import Body from "../../components/product-page-components/body"
import Options from "../../components/product-page-components/options"
import Notification from "../../components/product-page-components/notification"
import Specifications from "../../components/product-page-components/specifications"
import globalStyles from '../../components/product-page-components/global'




//product page template
export default class Product extends React.Component{
//state for size & color options
constructor(props){
    super(props);
    this.setSize = this.setSize.bind(this);
    this.setColor = this.setColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
}
    state = {
        activeSize: "M",
        activeColor: "White",
        notification: false,
        addProductRes: "",
        message: ""
    };

    handleClick() {
        console.log("toggle state", this.state.notification);
        this.setNotification();
        setTimeout(() => this.setNotification(), 2200)
        this.setState({message: (this.props.product.title +" - " + this.state.activeColor +"/"+ this.state.activeSize + " added to cart!")})
    }

    setNotification(){
        this.setState(state => ({notification:!state.notification}))
    }
    setSize(size){
        this.setState({activeSize:size})
    }
    setColor(color){
        this.setState({activeColor:color})
    }

    render(){
    const product = this.props.product;
    const orderid = Cookies.get('orderid')
    console.log(orderid)
    console.log(this.props)
    
    if (product) {
        return (
            <main>
                <Notification notification={this.state.message} prompt={this.state.notification}/>
                <div className="d-flex justify-content-center">
                    <div className="w-50">
                        <Carousal images={product.images}/>
                    </div>
                    <div className="w-50 sticky product-stick">
                        <Heading price={this.props.product.price} title={this.props.product.title}/>
                        <Body title={product.title} body={product.body}/>
                        <Options sizes={product.sizes} colors={product.colors} 
                        activeSize={this.state.activeSize} activeColor={this.state.activeColor} 
                        setSize={this.setSize} setColor={this.setColor}
                        />
                        <AddCart activeColor={this.state.activeColor.toLocaleLowerCase()} 
                        activeSize={this.state.activeSize} 
                        productid={product.id} 
                        orderid={orderid} 
                        productAdded={this.props.productAdded} 
                        handleClick={this.handleClick}   
                        /> 
                        <Specifications specs={this.props.product.specifications}/>
                        
                    </div>

                </div>
                
                
                <style jsx global>
                    {globalStyles}
                </style>
            </main>
        );
    } else {
        return (<div>Loading...</div>)
    }
}
    
};


//New paths function getting products from Sanity CMS
export async function getStaticPaths() {
    const allProducts = await getAllPostsWithSlug()
    // const paths = allProducts.map(product => ({
    //     params: {id: product.slug.current.toString()}
    // }))
    // console.log(paths)
    // return {
    //     paths, fallback: false
    // }
    return {
        paths:
          allProducts?.map(product => ({
            params: {
              slug: product.slug,
            },
          })) || [],
        fallback: true,
      }
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getProductAndMoreProducts(params.slug, preview)
    return {
      props: {
        preview,
        product: data.product || null,
        moreProducts: data.moreProducts || null,
      },
    }
  }
//old paths function using printful
// export async function getStaticPaths(){
    
//     const API_URL = 'https://api.printful.com/store/products'
//     const res = await fetch(API_URL, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": process.env.customKey
//         }
//     })
//     const data = await res.json();

//     const paths = data.result.map(product => ({
//         params: {id: product.id.toString()}
//     }))
//     console.log(data);
//     return {paths, fallback: false}
// }


// old getProps function using printful
// export async function getStaticProps(props){
//     const API_URL = `https://api.printful.com/store/products/${props.params.id}`
//     const res = await fetch(API_URL, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": process.env.customKey
//         }
//     })
//         console.log(props)
//   const data = await res.json();
//   return {
//     props: {
//         products: data.result.sync_variants
//     }
//   };
// }