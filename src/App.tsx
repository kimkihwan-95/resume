import './App.css';
import Header from './common/header';
import Layout from './components/Layout';
import Title from './pages/Title';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Title />
        <section id="about" style={{height : "500px"}}>about</section>
        <section id="project" style={{ height: "500px" }}>about</section>
        <section id="career" style={{ height: "500px" }}>about</section>
      </Layout>
    </>
  );
}

export default App;

