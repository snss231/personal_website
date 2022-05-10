import { Section, SectionDivider, SectionTitle } from '../common/CommonStyles';
import { Container, JobTitle, JobDescription, Company, JobPeriod } from './ExperienceStyles'
import experience from '../../data/experience';

const Experience = () => (
    <>
    <SectionDivider/>
    <Section id="experience">
        <SectionTitle>Experience</SectionTitle>
        {experience.map(e => (
            <Container>
                <JobTitle>{e.position}
                    <JobPeriod> | {e.period}</JobPeriod>
                    </JobTitle>
                <Company>{e.company}</Company>
                <ul style={{marginLeft:"2rem"}}>
               <li><JobDescription>{e.description}</JobDescription></li>
               </ul>
            </Container>
        ))}
    </Section>
    </>
);

export default Experience;