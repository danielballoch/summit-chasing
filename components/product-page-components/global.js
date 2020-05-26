import css from 'styled-jsx/css'

export default css.global`
    html,
      body {
        padding: 0;
        margin-top: 57px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      .footer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          text-align: center;
        //   background-color: #0070f3;
        //   color: white;
          padding-top: 20px;
          height: 100%;
      }
      .bot-foot{
          color: black;
          background-color: white;
          padding: 10px 0;
          width: 100%;
          height: 100%;
          margin: 0;
      }
      .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .footer-links {
          margin: 5px 0;
      }
      .footer-links a {
          padding: 10px;
          transition: .3s;
      }
      
      .sticky {
        position: sticky;
        top: 66px;
      }
      .product-stick {
          max-height: 80vh;
          max-width: 500px;
      }

      .checkout-button{
          margin: 1rem;
      }
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
     

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }
      .body {
          max-width: 500px;
          text-align: left;
      }

      .featured {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 50px 0;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
      }
      .index-image {
        transition: .3s;
        text-align: center;
        width: 30%;
        height: auto;
      }
      .index-image:hover {
          color: #0070f3;
          cursor: pointer;
      }
      .index-image img {
        width: 100%;
      }

      .navbar {
          max-width: 1200px;
          margin: auto;
      }
      .nav-logo:hover {
          cursor: pointer;
          
      }
      .nav-summit {
          color: #0070f3;
      }
      .nav-outer{
        // background-color: #0070f3; 
        background-color: #f8f9fa; 
        // background-color: #707070;
        opacity: .9; 
        width: 100%;
        z-index: 1030;
        height: 57.6px;
        position: fixed;
        top:0;
      }

      .raffle h1 {
          font-family: 'Arial';
          font-size: 50px;
          letter-spacing: 6px;
        //   text-decoration: underline;
      }
      .indent-paragraph{
        border-left: 10px solid #707070;
        padding-left: 20px;
      }
      .raffle-header {
          padding: 20px;
          background-color: #f1f7fe;
        //   opacity: 5%;
        //   color: #0070f3;
        color: #212529;
        //   color: white;
          border-radius: 50px 50px 0 0;
      }
      .product-page-btn{
          color: #212529;
          background-color: #f1f7fe;
          border: none;
      }


      .cardsmall {
        margin: .5rem;
        padding: .6rem 1rem;
        text-align: center;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
      .card {
        margin: 1rem;
        flex-basis: 45%;
        max-width: 1200px;
        width: 100%;
        padding: 1.5rem;
        text-align: center;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
      a:hover{
        text-decoration: none;
      }
      .notification {
          position: fixed;
          z-index: 100;
          top: 33.6px;
          background-color: #4caf50;
          color: white;
          width: 100%;
          text-align: center;
          transition: 1s;
      }
      .notif_active{
        top: 57.6px;
      }

      .active {
        color: #0070f3;
        border-color: #0070f3;
        cursor: pointer;
      }
      .hov:hover,
      .hov:focus,
      .hov:active {
        color: #0070f3;
        border-color: #0070f3;
        cursor: pointer;
      }

      .card h3 {
        margin: 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }

      * {
        box-sizing: border-box;
      }
`
