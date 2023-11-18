import Footer from "./footer/page"
import Navbar from "./navbar/page"
import FirstSection from "./section-01/page"
import SecondSection from "./section-02/page"
import ThirdSection from "./section-03/page"
import FourthSection from "./section-04/page"
import FifthSection from "./section-05/page"
import SixthSection from "./section-06/page"
import SeventhSection from "./section-07/page"
import EigthSection from "./section-08/page"

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EigthSection />
            <Footer />
        </div>
    )
}

export default LandingPage

