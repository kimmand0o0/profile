'use strict';

/**
 * guest-book router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::guest-book.guest-book');
