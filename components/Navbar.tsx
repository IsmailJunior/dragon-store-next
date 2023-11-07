import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import {
	ShoppingBagIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { getNavbarDocs } from "@/utils/firebase";
import Portal from "@/components/Portal";
import Container from "@/components/ui/Container";
import Hamburger from "@/components/header/Hamburger";
import ListItem from "@/components/header/ListItem";
import MenuItem from "@/components/header/MenuItem";
import { type DocumentData } from "firebase/firestore";
function Navbar() {
	const [data, setData] = useState<DocumentData>();
	const [showMenu, setShowMenu] = useState(false);
	const [showMenuMobile, setShowMenuMobile] = useState(false);
	const [menuItem, setMenuItem] = useState(data?.at(0).tag);
	const currentTag = data?.filter(
		(menuListItem: any) => menuListItem.tag === menuItem
	)[0];
	const router = useRouter();
	const pathname = router.pathname;
	// const handleHamburgerClick = () => {
	// 	// e.preventDefault();
	// 	setShowMenuMobile(curr => !curr);
	// 	console.log(showMenuMobile);
	// };
	const onMouseEnterHandler = (identfier: string) => {
		setMenuItem(identfier);
		setShowMenu(true);
	};
	const onMouseLeaveHandler = () => {
		setShowMenu(false);
	};
	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 0) {
			setShowMenu(false);
		}
	};

	useEffect(() => {
		(async () => {
			const items = await getNavbarDocs();
			setData(items);
		})();
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<Fragment>
			<nav
				className={`overflow-hidden transition-[height,background] duration-500 ease-in-out backdrop-blur-lg w-screen z-20 top-0 font-light text-xs will-change-transform ${
					showMenu
						? "bg-opacity-100 bg-slate-200 shadow-xl"
						: "bg-opacity-80 bg-slate-300 shadow-none"
				}`}
				style={{
					height: showMenu
						? (currentTag?.primary?.items?.length + 1) * 57
						: showMenuMobile
						? 400
						: "3rem",
					position: pathname === "/" ? "fixed" : "absolute",
					display:
						pathname === "/admin" || pathname === "/admin/new"
							? "none"
							: "block",
				}}
				onMouseLeave={onMouseLeaveHandler}
			>
				<Container>
					<ul className="flex justify-between items-center gap-24 h-full flex-row-reverse z-50">
						<div className="hidden md:flex md:justify-between md:items-center md:w-full flex-row-reverse font-normal">
							{data?.map((navItem: any, i: number) => (
								<ListItem
									key={i}
									onMouseEnter={() =>
										onMouseEnterHandler(navItem.tag)
									}
									href={`/${navItem.href}`}
								>
									{navItem.tag}
								</ListItem>
							))}
						</div>
						<li className="flex justify-center items-center h-12 w-max md:hidden">
							<Hamburger
								dataChanged={(showMenuMobile: boolean) =>
									setShowMenuMobile(showMenuMobile)
								}
							/>
						</li>
					</ul>
					<div className="w-full flex flex-row-reverse gap-20 mt-10 text-xl font-semibold">
						<ul className="flex flex-col items-end">
							<h1
								className={`text-slate-500 text-xs font-light mb-4 pointer-events-none transition-transform ease-in-out duration-700 ${
									showMenu
										? "animate-fade -translate-y-0"
										: "-translate-y-5"
								}`}
							>
								{currentTag?.primary?.headline}
							</h1>
							{currentTag?.primary?.items.map(
								(item: any, i: number) => (
									<div
										className={`text-xl font-normal transition-transform ease-in-out top-0 duration-700 delay-100 ${
											showMenu
												? "animate-fade  -translate-y-0"
												: "-translate-y-5"
										}`}
										key={i}
									>
										<MenuItem href="#">
											{item.name}
										</MenuItem>
									</div>
								)
							)}
						</ul>
						<div className="flex gap-10">
							{currentTag?.secondary?.map(
								(menuList: any, i: number) => (
									<ul
										key={i}
										className="flex flex-col items-end"
									>
										<h1
											className={`text-slate-500 text-xs font-light mb-4 pointer-events-none transition-transform ease-in-out duration-700 ${
												showMenu
													? "animate-fade -translate-y-0"
													: "-translate-y-5"
											}`}
										>
											{menuList.headline}
										</h1>
										{menuList.items.map(
											(item: any, i: number) => (
												<div
													className={`text-xs font-normal transition-transform ease-in-out duration-700 delay-100 ${
														showMenu
															? "animate-fade -translate-y-0"
															: "-translate-y-5"
													}`}
													key={i}
												>
													<MenuItem href="#">
														{item.name}
													</MenuItem>
												</div>
											)
										)}
									</ul>
								)
							)}
						</div>
					</div>
				</Container>
			</nav>
			<Portal>
				<div
					className={`pointer-events-none flex z-10 fixed h-screen w-screen inset-0 backdrop-filter ease-in-out transition-opacity duration-300 delay-200 backdrop-blur-md bg-black/50 ${
						showMenu ? "opacity-100" : "opacity-0"
					}`}
				></div>
			</Portal>
		</Fragment>
	);
}
export default Navbar;
