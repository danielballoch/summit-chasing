import App from 'next/app'
import Layout from '../components/layout.js'
// import fetch from 'isomorphic-unfetch'
// import Cookies from 'next-cookies'
// import cookiejs from 'js-cookie'


export default class MyApp extends App {
    
    // componentDidMount(ctx){
    //     // cookiejs.set('User', 2, { expires: 7 });
    //     // return{
    //     //     cookie1 : cookiejs.get(),
    //     //     // cookie2 : Cookies(ctx)
    //     // }
    // }

    // constructor(props) {
    //     // super(props);
    //     // this.state = {User1: props.cookie1};
    //     // // this.state = {User2: props.cookie2};
    //   }

  render () {
      console.log('is this app shit working')
    // console.log(this.state.User1)
    // console.log(this.state.User2)
    const { Component, pageProps} = this.props
    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    )
  }
}