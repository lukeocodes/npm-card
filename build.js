"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("           Luke Oliff"),
  handle: chalk.white("lukeocodes"),
  shorthandle: chalk.white("luke"),
  work: chalk.white("Senior Developer Experience at Deepgram"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("lukeocodes"),
  mastodon:
    chalk.gray("https://mastodon.social/") + chalk.magenta("@lukeocodes"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~lukeoliff"),
  github: chalk.gray("https://github.com/") + chalk.green("lukeocodes"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("luke-oliff-526a31249"),
  web: chalk.cyan("https://lukeocodes.dev"),
  npx: chalk.red("npx") + " " + chalk.white("lukeocodes"),
  labelWork: chalk.white.bold("    Work:"),
  labelTwitter: chalk.white.bold(" Twitter:"),
  labelMastodon: chalk.white.bold("Mastodon:"),
  labelnpm: chalk.white.bold("     npm:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("     Web:"),
  labelCard: chalk.white.bold("    Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  mastodoning +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
