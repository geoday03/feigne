const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  const repo = "geoday03/feigne";

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: "imgix",
    path: 'the "domain" of your Imigix source',
  },
};
