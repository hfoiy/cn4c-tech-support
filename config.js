/*
 * Public browser configuration.
 *
 * Leave turnstileSiteKey empty until a Turnstile widget has been created for
 * this domain. The Pages Function only enforces Turnstile when its own
 * TURNSTILE_SECRET binding is set, so an empty key here is safe for launch.
 */
window.CN4C_CONFIG = {
  submitEndpoint: "/api/submit",
  turnstileSiteKey: "",
  contactEmail: "business.hfoiyfuf@gmail.com"
};
