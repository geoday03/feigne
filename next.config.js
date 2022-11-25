const isGithubActions = process.env.GITHUB_ACTIONS || false;

export let assetPrefix = "";
export let basePath = "/";

if (isGithubActions) {
  const repo = "geoday03/feigne.git";

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}
