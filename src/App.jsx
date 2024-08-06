import { FaRegUser } from 'react-icons/fa';
import { Button } from './components';

const App = () => {
  return (
    <div className="p-6">
      <Button href="https://www.google.com" icon={<FaRegUser size={18} />}>
        Sign up
      </Button>
    </div>
  );
};

export default App;
