exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/steamup/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: 'https://hot-banana-games.pledgemanager.com/projects/steam-up/participate/?ref=websiteforward'
  });
};