import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Courses from "@/components/Courses";
import Categories from "@/components/Categories";
import Instructors from "@/components/Instructors";
import Feedback from "@/components/Feedback";
import Promotion from "@/components/Promotion";
import Footer from "@/components/Footer";

function Home () {
    return (
        <main>
            <Header />
            <Hero />
            <Results />
            <Courses />
            <Categories />
            <Instructors />
            <Feedback/>
            <Promotion />
            <Footer />
        </main>
    );
};

export default Home;
