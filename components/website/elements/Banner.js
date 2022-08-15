import { variable } from "styles/variable";

export default function Banner() {
	return (
		<>
			<section className="Banner">
				<ul>
					<li>Intro</li>
					<li>About</li>
					<li>Feature</li>
				</ul>
				<h1 id="header__title">Art Objects</h1>
			</section>
			<style jsx>{`
				.Banner {
					position: relative;
					ul {
						position: absolute;
						left: 0;
						top: 100px;

						letter-spacing: 1px;
						font-family: 'Syncopate', sans-serif;
						color: ${variable.color.text_color};
						font-weight: 600;
						text-transform: uppercase;
						li {
							margin: 10px 0;
						}
					}
					h1 {
						font-family: 'Bai Jamjuree', sans-serif;
						font-size: 20vw;
						font-weight: 600;

						text-align: center;
						text-transform: uppercase;
					}
				}
			`}</style>
		</>
	);
}
