// Host half of the Tavily settings card.
//
// This package has no host-side work to do. It exists only to occupy a Loader
// entry so that @deepseek-ai/dsh-client-modules scans its package.json, sees the
// `dsh.client` declaration, and serves ./lib/client.js to the browser. All of
// the card's logic lives in the browser half.
function apply() {}
export { apply };
