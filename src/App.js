import { useState } from "react";
import "./styles.css";
import { productData } from "./constants/data";
import ListProducts from "./components/ListProducts";
import CardProducts from "./components/CartProducts";
import WishList from "./components/Wishlist";
import Header from "./components/Header";

export default function App() {
	const [tabs, setTabs] = useState("home");
	const [data, setData] = useState(productData);
	const [darkMode, setDarkMode] = useState(false);
	console.log({ data });
	return (
		<div className={darkMode ? "App" : "dark-mode"}>
			<div className="navbarToggle">
				<button onClick={() => setDarkMode((prev) => !prev)}>
					{darkMode ? "Dark" : "Light"}
				</button>
			</div>
			<Header setTabs={setTabs} />

			{tabs === "home" && <ListProducts data={data} setData={setData} />}
			{tabs === "cart" && <CardProducts data={data} setData={setData} />}
			{tabs === "favourites" && <WishList data={data} setData={setData} />}
		</div>
	);
}
