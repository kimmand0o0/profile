'use strict';

/**
 * guest-book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guest-book.guest-book');
