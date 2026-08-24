# MediaSearch

A full-stack media discovery web application that lets users search and save photos, videos, and GIFs from multiple sources into a personal collection — built with React, Redux Toolkit, and React Router.

**Live Demo:** [redux-toolkit-02.netlify.app]

---

## Overview

MediaSearch aggregates content from three different third-party APIs (Unsplash, Pexels, and Giphy) into a single, unified search experience. Users can search across photos, videos, and GIFs, switch between tabs seamlessly, and build a personal collection of saved media that persists across sessions using browser storage.

## Features

- 🔍 **Unified search** across three media types — photos, videos, and GIFs
- 🗂️ **Tab-based filtering** to switch between content categories without re-searching
- 💾 **Persistent collections** — saved items are stored in `localStorage` and survive page refreshes
- 🔔 **Toast notifications** for save/remove actions using `react-toastify`
- 🧭 **Client-side routing** with React Router for a multi-page feel in a single-page app
- 📱 **Responsive design** that adapts across mobile, tablet, and desktop breakpoints
- ⚡ **Centralized state management** with Redux Toolkit for predictable, scalable data flow

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | React, Vite |
| State Management | Redux Toolkit, React Redux |
| Routing | React Router DOM |
| Styling | Tailwind CSS |
| Notifications | React Toastify |
| APIs | Unsplash API, Pexels API, Giphy API |
| HTTP Client | Axios |
| Deployment | Netlify |

## Architecture Highlights

- **API abstraction layer:** All third-party API calls are centralized in a single `mediaApi.js` module, keeping components decoupled from API-specific request logic.
- **Redux slices:** Application state is split into two feature slices — `searchSlice` (query, active tab, results, loading/error state) and `collectionSlice` (saved items) — following Redux Toolkit best practices.
- **localStorage sync:** The collection slice reads from and writes to `localStorage` on every mutation, so saved items persist without requiring a backend.
- **Adaptive API integration:** Originally scoped for the Tenor API, the GIF search was re-engineered to use Giphy after access limitations — including adapting to a completely different response schema and authentication pattern (query-param API key vs. header-based auth).

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- API keys from [Unsplash](https://unsplash.com/developers), [Pexels](https://www.pexels.com/api/), and [Giphy](https://developers.giphy.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/media-search.git
cd media-search

# Install dependencies
npm install

# Set up environment variables (see below)

# Run the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory with the following keys:

```
VITE_UNSPLASH_KEY=your_unsplash_access_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

> **Note:** Never commit your `.env` file. It is already excluded via `.gitignore`.

### Build for Production

```bash
npm run build
```

This generates an optimized `dist/` folder ready for deployment.

## Project Structure

```
src/
├── api/
│   └── mediaApi.js          # Centralized API request functions
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Tabs.jsx
│   ├── ResultGrid.jsx
│   ├── ResultCard.jsx
│   └── CollectionCard.jsx
├── pages/
│   ├── HomePage.jsx
│   └── CollectionPage.jsx
├── redux/
│   ├── store.js
│   └── features/
│       ├── searchSlice.js
│       └── collectionSlice.js
├── App.jsx
└── main.jsx
```

## Future Improvements

- Add pagination / infinite scroll for search results
- Migrate persistence layer to a backend (MongoDB) for cross-device sync
- Add debounced search-as-you-type
- Implement skeleton loaders for a smoother loading experience

## Author

**Ruchi Sharma**
B.Tech CSE (AI & Data Science) — KMCLU, Lucknow
[LinkedIn](#) · [GitHub](https://github.com/ruchisharmaku-debug)

---

*This project was built as part of a hands-on learning journey following Sheryians Coding School's Redux Toolkit course, with independent debugging, API pivoting, and feature additions beyond the original tutorial scope.*
