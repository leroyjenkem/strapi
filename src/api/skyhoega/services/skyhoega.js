'use strict';

/**
 * skyhoega service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::skyhoega.skyhoega');
