import Head from "next/head";
import CONFIG from "web.config";
import Header from "@/website/elements/Header";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useNextResponsive } from "plugins/next-reponsive";
import GtagScript from "../tracking/GtagScript";
import dynamic from 'next/dynamic';

const Variable = dynamic(() => import('styles/variable'));
const GlobalStyle = dynamic(() => import('styles/global'));
const CommonStyle = dynamic(() => import('styles/common'));

function MasterPageExample({ pageName, children, hidePrevButton = false, hideFooter = false }) {
	const router = useRouter();
	const { device, breakpoint, orientation } = useNextResponsive();

	return (
		<>
			<NextSeo nofollow={CONFIG.environment != "production"} noindex={CONFIG.environment != "production"} />
			<Head>
				<title>
					{CONFIG.site.title} | {pageName || "Trang chủ"}
				</title>
				<meta name="description" content={CONFIG.site.description}></meta>

				<link rel="shortcut icon" href={`${CONFIG.getBasePath()}/favicon.ico`} />

				<meta property="og:title" content={CONFIG.site.title} />
				<meta property="og:description" content={CONFIG.site.description} />
				<meta property="og:url" content={CONFIG.NEXT_PUBLIC_BASE_URL + router.asPath} />
				<meta property="og:image" content={`${CONFIG.NEXT_PUBLIC_BASE_URL}/share.png`} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="fb:app_id" content={CONFIG.NEXT_PUBLIC_FB_APP_ID} />

				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			{/* TRACKING SCRIPTS - CHANGE THE ID TO THE CORRECT ONE*/}
			<GtagScript id="G-EE9VED6EC3" />

			{/* - STYLE OF THE WEBSITE -
      		USE THIS COMPONENT TO AVOID CSS CONFLICTED WITH ADMIN PANEL */}
			<Variable />
			<GlobalStyle />
			<CommonStyle />
			<Header />
			<main className={[device, orientation, breakpoint].join(" ")}>{children}</main>
		</>
	);
}

export default MasterPageExample;
