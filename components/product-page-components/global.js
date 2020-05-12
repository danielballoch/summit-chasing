import css from 'styled-jsx/css'

export default css.global`
    html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
      }
      .grid img {
          max-width: 575px;
      }

      .img {
          width: 100%;
          height: 100%;
      }

      .cardsmall {
        margin: 1rem;
        padding: 1.5rem;
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
