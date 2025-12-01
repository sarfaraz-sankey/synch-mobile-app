/**
 * Commitlint Configuration
 * Enforces clean, consistent commit messages using Conventional Commits.
 */

module.exports = {
  // Use the standard recommended rules
  extends: ["@commitlint/config-conventional"],

  rules: {
    /**
     * ============================
     *  TYPE RULES
     * ============================
     */

    // Allowed commit types (only these types are permitted)
    "type-enum": [
      2,
      "always",
      [
        "feat", // new feature
        "fix", // bug fix
        "docs", // documentation changes
        "style", // formatting, missing semicolons, etc (no logic changes)
        "refactor", // code change that neither fixes a bug nor adds a feature
        "perf", // performance improvement
        "test", // adding or updating tests
        "build", // changes to build system, CI/CD, pipeline
        "ci", // changes related to CI configuration
        "chore", // maintenance tasks
        "revert", // reverting previous commits
      ],
    ],

    // Type must always be lowercase
    "type-case": [2, "always", "lower-case"],

    // Type cannot be empty
    "type-empty": [2, "never"],

    /**
     * ============================
     *  SCOPE RULES
     * ============================
     */

    // Scope must always be lowercase (ui, auth, api, etc.)
    "scope-case": [2, "always", "lower-case"],

    // Scope is optional, so allow it to be empty
    "scope-empty": [0],

    /**
     * ============================
     *  SUBJECT (MESSAGE TITLE)
     * ============================
     */

    // Subject cannot be empty
    "subject-empty": [2, "never"],

    // Subject must not start with a capital letter
    "subject-case": [
      2,
      "never",
      ["sentence-case", "pascal-case", "upper-case"],
    ],

    // Subject must not end with a period
    "subject-full-stop": [2, "never", "."],

    /**
     * ============================
     *  HEADER (TYPE + SCOPE + SUBJECT)
     * ============================
     */

    // Total header length must be under 100 characters
    "header-max-length": [2, "always", 100],

    /**
     * ============================
     *  BODY RULES
     * ============================
     */

    // Body line must never be empty if no body exists (optional)
    "body-leading-blank": [1, "always"],

    // Maximum body line length (for readability)
    "body-max-line-length": [2, "always", 120],

    /**
     * ============================
     *  FOOTER RULES
     * ============================
     */

    // Footer (e.g., "BREAKING CHANGE", "Closes #123") must begin with blank line
    "footer-leading-blank": [1, "always"],

    // Footer line length limit
    "footer-max-line-length": [2, "always", 120],
  },
};
