import * as React from 'react';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Main from '../components/Main';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';

const IndexPage = () => {
	return (
		<div>
			<Hero />
			<Main />
			<WorkExperience />
			<Skills />
			<Education />
		</div>
	);
};

export default IndexPage;
