import './App.scss'
import "../node_modules/slick-carousel/slick/slick-theme.css"
import NavbarTOP from './components/NavbarTOP';
import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import SectionProducts from './components/SectionProducts';
import SectionCategories from './components/SectionCategories';
import SectionServices from './components/SectionServices';
import SectionSignUp from './components/SectionSignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <NavbarTOP />
        <Header />
        <hr />
        <SectionHeader />
        <SectionProducts />
        <SectionCategories />
        <SectionServices />
        <SectionSignUp />
        <Footer />
    </div>
  );
}

export default App;
