import { PropsWithChildren } from 'react';

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-w-[350px] px-5 py-6 sm:mx-auto sm:w-[600px] sm:px-0 md:w-[720px] lg:w-[960px] xl:w-[1200px]">
      {children}
    </div>
  );
};

export default PageContainer;
