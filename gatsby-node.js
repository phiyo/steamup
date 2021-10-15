exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/steamup/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: 'https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum?utm_source=website&utm_medium=steamuppage&utm_campaign=forward'
  });
};