import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const redBG = { color: "red" };

function ListProducts({ data, setData }) {
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
	console.log({ data });
	return (
		<div
			style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
		>
			<>
				{data &&
					data.map(
						({ id, name, image, isFavourite, cost, quantity, maxQuantity }) => {
							return (
								<div key={id}>
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

										<div>
											<span className="price">{cost} Rs</span>
											<span className="discount-price">Rs{cost + 20}</span>
											<FontAwesomeIcon
												onClick={() => addFavourite(id)}
												style={isFavourite && redBG}
												icon={faHeart}
											/>
										</div>
										<button className="button" onClick={() => addToCart(id)}>
											Add To Cart
										</button>
									</div>
								</div>
							);
						}
					)}
			</>
		</div>
	);
}

export default ListProducts;
