"use client";

import React, { useEffect, useState } from "react";
import { ActionButtons } from "./_components/buttons";
import { Logo } from "./_components/logo";
import { MenuBar } from "./_components/menu";

const Navbar = () => {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={`flex items-center justify-between space-x-10 bg-[#E5E4E2] md:px-10 sticky top-0 z-50 ${hasScrolled ? "shadow-sm" : ""}`}>
			<div className="flex w-2/3 md:w-1/2">
				<Logo />
				<MenuBar />
			</div>
			<ActionButtons />
		</div>
	);
};

export default Navbar;
