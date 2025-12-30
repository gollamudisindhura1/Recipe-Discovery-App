# SBA - Recipe Discovery App

A React and  TypeScript application that allows users to explore recipes from around the world using TheMealDB API. Users can browse recipes by country, view detailed recipe information, search for meals, and save their favorite recipes with persistent storage.

## Overview

This project was built to practice and demonstrate:

- React fundamentals with functional components
- Custom hooks
- React Context for global state
- API data fetching
- TypeScript for type safety
- Modular folder structure
- Clean UI with reusable components
The application fetches live data from an external API and does not use any hard-coded recipe data.

## Technologies Used
1. React
2. TypeScript
3. React Router DOM
4. CSS (modular per component/page)
5. TheMealDB Public API
6. LocalStorage (for persistence)

## Features
### Browse Recipes by Country
- Fetches all available countries from the API
- Displays country list dynamically
- Clicking a country loads its recipes

### Recipe Details Page
- Displays full recipe information
- Shows image, instructions, and ingredients
- Data is fetched using recipe ID

### Search Recipes
- Search meals by name
- Displays results dynamically
- Handles empty and no-result searches safely

### Favorites Functionality
- Add and remove favorite recipes
- Check if a recipe is already a favorite
- Favorites persist using localStorage
- Favorites state is shared across the app using Context

## Performance and User Experience

- Reusable useFetch custom hook
- Custom Hooks
- A reusable hook that handles:
      - API calls
      - Loading state
      - Error handling
Used to store and persist favorite recipes so data remains even after refreshing the page.

### State Management
- Favorites Context
- Favorites are managed using React Context instead of props to:
- Avoid prop drilling
- Share state across multiple pages
- Keep logic centralized and reusable

## Reflection Questions: 
- The Most Challenging Part:
1. The most challenging part of the project was managing shared state across multiple pages while keeping the code organized.
Handling favorites across different routes (country list, recipe list, recipe detail, and favorites page) required moving logic out of components and into a Context Provider. This involved careful TypeScript typing and proper provider setup to avoid runtime and fast-refresh errors.
Another challenge was handling API responses that could be null or inconsistent, which required defensive checks and better typing.

1. Why I Created a useFetch Hook
- Instead of repeating fetch logic in every component, I created a reusable hook to:
- Improve readability
- Reduce duplication
- Make the app easier to maintain and extend

2. Why I Used Context for Favorites
- Favorites needed to be accessed from multiple unrelated components.
- Using Context allowed me to manage favorites in one place and expose helper functions like:
- addFavorite
- removeFavorite
- isFavorite

3. Why the API Logic Is Separated
- Separating API logic from UI components keeps components focused on rendering and makes the app easier to update if the API changes in the future.
