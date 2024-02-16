import * as React from "react"
import{
    Outlet,
    Link,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom"
import styled from "styled-components";

const Head = styled.section`
  display: flex;
`

//for Head"Er", get it? lol, lmao.
const Er = styled.div` 
  height: 100vh; /* Full height */
  width: 11%;
  min-width: 200px;
  background-color: #010018;
`

//What decorates a Head(er)? Jewelry! What's a short word for Jewelry? Ice! lol, lmao.
const Ice = styled(Link)`
color: blue;
text-decoration: none;
padding: 10px 15px;
text-decoration: none;
font-size: 18px;
color: white;
display: block;
`

export default function Layout() {
  return (
    <Head>
      <Er>
        <nav>
          <ul>
            <li><Ice to="/">Mortal Mangaka</Ice></li>
            <li>
              <Ice to="/">Home</Ice>
            </li>
            <li>
              <Ice to="/manga">Manga</Ice>
            </li>
            <li>
              <Ice to="/contact">Contact</Ice>
            </li>
          </ul>
        </nav>
      </Er>
      <Outlet />
    </Head>
  );
}