/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/src/blog/`,
			},
		},
		`gatsby-transformer-remark`,
	],
	siteMetadata: {
		title: 'exonbyte development blog',
		description: 'A molecular biologist building software',
		copyright: '2023',
	},
};
