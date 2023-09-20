import Header from "./components/Header/Header";
import Banner from './components/Banner/Banner'
import Carrousel from './components/Carrousel/Carrousel'
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
        <Banner />
        <Carrousel />
			</main>
			<Footer />
		</div>
	);
}

export default App;