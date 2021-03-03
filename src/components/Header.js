function Header({ setTabs }) {
	return (
		<>
			<header className="header">
				<span>Fruit Basket</span>
				<div className="navbar">
					<button
						value="home"
						onClick={(event) => {
							console.log(event.target.value);
							setTabs(event.target.value);
						}}
					>
						Home
					</button>
					<button value="cart" onClick={(event) => setTabs(event.target.value)}>
						Cart
					</button>
					<button
						value="favourites"
						onClick={(event) => setTabs(event.target.value)}
					>
						Favourites
					</button>
				</div>
			</header>
		</>
	);
}

export default Header;
