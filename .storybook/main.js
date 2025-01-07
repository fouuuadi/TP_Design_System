/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y", // Ajout pour l'accessibilité (facultatif)
    "@storybook/addon-controls", // Ajout pour les props dynamiques
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {
    disableTelemetry: true, // Désactive la télémétrie si nécessaire
  },

  viteFinal: async (config, { configType }) => {
    // Ajoutez des configurations spécifiques à Vite si nécessaire
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      include: [
        "@storybook/react-vite",
        "react",
        "react-dom",
      ],
    };
    return config;
  },

  docs: {
    autodocs: "tag",
  },
};

export default config;
