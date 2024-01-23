import Gig from "./components/Gig.jsx";
import "./App.css";

function App() {
    return (
        <>
            <Gig
                name="Parcels"
                image="src/assets/parcels.jpg"
                description="Welcome to an unforgettable night of music with Parcels, the
                            sensational band that combines groovy rhythms with soulful
                            melodies! Join us for a mesmerizing live concert experience that
                            will leave you dancing and singing along."
                datetime="7pm 21/02/2024"
                location="Berlin, Germany"
            />

            <Gig
                name="Jungle"
                image="src/assets/jungle.jpg"
                description="Get ready for a night of unparalleled excitement with Jungle, 
                            the dynamic ensemble that effortlessly blends funk, soul, and 
                            electronic vibes to create a sonic journey like no other. This 
                            highly acclaimed band is set to transform your event into a Jungle 
                            Groove Extravaganza, leaving your audience mesmerized and craving 
                            for more."
                datetime="8pm 23/02/2024"
                location="London, UK"
            />
        </>
    );
}

export default App;
