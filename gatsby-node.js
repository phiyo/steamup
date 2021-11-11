exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/steamup/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: 'https://www.hotbananagame.com'
  });
};