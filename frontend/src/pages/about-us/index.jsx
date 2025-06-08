import { useLoaderData } from "react-router";

const AboutUs = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            About us
        </div>
    )
}
export default AboutUs;