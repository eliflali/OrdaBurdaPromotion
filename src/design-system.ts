// Design System for ordaburda
// This file contains all the color palettes and design tokens for easy customization

export interface ColorPalette {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

// Default Purple-Pink Theme (Light)
export const defaultPalette: ColorPalette = {
  primary: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7c3aed",
    800: "#6b21a8",
    900: "#581c87",
  },
  secondary: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },
  accent: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
};

// Dark Mode - Neon Cyber Theme
export const darkNeonPalette: ColorPalette = {
  primary: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#00d4ff", // Bright cyan
    600: "#00b8e6",
    700: "#0099cc",
    800: "#0077a3",
    900: "#005580",
  },
  secondary: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#ff00ff", // Magenta
    600: "#e600e6",
    700: "#cc00cc",
    800: "#a300a3",
    900: "#800080",
  },
  accent: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#00ff00", // Bright green
    600: "#00e600",
    700: "#00cc00",
    800: "#00a300",
    900: "#008000",
  },
  neutral: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#5a5a5a",
    600: "#6a6a6a",
    700: "#7a7a7a",
    800: "#8a8a8a",
    900: "#9a9a9a",
  },
};

// Dark Mode - Cosmic Purple Theme
export const darkCosmicPalette: ColorPalette = {
  primary: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#8b5cf6", // Purple
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  secondary: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#ec4899", // Pink
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },
  accent: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#06b6d4", // Cyan
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },
  neutral: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#5a5a5a",
    600: "#6a6a6a",
    700: "#7a7a7a",
    800: "#8a8a8a",
    900: "#9a9a9a",
  },
};

// Dark Mode - Fire Orange Theme
export const darkFirePalette: ColorPalette = {
  primary: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#ff6b35", // Bright orange
    600: "#ff5722",
    700: "#f4511e",
    800: "#e64a19",
    900: "#d84315",
  },
  secondary: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#ffd700", // Gold
    600: "#ffc107",
    700: "#ffb300",
    800: "#ffa000",
    900: "#ff8f00",
  },
  accent: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#ff1744", // Red
    600: "#f50057",
    700: "#d500f9",
    800: "#aa00ff",
    900: "#7200ca",
  },
  neutral: {
    50: "#0a0a0a",
    100: "#1a1a1a",
    200: "#2a2a2a",
    300: "#3a3a3a",
    400: "#4a4a4a",
    500: "#5a5a5a",
    600: "#6a6a6a",
    700: "#7a7a7a",
    800: "#8a8a8a",
    900: "#9a9a9a",
  },
};

// Blue-Green Theme (Light)
export const blueGreenPalette: ColorPalette = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  secondary: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  accent: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
};

// Red-Orange Theme (Light)
export const redOrangePalette: ColorPalette = {
  primary: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  secondary: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  accent: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
};

// Teal-Cyan Theme (Light)
export const tealCyanPalette: ColorPalette = {
  primary: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
  },
  secondary: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },
  accent: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
};

// Available themes
export const themes = {
  default: defaultPalette,
  darkNeon: darkNeonPalette,
  darkCosmic: darkCosmicPalette,
  darkFire: darkFirePalette,
  blueGreen: blueGreenPalette,
  redOrange: redOrangePalette,
  tealCyan: tealCyanPalette,
};

// Current theme (can be changed dynamically)
export let currentTheme: ColorPalette = defaultPalette;

// Function to change theme
export function setTheme(themeName: keyof typeof themes) {
  currentTheme = themes[themeName];
  // You can add logic here to update CSS variables or trigger re-renders
}

// Helper function to get current theme colors
export function getThemeColors() {
  return currentTheme;
}

// CSS Variables for Tailwind integration
export function generateCSSVariables(palette: ColorPalette = currentTheme) {
  return {
    "--color-primary-50": palette.primary[50],
    "--color-primary-100": palette.primary[100],
    "--color-primary-200": palette.primary[200],
    "--color-primary-300": palette.primary[300],
    "--color-primary-400": palette.primary[400],
    "--color-primary-500": palette.primary[500],
    "--color-primary-600": palette.primary[600],
    "--color-primary-700": palette.primary[700],
    "--color-primary-800": palette.primary[800],
    "--color-primary-900": palette.primary[900],
    "--color-secondary-50": palette.secondary[50],
    "--color-secondary-100": palette.secondary[100],
    "--color-secondary-200": palette.secondary[200],
    "--color-secondary-300": palette.secondary[300],
    "--color-secondary-400": palette.secondary[400],
    "--color-secondary-500": palette.secondary[500],
    "--color-secondary-600": palette.secondary[600],
    "--color-secondary-700": palette.secondary[700],
    "--color-secondary-800": palette.secondary[800],
    "--color-secondary-900": palette.secondary[900],
    "--color-accent-50": palette.accent[50],
    "--color-accent-100": palette.accent[100],
    "--color-accent-200": palette.accent[200],
    "--color-accent-300": palette.accent[300],
    "--color-accent-400": palette.accent[400],
    "--color-accent-500": palette.accent[500],
    "--color-accent-600": palette.accent[600],
    "--color-accent-700": palette.accent[700],
    "--color-accent-800": palette.accent[800],
    "--color-accent-900": palette.accent[900],
  };
}
