require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'resume_contentful'
	},
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-plugin-image',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [ `Roboto\:300,400,700` ],
				display: 'swap'
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `dawvhpgfahkn`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		}
	]
};
