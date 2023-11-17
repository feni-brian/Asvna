"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const FourthSection = () => {
	const [, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="flex flex-col space-y-10 items-center justify-center px-20">
			<div className="flex py-20">
				<div className="space-y-6 flex flex-col">
					<div className="text-gray-800 text-xl px-10">DRIVE EFFICIENCY ACROSS TEAMS</div>
					<div className="text-4xl w-96 px-10">Manage complex work easily.</div>
					<div className="text-xl text-gray-600 px-10">Connect what needs to get done, who is responsible, and how to get it done.</div>
					<div className="md:flex items-center md:space-x-60 space-y-10 p-10">
						<div>
							<Image src="/images/tab-1.webp" alt="Image" width={700} height={700} />
						</div>
						<div className="space-y-10 border-b">
							<div className="text-3xl">Timeline</div>
							<div className="w-96 text-xl text-gray-600">
								See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks—and create plans your team can count on.
							</div>
							<div className="flex cursor-pointer">
								<div className="text-lg">Get Started</div>
								<ArrowRight className="h-6 w-6 ml-4" />
							</div>
						</div>
					</div>
					<div className="md:flex items-center md:space-x-60 space-y-10 p-10">
						<div>
							<Image src="/images/tab-2.webp" alt="Image" width={700} height={700} />
						</div>
						<div className="space-y-10 border-b">
							<div className="text-3xl">Boards</div>
							<div className="w-96 text-xl text-gray-600">
								Make it easy for your team to focus on tasks currently at hand. Define each stage of work to see what is important and where things are getting stuck.
							</div>
							<div className="flex cursor-pointer">
								<div className="text-lg">Get Started</div>
								<ArrowRight className="h-6 w-6 ml-4" />
							</div>
						</div>
					</div>
					<div className="md:flex items-center md:space-x-60 space-y-10 p-10">
						<div>
							<Image src="/images/tab-3.webp" alt="Image" width={700} height={700} />
						</div>
						<div className="space-y-10 border-b">
							<div className="text-3xl">Timeline</div>
							<div className="w-96 text-xl text-gray-600">
								See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks—and create plans your team can count on.
							</div>
							<div className="flex cursor-pointer">
								<div className="text-lg">Get Started</div>
								<ArrowRight className="h-6 w-6 ml-4" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FourthSection;
