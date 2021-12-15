import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import * as generalStyles from '../styles/generalStyles.module.css';

const Hero = () => {
	return (
		<StaticQuery
			query={graphql`
				query MyQuery {
					allContentfulContactInformation {
						nodes {
							address {
								address
							}
							id
							email
							userName
							website
							userLogo {
								file {
									details {
										size
									}
									url
								}
							}
						}
					}
				}
			`}
			render={(data) => (
				<section className={generalStyles.text}>
					{data.allContentfulContactInformation.nodes.map((node, id) => (
						<div key={id}>
							<img src={node.userLogo.file.url} alt="Red Panda with a christmas hat" />
							<h2>{node.userName}</h2>
							<h4>{node.email}</h4>
							<h4>{node.website}</h4>
						</div>
					))}
				</section>
			)}
		/>
	);
};

export default Hero;
