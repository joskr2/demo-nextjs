# Restaurant Demo App

A modern web application for searching and viewing restaurants, built with Next.js 14 and TypeScript. This project demonstrates the implementation of server-side rendering, dynamic routing, and modern UI components.

## 🌟 Features

- **Real-time Restaurant Search**
  - Instant search functionality with server actions
  - Dynamic filtering of restaurants
  - Server-side rendering for optimal performance

- **Restaurant Details**
  - Detailed view for each restaurant
  - High-quality image display
  - Rating and review system
  - Location information
  - Booking functionality (UI only)

- **Modern UI/UX**
  - Responsive design (mobile-first approach)
  - Modern interface with Tailwind CSS
  - Custom components with Shadcn/ui
  - Loading states and error handling
  - Dynamic metadata generation for SEO

## 🛠️ Technologies

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** 
  - Tailwind CSS
  - Shadcn/ui components
- **Data Fetching:** Server Actions
- **Fonts:** Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd demo-store-app
```
3. Install dependencies:
```bash
pnpm install
```

## 🚀 Usage
- **Development Server**
  - Run the development server:

    ```bash
    pnpm run dev
    ```

  - Run the development server:
  - Open [http://localhost:3000] in your browser.


- **Production Build**
  - Create a production build:

    ```bash
    pnpm run build
    ```   
  - Start the production server:

    ```bash
    pnpm start
    ```  

  - Open [http://localhost:3000] in your browser.

## 🏗️ Project Structure

demo-store-app/
├── app/
│   ├── [id]/              # Dynamic restaurant pages
│   ├── components/        # Reusable components
│   ├── api/              # API integration
│   └── page.tsx          # Home page
├── public/               # Static assets
└── components/
    ├── custom/          # Custom components
    └── ui/              # UI components

## 🔍 Key Features Implementation

- **Search Functionality**
 - Server-side search implementation
 - Real-time updates using server actions
 - URL-based search parameters

 - **Restaurant Details**
 - Dynamic routing for restaurant pages
 - OpenGraph image generation
 - Metadata optimization for SEO
 - Error handling and loading states

## 📱 Responsive Design

- **The application is fully responsive and works across**
 - Mobile devices
 - Tablets
 - Desktop computers

##  🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

##  📄 License

This project is licensed under the MIT License - see the LICENSE file for details.