import { variable } from "styles/variable";

export default function Header() {
	return (
		<>
			<header>
				<div>Menu</div>
				<div>Flirty Flowers</div>
				<div>Cart</div>
			</header>
			<style jsx>{`
				header {
					display: flex;
					align-items: center;
					justify-content: space-between;

					padding: 50px 0;
					div {
						font-family: "Syncopate", sans-serif;
						font-size: 24px;
						font-weight: 600;

						text-transform: uppercase;
						letter-spacing: 1px;
						color: #464646;
					}
				}
			`}</style>
		</>
	);
}
