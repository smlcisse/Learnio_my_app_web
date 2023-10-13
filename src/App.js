import logo from './logo.svg';
import './App.css';
import Header from "./composant/Header"
import Footer from "./composant/Footer"
import MonProfil from "./composant/MonProfil"
import Parent from "./composant/Parent"
import DisplayImage from "./composant/DisplayImage"
import Listing from "./composant/Listing"
import MonComposant from "./composant/MonComposant"
import Car from "./composant/Car"
import FavoriteColor from './composant/FavoriteColor';
function App() {
  /*const photo = {
    name: "Image vectorielle",
    url:"https://www.macapflag.com/blog/wp-content/uploads/2020/10/image-vectorielle-TITRE.jpg"
  }*/
  return (
  <div  className = "sml">
    <Header lastname = "" firstname = ""/>,
    <Footer/>
    <MonProfil/>
    <Parent/>
    <Listing/>
    <MonComposant/>
    <DisplayImage name = "image vectorielle" url = "https://www.macapflag.com/blog/wp-content/uploads/2020/10/image-vectorielle-TITRE.jpg"/>
    <Car/>
    <FavoriteColor/>
  </div>
  );
}
export default App;
