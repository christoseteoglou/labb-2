import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { competence, paragraphStyle, title, heading } from '../styles/competence.module.css';

const Skills = () => {
	return (
		<StaticQuery
			query={graphql`
				query MySkills {
					allContentfulCompetence {
						nodes {
							id
							competence
							description {
								description
							}
						}
					}
				}
			`}
			render={(data) => (
				<section className={competence}>
					<div>
						<h1 className={heading}> Competence</h1>
					</div>
					{data.allContentfulCompetence.nodes.map((node, id) => (
						<div key={id}>
							<p className={title}>{node.competence} </p>
							<p className={paragraphStyle}>{node.description.description} </p>
						</div>
					))}
				</section>
			)}
		/>
	);
};

export default Skills;
