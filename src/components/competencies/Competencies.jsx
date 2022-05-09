import { Section, SectionDivider, SectionTitle } from '../common/CommonStyles';
import { Container, Category, Skills, Proficiency } from './CompetenciesStyles';
import Logo from '../common/Logo';

const competencies = [
    {
        competency: "I'm proficient in", 
        technologies: ["java", "python", "javascript", "react", 
            "postgresql", "git"]
    },
    {
        competency: "I've dabbled in",
        technologies: ["c", "csharp", "rails"]
    }
];

const Competencies = () => (
    <>
    <SectionDivider/>
    <Section>
        <SectionTitle>Competencies</SectionTitle>
        <Container>
        {competencies.map(o => (
            <Category>
                <Proficiency>{o.competency}</Proficiency>
                <Skills>
                    {o.technologies.map(s => (
                        <Logo size={5} name={s}/>
                    ))}
                </Skills>
            </Category>
        ))}
        </Container>
    </Section>
    </>
);

export default Competencies;