import { Container, EventCard, Header } from './components';
import { Hero } from './templates';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="py-20">
        <Container>
          <EventCard />
        </Container>
      </div>
    </div>
  );
};

export default App;
