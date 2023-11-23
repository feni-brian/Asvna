import { Button } from "@/components/ui/button";
import Image from "next/image";

const FifthSection = () => {
	return (
		<div className="py-20 px-10 items-center justify-center md:flex">
			<div className="items-center md:w-1/2 pb-20 md:pb-0 space-y-20 justify-center">
				<div className="text-4xl flex">The best platform for cross-team work</div>
				<div className="text-2xl md:w-5/6">
					Get more work done across teams with unlimited monthly actions, the ability to track hundreds of projects in one place, and by reporting against your entire organisation.
				</div>
				<Button className="bg-[#000] text-md rounded-sm">Get Started</Button>
			</div>
			<div className="bg-gradient-to-r from-gray-400 to-gray-100 items-center justify-center rounded-md flex p-6">
				<Image src="/images/tab-3.webp" alt="logo" width={530} height={500} className="rounded-md w-80 h-60 md:w-96 md:h-80" />
			</div>
		</div>
	);
};

export default FifthSection;
