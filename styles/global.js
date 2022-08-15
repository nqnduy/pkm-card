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
		h1,
		h2,
		h3,
		h4,
		h5 {
			padding: 0;
			margin: 0;
			font-weight: normal;
		}

		p {
			padding: 0;
			margin: 0;
		}
		html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            font-weight: normal;
            vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
            display: block;
        }

		ol li,
		ul li {
			list-style: none;
			line-height: 1.5em;
		}

		hr {
			border-top: 1px solid #dadada;
		}

		a,
		a:hover,
		a:active {
			text-decoration: none;
		}

		img {
			max-width: 100%;
			display: block;
		}

		select {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			border: 0;
			background: none;
		}

		main {
		}

		pre {
			margin-bottom: 0;
		}
		code.hljs {
			padding: 0.8rem;
		}

		.red-circle {
			background-color: red;
			border-radius: 50%;
			width: 80px;
			height: 80px;
		}
	`}</style>
);

export default GlobalStyle;
