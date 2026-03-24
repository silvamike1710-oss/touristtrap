TouristTrap 
A Next.js travel portal where you can discover destinations and lose your wallet in style.
Project Structure
touristtrap/
├── public/
│   └── images/          # Static images (paris.jpg, tokyo.jpg, ny.jpg, rio.jpg, travel.jpg)
├── src/
│   ├── app/
│   │   ├── destinos/
│   │   │   └── page.jsx      
│   │   ├── layout.tsx        
│   │   ├── page.tsx           
│   │   └── globals.css
│   ├── components/
│   │   ├── layout.jsx         
│   │   └── CardDestino.jsx    
│   └── styles/
│       ├── Home.module.css
│       ├── Layout.module.css
│       ├── Destinos.module.css
│       └── CardDestino.module.css
Getting Started
Prerequisites

Node.js 18+
npm or pnpm

Installation
cd touristtrap
npm install
Running the Development Server
bashnpm run dev
Open http://localhost:3000 in your browser.
Pages

/ — Home page with a welcome message and link to destinations
/destinos — Grid of destination cards (Paris, Tokyo, New York, Rio de Janeiro)

Built With

Next.js 16 with Turbopack
TypeScript
CSS Modules