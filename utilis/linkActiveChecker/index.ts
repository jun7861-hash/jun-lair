export const isActiveLink = (menuPath: string, routePath: string) => {
  if (!menuPath || !routePath) return null;
  return menuPath.replace(/\/\d+/, '') === routePath.replace(/\/\d+/, '');
};
