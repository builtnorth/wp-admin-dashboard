# BuiltNorth WP Admin Dashboard

NPM package for components and common code used across various WordPress admin screens for Built North plugins.

## Installation

1. Run `npm install --save @builtnorth/wp-admin-dashboard` within your WordPress theme or plugin.
2. Import the relevant component(s) into your file(s) e.g. `import { AdminHeader } from '@builtnorth/wp-admin-dashboard';`

## Components

-   ### AdminHeader
    Renders the admin header with options to change the title and icon.
-   ### AttachmentImage
    JS companion to `wp_get_attachment()`. (From [Brian Coords](https://github.com/bacoords/example-image-block/blob/main/src/AttachmentImage.js))
-   ### CustomMediaUpload
    Extends default MediaUpload component slightly.
-   ### SaveNotices
    Manages & displays the Snackbar notices on save/upate.
-   ### UpdateSettings
    Updates settings and saves them to the database.

## Styles

In additon to the components, this package also contains a library of SCSS files of commonly used styles.
