import { Link } from 'react-router-dom';
import { tw } from '../../utils/utils';

const Button = ({ href, children, icon }) => {
  const commonClasses = tw`bg-primary-500 hover:bg-primary-600 focus:ring-primary-50 flex w-max items-center justify-center space-x-2 rounded-md px-6 py-4 font-medium text-white transition-all focus:outline-none focus:ring-4`;

  const Content = (
    <>
      {icon && icon}
      <span>{children}</span>
    </>
  );

  return href.length ? (
    <Link to={href} className={commonClasses}>
      {Content}
    </Link>
  ) : (
    <button className={commonClasses}>{Content}</button>
  );
};

export default Button;
