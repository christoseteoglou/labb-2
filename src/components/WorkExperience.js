import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { container, paragraphStyle, title } from '../styles/work.module.css';

const WorkExperience = () => {
	return (
		<StaticQuery
			query={graphql`
				query MyWork {
					allContentfulWorkExperience {
						nodes {
							id
							employer
							date
							experiences
						}
					}
				}
			`}
			render={(data) => (
				<section className={container}>
					<div>
						<h1 className={title}> Work Experience</h1>
					</div>
					{data.allContentfulWorkExperience.nodes.map((node, id) => (
						<div key={id}>
							<p className={paragraphStyle}> {node.employer} </p>
							<p> {node.experiences} </p>
							<p> {node.date} </p>
						</div>
					))}
				</section>
			)}
		/>
	);
};

export default WorkExperience;
