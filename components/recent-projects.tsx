import Link from 'next/link';
import { getProjects } from '@/lib/projects';
import Projects from '@/components/projects';

const RecentProjects = async () => {
  const projects = await getProjects(4);

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Latest projects</h2>
        <Projects projects={projects} />

        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  );
};

export default RecentProjects;
