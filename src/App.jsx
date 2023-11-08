import '../src/assets/CSS/App.css'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <NavLink to="/src/pages/components/Home/Home1.jsx" activeClassName="active">Component 1</NavLink>
    <NavLink to="/src/pages/components/Home/Home2.jsx" activeClassName="active">Component 2</NavLink>
    <NavLink to="/src/pages/components/Home/Home3.jsx" activeClassName="active">Component 3</NavLink>
    <NavLink to="/src/pages/components/Home/Home4.jsx" activeClassName="active">Component 4</NavLink>
  </div>
);

const About = () => (
  <div>
    <h1>About Page</h1>
    <NavLink to="/src/pages/components/About/About1.jsx" activeClassName="active">Component 1</NavLink>
    <NavLink to="/src/pages/components/About/About2.jsx" activeClassName="active">Component 2</NavLink>
    <NavLink to="/src/pages/components/About/About3.jsx" activeClassName="active">Component 3</NavLink>
    <NavLink to="/src/pages/components/About/About4.jsx" activeClassName="active">Component 4</NavLink>
  </div>
);

const Service = () => (
  <div>
    <h1>Service Page</h1>
    <NavLink to="/src/pages/components/Service/Service1.jsx" activeClassName="active">Component 1</NavLink>
    <NavLink to="/src/pages/components/Service/Service2.jsx" activeClassName="active">Component 2</NavLink>
    <NavLink to="/src/pages/components/Service/Service3.jsx" activeClassName="active">Component 3</NavLink>
    <NavLink to="/src/pages/components/Service/Service4.jsx" activeClassName="active">Component 4</NavLink>
  </div>
);

const Project = () => (
  <div>
    <h1>Project Page</h1>
    <NavLink to="/src/pages/components/Project/Project1.jsx" activeClassName="active">Component 1</NavLink>
    <NavLink to="/src/pages/components/Project/Project2.jsx" activeClassName="active">Component 2</NavLink>
    <NavLink to="/src/pages/components/Project/Project3.jsx" activeClassName="active">Component 3</NavLink>
    <NavLink to="/src/pages/components/Project/Project4.jsx" activeClassName="active">Component 4</NavLink>
  </div>
);

const Blog = () => (
  <div>
    <h1>Blog Page</h1>
    <NavLink to="/src/pages/components/Blog/Blog1.jsx" activeClassName="active">Component 1</NavLink>
    <NavLink to="/src/pages/components/Blog/Blog2.jsx" activeClassName="active">Component 2</NavLink>
    <NavLink to="/src/pages/components/Blog/Blog3.jsx" activeClassName="active">Component 3</NavLink>
    <NavLink to="/src/pages/components/Blog/Blog4.jsx" activeClassName="active">Component 4</NavLink>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    <NavLink to="/src/pages/components/Contact/Contact1.jsx" activeClassName="active">Component 1</NavLink>
    <NavLink to="/src/pages/components/Contact/Contact2.jsx" activeClassName="active">Component 2</NavLink>
    <NavLink to="/src/pages/components/Contact/Contact3.jsx" activeClassName="active">Component 3</NavLink>
    <NavLink to="/src/pages/components/Contact/Contact4.jsx" activeClassName="active">Component 4</NavLink>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/service" activeClassName="active">Service</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/project" activeClassName="active">Project</NavLink></li>
          <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
      <Switch>
      <Route path="/home" component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;

