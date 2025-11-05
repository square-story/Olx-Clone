**OLX Clone**


A full-featured clone of the popular OLX marketplace platform, built using React, TypeScript, and Vite. This project replicates core OLX functionalities such as listing products, browsing items, item details view, and user authentication.

🛠 Tech Stack
Frontend: React + TypeScript

Styling: TailwindCSS

Build Tools: Vite

State Management: React Context API

Services: Firebase (for config/auth/storage)

Linting: ESLint

🚀 Features
Product Listings: View all available items for sale.

Item Details: Individual item pages with detailed information.

Sell Page: Easy interface to post new listings.

User Authentication: Basic auth system (Firebase backend).

Responsive UI: Works across desktop & mobile devices.

Modern UI: Built with reusable React components and TailwindCSS.

📁 Folder Structure
```bash
src/
  ├── assets/         # Static files and images
  ├── components/     # Reusable UI components
  ├── contexts/       # React Context providers (Auth, App, etc.)
  ├── pages/          # Application pages (Home, Sell, ItemDetails)
  ├── services/       # Service logic and API wrappers (firebaseConfig)
  ├── App.tsx         # Main React component
  └── main.tsx        # Entry point
public/               # Public assets (favicon, index.html)
```
💻 Local Development
Clone the repository:

```bash
git clone https://github.com/square-story/Olx-Clone.git
cd Olx-Clone
```
Install dependencies:

```bash
npm install
```
Start development server:

```bash
npm run dev
```
🎯 How It Works
Home Page: Displays all products fetched from the backend.

Sell: Allows users to post new products (requires authentication).

Item Details: Shows product images, descriptions, prices, and seller info.

Authentication: Managed using Firebase through React context.

📌 Future Improvements
Enhanced authentication (OAuth, phone/email verification)

Chat between buyers and sellers

Image uploads and cloud storage integration

Search and filtering options

Admin dashboard for managing listings

📝 License
This project is for educational purposes and is not affiliated with OLX.

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss proposed updates.

Happy coding!

Let me know if you'd like to add more details or specific deployment instructions!

