const isGithubActions = process.env.GITHUB_ACTIONS || false;

let prefix = "";
let path = "/";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  prefix = `/${repo}/`;
  path = `/${repo}`;
}

export const assetPrefix = prefix;
export const basePath = path;
