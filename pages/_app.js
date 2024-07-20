import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useRouter } from 'next/router';
import { IntlProvider } from "react-intl";
import { useEffect, useState } from "react";
import ru from "../i18n/ru.json";
import uz from "../i18n/uz.json";


import "@/styles/globals.css";

import { PreLoader } from "@/components/Loader";
	const messages = {
		ru,
		uz
	};

	function getDirection(locale) {
		return "ltr";
	}

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);

	const { locale } = useRouter();
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [loading]);

	const title = "Green Card | Lottery";
	const description =
	"Sizning Green Card chiqish uchun hamma hizmat bizning kompanyamizda";
	const avatar =
		"/assets/green-card.png";
	const url = "https://www.greencardlotterry.com/";



	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} key="desc" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta property="og:title" content={title} />
				<meta property="og:site_name" content={title}></meta>
				<meta property="og:description" content={description} />
				<meta property="og:image" content={avatar} />
				<meta property="og:image:width" content="612" />
				<meta property="og:image:height" content="612" />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />

				<meta property="twitter:image" content={avatar} />
				<meta property="twitter:card" content="shakhzod" />
				<meta name="twitter:creator" content="@shakhzod" />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />

				<link rel="canonical" href={url} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/icons/favicon/green-card.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/icons/favicon/green-card.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/icons/favicon/green-card.png"
				/>
				<link
					rel="manifest"
					href="/assets/icons/favicon/site.webmanifest"
				/>
			</Head>
			{/* // @ts-ignore */}
			<IntlProvider locale={locale} messages={messages[locale]}>
			<ThemeProvider attribute="class" defaultTheme="dark">
				<Component {...pageProps} loading={loading} dir={getDirection(locale)}/>
                <Analytics />
				{loading && <PreLoader />}
			</ThemeProvider>
			</IntlProvider>
		</>
	);
}
