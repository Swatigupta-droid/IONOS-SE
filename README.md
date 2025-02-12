#HTML Template 

## Task Overview
This project is an HTML template that dynamically switches views based on user interaction. The template starts by displaying the **Initial View**, and when the user clicks the **"I don’t need Hosting"** link, it transitions to the **Feedback View**.

## Features
- Displays **Initial View** by default.
- Changes to **Feedback View** when the user interacts with the specified link.
- Uses JavaScript for state management.
- Supports Bootstrap Css Framework.

## Technologies Used
- **HTML5** for structuring content.
- **CSS (or Bootstrap)** for styling.
- **JavaScript** for handling user interaction.

## Installation & Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/Swatigupta-droid/IONOS-SE.git
   ```
2. Navigate to the project folder:
   ```sh
   cd IONOS-SE
   ```
3. Open `index.html` in a web browser.

## Implementation
### HTML Structure
- A **container** holding the initial and feedback views.
- An **image** placeholder that updates dynamically.
- A **button/link** to trigger the state change.

### JavaScript Functionality
- A function to toggle between views.
- Updates the image and text content accordingly.

## How It Works
1. **Initial Load**
   - Displays the **Initial View** image.
   - Shows hosting details and a call-to-action.
2. **User Clicks "I don’t need Hosting"**
   - Image changes to **Feedback View**.
   - Displays a thank-you message with an alternative action.


## License
This project is open-source and available under the [MIT License](LICENSE).

