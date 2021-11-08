import './sass/App.scss';
import { Container } from 'react-bootstrap';
import Login from './routes/login.jsx'

export default function App() {
  return (
    <Container fluid className="App">
      <Login />
    </Container>
  );
}
