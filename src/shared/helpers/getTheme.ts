export const themes = {
  dark: 'dark',
  light: 'light',
};

export const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (Object.values(themes).includes(theme)) return theme;

  return themes.dark;
};
