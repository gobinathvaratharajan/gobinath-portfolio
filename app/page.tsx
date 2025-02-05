import Intro from '@/components/intro';
import RecentPost from '@/components/recent-posts';
import RecentProjects from '@/components/recent-projects';

const Home = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentProjects />
        <RecentPost />
      </div>
    </section>
  );
};

export default Home;
