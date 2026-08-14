# TéléSport - Olympic Games History Dashboard

Interactive web application to visualize historical performance data of countries in the Olympic Games.

## 🚀 Features

- **Interactive Dashboard**: View medal counts by country with interactive charts
- **Country Details**: Explore detailed statistics for each participating country
- **Data Visualization**: Interactive charts powered by Chart.js
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern Stack**: Built with React 19, TypeScript, and Tailwind CSS

## 📋 Prerequisites

- **Node.js** 22 LTS or higher
- **npm** (included with Node.js)
- **vite** 7

## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/openclassrooms/p2-dfsjs.git
cd p2-dfsjs
```

Install dependencies:

```bash
npm install
```

## 🎯 Usage

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

### Production Build

Build the application for production:

```bash
npm run build
```

### Linting

Run the linter to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```text
p2-dfsjs/
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── CardManager.tsx
│   │   ├── ChartManager.tsx
│   │   ├── Header.tsx
│   │   └── PageLoader.tsx
│   ├── data/                       # Data source (currently local, future API)
│   │   └── olympicsData.ts
│   ├── hooks/                      # Data access hook
│   │   └── useData.ts
│   ├── layouts/                    # Global layouts
│   │   └── AppLayout.tsx
│   ├── models/                     # TypeScript models
│   │   ├── olympicsData.ts
│   │   └── Status.ts
│   ├── pages/                      # Page components
│   │   ├── CountryPage.tsx
│   │   └── DashboardPage.tsx
│   ├── routes/                     # Route configuration
│   │   └── AppRoutes.tsx
│   ├── utils/                      # Logic and data preparation
│   │   ├── calcUtils.ts
│   │   └── chartUtils.ts
│   ├──  App.tsx                    # Main application component
│   ├── main.tsx                    # React entry point
│   └── index.css                   # Global styles
├── index.html                      # Main HTML page
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── .eslintrc.cjs                   # ESLint configuration
```

## 🔧 Tech Stack

- **React 19** - UI library with latest features
- **TypeScript** - Static type checking
- **Vite 5** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router 6** - Client-side routing
- **Chart.js** - Interactive data visualization
- **ESLint** - Code quality and consistency

## 📊 Data

The application currently uses mock data to simulate Olympic Games statistics. This architecture is designed to facilitate future integration with a REST API backend.

## 🎨 Design

The application features:

- Clean, modern interface optimized for data visualization
- Responsive layout adapting to all screen sizes
- Interactive charts with hover effects
- Smooth navigation between pages

## 📚 Documentation

For more information on the technologies used:

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is available for educational and personal use.

---

**Built with React 19 + TypeScript + Vite + Tailwind CSS**
