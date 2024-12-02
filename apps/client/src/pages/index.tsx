import Cube from '../components/cube';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-24">
      <div className="h-[300px]">
        <Cube />
      </div>
      <div className="text-xl">Welcome to Sventi's Corner</div>
    </div>
  );
};

export default Home;
