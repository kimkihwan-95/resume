import './App.css';
import Header from './common/header';
import Layout from './components/Layout';
import Section from './components/Section';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Skill from './pages/Skill';
import Title from './pages/Title';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Section bgColor='lightblue' id="home">
          <Title />
        </Section>
       
        <Section bgColor='' id="project" title='Work Experience.'>
          <Project />
        </Section>

        <Section bgColor='lightblue' id="about" title='ABOUT ME.'>
          <AboutMe />
        </Section>

        <Section bgColor='' id="career" title='Skill.'>
          <Skill />
        </Section>
      </Layout>
    </>
  );
}

export default App;

