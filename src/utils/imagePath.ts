/**
 * Utility function to get correct image path for both dev and production (GitHub Pages)
 * Handles base path automatically
 */
export function getImagePath(path: string): string {
  // If path already starts with http/https, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Get base URL from Vite (includes base path for GitHub Pages)
  const base = import.meta.env.BASE_URL || '/';
  
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Combine base and path
  return `${base}${cleanPath}`;
}
