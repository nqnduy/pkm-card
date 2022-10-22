import React from 'react';

const Header = (props) => {
    return (
		<>
			<header>
				<h1>
					Pokemon Cards <sup>V2</sup>
				</h1>
				<section className="intro">
					<p>
						A collection of <mark>advanced CSS</mark> styles to create
						<mark>realistic-looking effects</mark> for the faces of Pokemon cards.
					</p>
					<br />
					<p>
						The cards use <mark>3d transforms</mark>, <mark>filters</mark>, <mark>blend modes</mark>, and interactions to provide a unique
						experience when taking a closer look!
					</p>
				</section>
			</header>
			<style jsx global>{`
				header {
					margin-bottom: 4rem;
					display: grid;
					grid-template-columns: 1fr;
					grid-gap: 30px;
					max-width: 900px;
					margin: auto;
                    color: white;
				}

				.showcase {
					z-index: 99;
					max-width: min(330px, 80vw);
					margin: auto;
				}
				header h2 {
					margin-top: 0;
					font-weight: 100;
				}
				p.small {
					font-size: 0.875rem;
					opacity: 0.75;
				}
				h1 {
					margin-top: 0;
					margin-bottom: 0.25em;
				}
				p {
					margin: 0 0 0.25em;
					line-height: 1.5;
				}

				h2 {
					margin-top: 4em;
					margin-bottom: 0.25em;
				}
				h2 + p,
				h2 + p + p {
					font-style: italic;
					margin-bottom: 1em;
				}
				hr {
					border: none;
					background: white;
					height: 1px;
					opacity: 0.25;
					margin: 1em -1em;
				}
				h1 sup {
					font-weight: 300;
					font-size: 0.5em;
				}

				h2 sup {
					font-weight: 300;
					font-size: 0.75em;
				}

				mark {
					background: #006065;
					color: white;
					font-style: italic;
					font-weight: bold;
					padding-inline: 0.25em;
					border-radius: 3px;
				}

				:global(*) {
					box-sizing: border-box;
				}

				:global(body, html) {
					height: 100%;
					padding: 0;
					margin: 0;
					scroll-behavior: smooth;
				}

				:global(body) {
					font-family: "Roboto";
					background-color: rgb(57, 60, 66);
				}
			`}</style>
		</>
	);
};
Header.propTypes = {};

export default (Header);