/**@jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe("Index page", () => {
    it("should render", () => {
        render(<Home />);
        const element = screen.getByTestId('home-page');
        expect(element).toBeInTheDocument();
    });
    it("should render correct movie title", () => {
       const movieData = [
                {
                    "id": 1,
                    "title": "Kung Fu Panda",
                    "made": "2008",
                    "director": "Mark Osbome",
                    "caste": [
                        "Jack Black",
                        "Jackie Chan"
                    ],
                    "genere": [
                        "Action",
                        "Comedy"
                    ],
                    "image": "https://pixabay.com/get/g36b04522837c6555b5119b9e1b7ab44f1ecb4d217ed330fc8ac9173e2eff76e6a83939b645f2dca23e3782c259853f81ab269b43299ad402f8cc771afd0e1671c5bde16c4e5ba9d721c732afada4e86e_1920.jpg"
                }
            ];
        render(<Home movieData={movieData}/>);
        const checkContent = screen.getByTestId("title-content");
        expect(checkContent).toHaveTextContent(movieData[0]['title']);
    });
});