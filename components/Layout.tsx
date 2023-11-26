import { useRouter } from "next/router";
import { FC, ReactNode, Fragment } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import FooterBar from "@/components/FooterBar";
interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = props => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
		<Fragment>
			<Head>
				<link
					rel="icon"
					href="/favicon.ico"
					type="image/x-icon"
					sizes="any"
				/>
				<link
					rel="shortcut icon"
					href="/favicon.ico"
					type="image/x-icon"
					sizes="any"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<header></header>
			<main className={`${pathname === "/admin" ? null : "mt-12"}`}>
				{props.children}
			</main>
			<footer>
				<FooterBar />
			</footer>
			<div id="portal"></div>
		</Fragment>
  );
};

export default Layout;
