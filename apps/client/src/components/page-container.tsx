import { PropsWithChildren } from 'react';

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-5 mt-6 min-w-[350px] sm:mx-auto sm:w-[600px] md:w-[720px] lg:w-[960px] xl:w-[1200px]">
      {children}
    </div>
  );
};

export default PageContainer;
