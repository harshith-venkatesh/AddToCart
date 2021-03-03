import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const redBG = { color: "red", padding: "0.2rem" };

function CardProducts({ data, setData }) {
	const addToCart = (id) => {
		const addToCart = data.map((item) => {
			if (item.id === id) {
				return { ...item, quantity: item.quantity + 1 };
			}
			return item;
		});
		setData(addToCart);
	};

	const addFavourite = (id) => {
		const wishList = data.map((item) => {
			if (id === item.id) {
				return { ...item, isFavourite: !item.isFavourite };
			}
			return item;
		});
		setData(wishList);
	};

	const removeFromCart = (id) => {
		const addToCart = data.map((item) => {
			if (item.id === id) {
				return { ...item, quantity: item.quantity - 1 };
			}
			return item;
		});
		setData(addToCart);
	};
	console.log({ data });
	return (
		<div
			style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
		>
			<>
				{data ? (
					data.map(
						({ id, name, image, isFavourite, cost, quantity, maxQuantity }) => {
							return (
								<div style={{ display: "flex", flexWrap: "wrap" }}>
									{quantity > 0 && (
										<div key={id} className="card-display">
											<div className="item-card">
												<img
													style={{
														width: "10rem",
														height: "8rem",
														position: "relative"
													}}
													src={image}
													alt={image}
												/>
												<span className="item-name">{name}</span>
												<span className="price">{quantity}</span>

												<div>
													<span className="price">{cost} Rs</span>
													<span className="discount-price">Rs{cost + 20}</span>
													<FontAwesomeIcon
														onClick={() => addFavourite(id)}
														style={isFavourite && redBG}
														icon={faHeart}
													/>
												</div>
												<div>
													<button
														disabled={quantity === maxQuantity}
														className="button"
														onClick={() => addToCart(id)}
													>
														+
													</button>
													<button
														className="button"
														onClick={() => removeFromCart(id)}
													>
														-
													</button>
												</div>
											</div>
										</div>
									)}
								</div>
							);
						}
					)
				) : (
					<>
						<header> Cart is Empty</header>
					</>
				)}
			</>
		</div>
	);
}

export default CardProducts;
