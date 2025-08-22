# Frontend Structure

## Overview

The frontend is built with React, TypeScript, and TailwindCSS. It follows a modular component-based architecture.

## Import Alias

This project uses the `@` alias for imports, which maps to the `src` directory. This allows for cleaner imports:

- `@/components` instead of `../../components`
- `@/hooks/use-weather` instead of `../hooks/use-weather`
- `@/types/weather` instead of `../types/weather`

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout.tsx      # Main layout wrapper
│   ├── weather-button.tsx    # Button for fetching weather
│   ├── weather-card.tsx      # Card container for weather UI
│   ├── weather-display.tsx   # Weather information display
│   ├── weather-icon.tsx      # Weather condition icons
│   └── index.ts            # Barrel export for components
├── hooks/             # Custom React hooks
│   └── use-weather.ts  # Weather data fetching logic
├── lib/               # Library utilities
│   └── api-client.ts  # Hono RPC client for type-safe API calls
├── types/             # TypeScript type definitions
│   └── api.ts         # Re-exported API types from backend
├── app.tsx            # Main application component
├── app.css            # Application styles
├── index.css          # Global styles
└── main.tsx           # Application entry point
```

## Key Features

### Component Architecture

- **Layout**: Provides the main structure and gradient background
- **WeatherCard**: Encapsulates the card UI with header
- **WeatherButton**: Handles loading states and user interaction
- **WeatherDisplay**: Shows weather data with icons and formatting
- **WeatherIcon**: Maps weather conditions to appropriate icons

### Custom Hook

- **useWeather**: Manages weather data fetching, loading states, and error handling

### API Integration

- **Hono RPC Client**: Type-safe client for backend communication
- **Shared Types**: API types are defined in backend and imported to frontend
- **No Manual Typing**: The client automatically provides typed methods for all endpoints

### Type Safety

- All components use TypeScript interfaces
- Weather data is strongly typed
- Full type safety with backend using Hono RPC client
- Shared types between frontend and backend

### Styling

- TailwindCSS for utility-first styling
- Gradient backgrounds and shadow effects
- Responsive design
- Smooth animations and transitions
