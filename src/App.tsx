import './App.css';
import Header from './common/header';
import Layout from './components/Layout';
import Section from './components/Section';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Title from './pages/Title';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Section bgColor='white' id="home">
          <Title />
        </Section>

        <Section bgColor='' id="about" title='ABOUT ME'>
          <AboutMe />
        </Section>

        <Section bgColor='' id="Project" title='Project'>
          <Project />
        </Section>

        <Section bgColor='' id="career">
          <AboutMe />
        </Section>
      </Layout>
    </>
  );
}

export default App;

