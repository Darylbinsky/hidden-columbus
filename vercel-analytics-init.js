// Vercel Web Analytics initialization
// This file initializes Vercel Analytics for the static HTML site
import { inject } from './analytics.js';

// Initialize analytics with production mode
inject({
  mode: 'auto', // Automatically detects development vs production
  debug: false
});
