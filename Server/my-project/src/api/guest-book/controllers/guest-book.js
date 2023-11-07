'use strict';

/**
 * guest-book controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::guest-book.guest-book');
