import { Link, NavLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { Container, Button } from '../index';

const navData = [
  {
    id: '23f5h2',
    title: 'Home',
    path: '/',
  },
  {
    id: 'k01h6d',
    title: 'Events',
    path: '/events',
  },
  {
    id: '01mdf4',
    title: 'About',
    path: '/about',
  },
  {
    id: '76qw0d',
    title: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-primary-500 flex flex-col text-2xl font-bold uppercase"
          >
            Your
            <span className="border border-black text-center text-sm text-black">
              Event
            </span>
          </Link>

          <div className="flex items-center gap-10">
            <div>
              <ul className="flex gap-6">
                {navData.map((navItem) => (
                  <li key={navItem.id} className="font-medium">
                    <NavLink
                      to={navItem.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-primary-500 p-2'
                          : 'hover:text-primary-500 p-2 text-black transition-all'
                      }
                    >
                      {navItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-8">
              <Link
                to="/login"
                className="hover:text-primary-500 font-medium transition-all"
              >
                Login
              </Link>
              <Button href="/signup" icon={<FaRegUser size={18} />}>
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
