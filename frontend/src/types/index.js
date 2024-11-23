/**
 * @typedef {Object} Song
 * @property {string} _id
 * @property {string} title
 * @property {string} artist
 * @property {string | null} albumId
 * @property {string} imageUrl
 * @property {string} audioUrl
 * @property {number} duration
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} Album
 * @property {string} _id
 * @property {string} title
 * @property {string} artist
 * @property {string} imageUrl
 * @property {number} releaseYear
 * @property {Song[]} songs
 */

/**
 * @typedef {Object} Stats
 * @property {number} totalSongs
 * @property {number} totalAlbums
 * @property {number} totalUsers
 * @property {number} totalArtists
 */

/**
 * @typedef {Object} Message
 * @property {string} _id
 * @property {string} senderId
 * @property {string} receiverId
 * @property {string} content
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} User
 * @property {string} _id
 * @property {string} clerkId
 * @property {string} fullName
 * @property {string} imageUrl
 */
