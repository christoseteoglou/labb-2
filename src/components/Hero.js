import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { container, h2text, paragraph } from '../styles/layout.module.css';

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
				<section className={container}>
					{data.allContentfulContactInformation.nodes.map((node, id) => (
						<div key={id}>
							<img src={node.userLogo.file.url} alt="Red Panda with a christmas hat" />
							<h2 className={h2text}>{node.userName}</h2>
							<p className={paragraph}>{node.email}</p>
							<p className={paragraph}>{node.website}</p>
						</div>
					))}
				</section>
			)}
		/>
	);
};

export default Hero;
