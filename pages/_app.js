import App from 'next/app'
import Layout from '../components/layout.js'



export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
        productAdded: 0
        };
    }

    productAdded = () => {
        this.setState({productAdded: this.state.productAdded += 1})
        console.log(this.state)
    }
    render () {
      
    const { Component, pageProps} = this.props
    return (
        <Layout productAdded={this.state.productAdded}>
          <Component {...pageProps} productAdded={this.productAdded} added={this.state.productAdded}/>
        </Layout>
    )
  }
}