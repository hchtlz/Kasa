import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from './components/Banner/Banner'

function App() {
	return (
		<div className="App">
			<Header />
			<main>
        <Banner />
			</main>
			<Footer />
		</div>
	);
}

export default App;