// Browser half of the Tavily settings card.
//
// Hand-written to mirror the build output of @deepseek-ai/dsh-client-ui-settings-web-search:
// a window.__ModuleLoader__.load entry that exports apply/inject. The card renders the
// `tavily-web-search` namespace (apiKey secret + apiKeyEnv credential-ref + maxResults)
// into the Plugins page's `plugins.item` slot while the Host serves that namespace.
window.__ModuleLoader__.load({
	id: "@deepseek-ai/dsh-client-ui-settings-tavily",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let _deepseek_ai_dsh_client_store = require("@deepseek-ai/dsh-client-store");
		//#region locales
		/** English copy. */
		const en = {
			title: "Tavily web search",
			description: "Configure the Tavily search provider.",
			apiKey: "API key",
			apiKeyHint: "Stored outside the settings file in the credential referenced below. Leave blank to keep the current key.",
			apiKeySet: "A key is configured for this reference.",
			apiKeyUnset: "No key is configured for this reference; searches will fail until one is set.",
			apiKeyEnv: "Credential reference",
			apiKeyEnvHint: "The credential name that holds the API key, e.g. TAVILY_API_KEY. Changing it switches which stored key the provider uses.",
			maxResults: "Results per search",
			maxResultsHint: "Results returned per query: an integer from 1 to 50, default 10.",
			overridden: "Overridden",
			reset: "Reset to default",
			readOnly: "This deployment stores settings read-only.",
			unavailable: "This plugin is not loaded, so it cannot be configured right now.",
			save: "Save",
			saving: "Saving\u2026",
			saveFailed: "The deployment did not accept these values; they were left for you to correct.",
			invalidNumber: "Enter a number, or leave blank to use the default.",
			invalid: "Enter a value, or leave blank to use the default."
		};
		/** \u4e2d\u6587 copy. */
		const zh = {
			title: "Tavily \u7f51\u7edc\u641c\u7d22",
			description: "\u914d\u7f6e Tavily \u641c\u7d22\u670d\u52a1\u3002",
			apiKey: "API \u5bc6\u94a5",
			apiKeyHint: "\u5bc6\u94a5\u4e0d\u5b58\u4e8e\u914d\u7f6e\u6587\u4ef6\uff0c\u800c\u662f\u5b58\u5728\u4e0b\u65b9\u7684\u51ed\u636e\u540d\u79f0\u4e2d\u3002\u7559\u7a7a\u4ee5\u4fdd\u6301\u5f53\u524d\u5bc6\u94a5\u3002",
			apiKeySet: "\u8be5\u53c2\u8003\u5df2\u914d\u7f6e\u5bc6\u94a5\u3002",
			apiKeyUnset: "\u8be5\u53c2\u8003\u672a\u914d\u7f6e\u5bc6\u94a5\uff1b\u5728\u8bbe\u7f6e\u4e4b\u524d\u641c\u7d22\u4f1a\u5931\u8d25\u3002",
			apiKeyEnv: "\u51ed\u636e\u53c2\u8003",
			apiKeyEnvHint: "\u5b58\u653e API \u5bc6\u94a5\u7684\u51ed\u636e\u540d\u79f0\uff0c\u4f8b\u5982 TAVILY_API_KEY\u3002\u4fee\u6539\u540e\u5c06\u5207\u6362\u63d0\u4f9b\u5546\u4f7f\u7528\u7684\u5bc6\u94a5\u3002",
			maxResults: "\u6bcf\u6b21\u641c\u7d22\u7ed3\u679c\u6570",
			maxResultsHint: "\u6bcf\u6b21\u67e5\u8be2\u8fd4\u56de\u7684\u7ed3\u679c\u6570\uff1a1 \u5230 50 \u7684\u6574\u6570\uff0c\u9ed8\u8ba4 10\u3002",
			overridden: "\u5df2\u8986\u5199",
			reset: "\u6062\u590d\u9ed8\u8ba4",
			readOnly: "\u6b64\u90e8\u7f72\u4ee5\u53ea\u8bfb\u65b9\u5f0f\u5b58\u50a8\u914d\u7f6e\u3002",
			unavailable: "\u8be5\u63d2\u4ef6\u672a\u52a0\u8f7d\uff0c\u6682\u65f6\u65e0\u6cd5\u914d\u7f6e\u3002",
			save: "\u4fdd\u5b58",
			saving: "\u4fdd\u5b58\u4e2d\u2026",
			saveFailed: "\u90e8\u7f72\u672a\u63a5\u53d7\u8fd9\u4e9b\u503c\uff0c\u5df2\u7559\u4f9b\u4f60\u4fee\u6b63\u3002",
			invalidNumber: "\u8f93\u5165\u4e00\u4e2a\u6570\u5b57\uff0c\u6216\u7559\u7a7a\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002",
			invalid: "\u8f93\u5165\u4e00\u4e2a\u503c\uff0c\u6216\u7559\u7a7a\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002"
		};
		//#endregion
		//#region form
		/** Locale namespace owned by this plugin. */
		const NS = "settings.tavily";
		/** Host settings namespace the card edits (the tavily-web-search patch id). */
		const NS_TAVILY = "tavily-web-search";
		const API_KEY_FIELD = "apiKey";
		const API_KEY_ENV_FIELD = "apiKeyEnv";
		const MAX_RESULTS_FIELD = "maxResults";
		const DEFAULT_API_KEY_REF = "TAVILY_API_KEY";
		/** Required services (cordis fiber inject). */
		const inject = [
			"slots",
			"locale",
			"remote",
			"remote.credentials",
			"configForms"
		];
		/**
		* The credential reference a section names, or the provider's default.
		* @param snapshot - the section's current scope snapshot.
		* @returns the reference to address.
		*/
		function refOf(snapshot) {
			const declared = snapshot.value?.apiKeyEnv;
			return declared !== void 0 && declared.length > 0 ? declared : DEFAULT_API_KEY_REF;
		}
		/** SettingsForm labels derived from the locale. */
		function formLabels(t) {
			return {
				unavailable: t("unavailable"),
				readOnly: t("readOnly"),
				saveFailed: t("saveFailed"),
				save: t("save"),
				saving: t("saving")
			};
		}
		//#endregion
		//#region TavilyCard
		/**
		* Render the Tavily provider's one-liner or its settings form, as the Plugins
		* page asks.
		* @param props - the view asked for, locale copy, the form snapshot, and actions.
		* @returns the one-liner, or the form.
		*/
		function TavilyCard(props) {
			const { t } = props;
			const state = props.useTavilyCard((snapshot) => snapshot);
			if (props.view === "summary") return t("description");
			const disabled = !state.writable || state.saving;
			return (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.SettingsForm, {
				labels: formLabels(t),
				state,
				onSave: props.save,
				onDiscard: props.discard,
				children: [
					(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SettingsSecretField, {
						id: "plugin-config-tavily-key",
						label: t("apiKey"),
						hint: t("apiKeyHint"),
						disabled: !state.apiKeyWritable,
						text: state.apiKey.text,
						configured: state.apiKeyConfigured,
						stateLabel: state.apiKeyConfigured ? t("apiKeySet") : t("apiKeyUnset"),
						onEdit: (text) => {
							props.edit(API_KEY_FIELD, text);
						}
					}),
					(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SettingsValueField, {
						id: "plugin-config-tavily-api-env",
						label: t("apiKeyEnv"),
						hint: t("apiKeyEnvHint"),
						overriddenLabel: t("overridden"),
						resetLabel: t("reset"),
						invalidLabel: t("invalid"),
						disabled,
						...state.apiKeyEnv,
						onEdit: (text) => {
							props.edit(API_KEY_ENV_FIELD, text);
						},
						onReset: () => {
							props.resetField(API_KEY_ENV_FIELD);
						}
					}),
					(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SettingsValueField, {
						id: "plugin-config-tavily-max-results",
						label: t("maxResults"),
						hint: t("maxResultsHint"),
						overriddenLabel: t("overridden"),
						resetLabel: t("reset"),
						invalidLabel: t("invalidNumber"),
						numeric: true,
						disabled,
						...state.maxResults,
						onEdit: (text) => {
							props.edit(MAX_RESULTS_FIELD, text);
						},
						onReset: () => {
							props.resetField(MAX_RESULTS_FIELD);
						}
					})
				]
			});
		}
		//#endregion
		//#region TavilyCardController
		/**
		* Bind the `tavily-web-search` settings scope to a single form, track the
		* credential referenced by apiKeyEnv, and expose the snapshot + form actions
		* the Plugins page card consumes.
		*/
		class TavilyCardController {
			/**
			* @param scope - the configForms.get("tavily-web-search") bound scope.
			* @param ctx - the browser plugin context (locale / remote.credentials / configForms).
			*/
			constructor(scope, ctx) {
				this.scope = scope;
				this.ctx = ctx;
				this.credential = { ref: "", configured: false, writable: true };
				this.credentialReadQueued = false;
				this.credentialReadSequence = 0;
				this.disposed = false;
				this.form = new _deepseek_ai_dsh_client_ui_primitives.SettingsFormModel(scope, [
					_deepseek_ai_dsh_client_ui_primitives.settingsTextField(API_KEY_ENV_FIELD),
					{
						..._deepseek_ai_dsh_client_ui_primitives.settingsNumberField(MAX_RESULTS_FIELD),
						parse: (text) => {
							if (text.trim() === "") return { kind: "clear" };
							const value = Number(text);
							return Number.isInteger(value) && value >= 1 && value <= 50 ? { kind: "set", value } : void 0;
						}
					}
				], [{
					field: API_KEY_FIELD,
					write: (text) => this.writeKey(text)
				}]);
				this.store = (0, _deepseek_ai_dsh_client_store.createSnapshotStore)(this.projection());
				const publish = () => {
					const ref = this.ref();
					if (ref !== this.credential.ref) {
						this.resetCredentialReference(ref);
						this.queueCredentialRead();
					}
					this.store.set(this.projection());
				};
				this.unsubscribe = [
					this.form.bind(() => this.form.shell()).subscribe(publish),
					scope.subscribe(() => {
						this.queueCredentialRead();
					})
				];
				this.readCredential();
			}
			/** The view the card renders: the form shell plus per-field state and the credential badge. */
			projection() {
				const shell = this.form.shell();
				return {
					...shell,
					apiKey: this.form.field(API_KEY_FIELD),
					apiKeyEnv: this.form.field(API_KEY_ENV_FIELD),
					maxResults: this.form.field(MAX_RESULTS_FIELD),
					apiKeyConfigured: this.credential.configured,
					apiKeyWritable: this.credential.writable
				};
			}
			/** The credential reference the current apiKeyEnv value names. */
			ref() {
				return refOf(this.scope.getSnapshot());
			}
			/** Drop the cached credential state when the reference changes. */
			resetCredentialReference(ref) {
				this.credential = { ref, configured: false, writable: true };
				this.credentialReadSequence++;
			}
			/** Coalesce credential reads so a burst of scope updates issues one describe. */
			queueCredentialRead() {
				if (this.credentialReadQueued) return;
				this.credentialReadQueued = true;
				queueMicrotask(() => {
					this.credentialReadQueued = false;
					this.readCredential();
				});
			}
			/**
			* Read the credential's configured/writable state from the Host.
			* @returns the answer for this read, or undefined after failure, disposal, or a reference change.
			*/
			async readCredential() {
				if (this.disposed) return;
				const ref = this.ref();
				if (ref !== this.credential.ref) {
					this.resetCredentialReference(ref);
					this.store.set(this.projection());
				}
				const sequence = ++this.credentialReadSequence;
				const response = await this.ctx.remote.credentials.describe([ref]);
				if (this.disposed || !response.ok || ref !== this.ref()) return;
				const view = response.value[ref];
				const next = {
					ref,
					configured: view?.configured ?? false,
					writable: view?.writable ?? true
				};
				if (sequence === this.credentialReadSequence && (next.configured !== this.credential.configured || next.writable !== this.credential.writable)) {
					this.credential = next;
					this.store.set(this.projection());
				}
				return next;
			}
			/**
			* Re-read after the Host reports a change to the reference this page watches.
			* @param ref - the reference the Host reports as changed.
			*/
			refreshCredential(ref) {
				if (ref !== this.credential.ref) return;
				this.readCredential();
			}
			/** Write the API key to the addressed credential, then refresh the badge. */
			async writeKey(value) {
				await this.ctx.remote.credentials.set(this.ref(), value);
				return (await this.readCredential())?.configured ?? false;
			}
			/** The face the page's slot registration injects. */
			inject() {
				return {
					hooks: { tavilyCard: this.store },
					edit: (field, text) => {
						this.form.actions().edit(field, text);
					},
					resetField: (field) => {
						this.form.actions().resetField(field);
					},
					save: () => {
						this.save();
					},
					discard: () => {
						this.form.actions().discard();
					}
				};
			}
			/** Save the form (non-secret fields via the model, secret via its write callback). */
			async save() {
				const state = this.projection();
				if (!state.available || state.invalid || state.saving) return;
				await this.form.save();
			}
			/** Tear down subscriptions and the model. */
			dispose() {
				this.disposed = true;
				for (const off of this.unsubscribe) off();
				this.form.dispose();
			}
		}
		//#endregion
		//#region apply
		/**
		* Mount the Tavily settings card while the Host serves the tavily-web-search
		* namespace, into the Plugins page's `plugins.item` slot.
		* @param ctx - the browser plugin context.
		*/
		function apply(ctx) {
			const t = ctx.locale.bind(NS);
			ctx.effect(() => ctx.locale.register(NS, { zh, en }), "ui-settings-tavily: dictionaries");
			const card = new TavilyCardController(ctx.configForms.get(NS_TAVILY), ctx);
			ctx.effect(() => () => {
				card.dispose();
			}, "ui-settings-tavily: form subscription");
			ctx.effect(() => ctx.remote.$on("credentials/reference-updated", (ref) => {
				card.refreshCredential(ref);
			}), "ui-settings-tavily: credential invalidations");
			ctx.effect(() => ctx.configForms.whileServed([NS_TAVILY], () => ctx.slots.inject("plugins.item", () => ctx.slots.register({
				name: "plugins.item",
				id: "tavily",
				order: 21,
				label: () => t("title"),
				locale: NS,
				inject: () => card.inject()
			}, TavilyCard))), "ui-settings-tavily: page");
		}
		//#endregion
		exports.NS = NS;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
