# Events-planet

My project live link https://eventplanet-8041f.web.app

- Authentication:Enables user registration, login, and logout functionalities, ensuring secure access to personalized features.
- Image Carousel:

Feature: An image carousel is implemented using the react-spring library, allowing users to view multiple images with navigation controls.
Functionality: Utilizes a full-width carousel with three slides, each containing an image. Navigation buttons (❮ and ❯) allow users to move between slides.

- Animation with AOS:

Feature: Animations are applied to components using the AOS (Animate On Scroll) library, providing a visually appealing fade-up effect.
Functionality: The useEffect hook initializes AOS with a duration of 2000ms. Components have the data-aos attribute for defining the animation effect.

- Dynamic Cards for Events:

Feature: Cards are dynamically generated to display event information, leveraging the Cards component.
Functionality: Maps through the events array, creating a card for each event using the Cards component.

- Loading State:

Feature: A loading state is managed to handle asynchronous operations, ensuring proper user feedback during data fetching or authentication.
Functionality: The loading state is toggled using the setLoading function, allowing components to show loading indicators.
