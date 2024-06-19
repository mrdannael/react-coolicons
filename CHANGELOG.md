# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- update package.json
- update Readme.md

## [3.1.0] - 2024-06-19

- Set default `width` and `height` for svg to be __24px__
  - People switching from version `2.0.1` should not see any change
  - People switching from version `3.0.0`, standard icons might be bigger without modifying size via class or props
- Update `.npmignore` file

## [3.0.0] - 2024-06-18

### Beaking Changes

- Updated the method of generating icons as React components using SVGR:
  - Fixed SVGO config by changing the file extension.
  - Moved SVGR CLI arguments from the `package.json` build script to a separate configuration file.
  - Enabled the `icon: true` flag within the SVGR configuration.
- Icons now have a default size (`width` and `height`) of `1em`, and the `viewBox` property is included. This change allows the icon size to be modified using classes such as `w-x`, `h-x`, or `size-x` in Tailwind CSS.

### Other Changes
- Bump devDependencies for react-coolicons package
- Bump docs dependencies versions and adjust the code

## [2.0.1] - 2024-04-14

- Fix `Could not find a declaration file for module 'react-coolicons'` by adding `types` entry to the `package.json` file
- Bump project devDependencies

## [2.0.0] - 2023-11-19

- Release of version 2.0.0 based on version 4.1 of coolicons library
- Build library with rollup
- Set up deployment of react-coolicons docs to the gh-pages

## [1.1.1] - 2023-11-09

- Release proper directories to the NPM registry

## [1.1.0] - 2023-11-09

- Building esm module with rollup
- Minify bundle with terser

## [1.0.0] - 2021-09-21

- First release with icons :tada:
