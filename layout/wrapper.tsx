import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Wrapper = (props: Props) => {
  const { children } = props;

  return <>{children}</>;
};

export default Wrapper;
