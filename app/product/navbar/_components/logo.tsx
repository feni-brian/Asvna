import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/">
			<Image src="/images/bird-logo.png" alt="Bird Company Logo" width={80} height={80} className="mr-6" />
		</Link>
	);
};
