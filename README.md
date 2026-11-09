# `@deepseek-ai/dsh-client-ui-settings-tavily`

Client-side settings card for the [`tavily-web-search`](https://github.com/xjcloudy/tavily-web-search) DSH plugin.

Injects a card into the **Plugins** page (`plugins.item` slot) that edits the `tavily-web-search` host namespace live: `apiKey` (secret), `apiKeyEnv` (credential reference), and `maxResults` (1–50). Save writes back to the profile's `cordis.patch.yml`.

## Install (desktop profile)

```bash
cd ~/.dsh/profiles/your-profile
pnpm add file:/path/to/dsh-client-ui-settings-tavily
```

Add `@deepseek-ai/dsh-client-ui-settings-tavily` to `dsh.profile.bundles`, then restart DSH.

## Host counterpart

Requires `@deepseek-ai/tavily-web-search` (>= 0.2.0) installed in the same profile, with its `Config` fields marked `.volatile()` so `SettingsForms` can derive the form.