import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { container, title, paragraphStyle } from '../styles/education.module.css';

const Education = () => {
	return (
		<StaticQuery
			query={graphql`
				query MyEducationQuery {
					allContentfulEducation {
						nodes {
							education
							date
							school
							id
						}
					}
				}
			`}
			render={(data) => (
				<section className={container}>
					<div>
						<h1 className={title}>Education</h1>
					</div>
					{data.allContentfulEducation.nodes.map((node, id) => (
						<div key={id}>
							<h2>{node.education}</h2>
							<p className={paragraphStyle}>{node.school}</p>
							<p className={paragraphStyle}>{node.date}</p>
						</div>
					))}
				</section>
			)}
		/>
	);
};

export default Education;
