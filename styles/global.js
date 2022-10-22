import "antd/dist/antd.min.css";

const GlobalStyle = () => (
	<style jsx global>{`
		/*
		font-family: 'Cabin', sans-serif;
		font-family: 'Lora', serif;
		font-family: 'Playfair Display', serif;
		*/
		@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
		@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@100;500;600;700&display=swap");
		@import url("https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap");
		@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@100;700&display=swap");

		@font-face {
			font-family: "ProximaNova";
			src: url("../public/fonts/ProximaNovaRegular.eot");
			src: url("../public/fonts/ProximaNovaRegular.eot") format("embedded-opentype"),
				url("../public/fonts/ProximaNovaRegular.woff2") format("woff2"), url("../public/fonts/ProximaNovaRegular.woff") format("woff"),
				url("../public/fonts/ProximaNovaRegular.ttf") format("truetype"),
				url("../public/fonts/ProximaNovaRegular.svg#ProximaNovaRegular") format("svg");
			font-style: normal;
			font-weight: normal;
		}

		html,
		body {
			padding: 0;
			margin: 0;
			font-family: "CerebriSans";
			line-height: 1.3;
			font-size: 14px;
			width: 100%;
			color: white;
			background-color: #393c42;
		}


		#__next {
			overflow-x: hidden;
		}

		* {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			-ms-box-sizing: border-box;
			box-sizing: border-box;
		}
		img {
			max-width: 100%;
			display: block;
		}
	`}</style>
);

export default GlobalStyle;
