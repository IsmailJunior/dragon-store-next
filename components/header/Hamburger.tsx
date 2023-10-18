import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import classes from "@/components/header/Hamburger.module.css";

interface IHamburgerProps {
	dataChanged: Function;
}

function Hamburger(props: IHamburgerProps) {
	const { dataChanged } = props;
	const hamburgerRef: any = useRef();
	const [isChecked, setIsChecked] = useState(false);
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 760px)` });
	const onClickHandler = () => {
		setIsChecked(hamburgerRef.current?.checked);
		dataChanged(() => isChecked);
	};

	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
		if (isMinWidthMedium && hamburgerRef.current.checked === true) {
			hamburgerRef.current.checked = false;
		}
	}, [mediaQuery, isMinWidthMedium]);

	return (
		<label
			onClick={onClickHandler}
			htmlFor="hamburger"
			className={classes.bar}
		>
			<input ref={hamburgerRef} id="hamburger" type="checkbox" />
		</label>
	);
}

export default Hamburger;
