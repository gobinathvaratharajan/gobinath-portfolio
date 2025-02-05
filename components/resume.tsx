import { Briefcase, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import logoTargetBay from '../public/images/assets/bayengage.png';

const ResumeInfo = () => {
  const resume = [
    {
      company: 'TargetBay',
      title: 'Software Engineer',
      logo: logoTargetBay,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
  ];

  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 md:max-w-lg'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <Briefcase className='h-6 w-6 flex-none' />
        <span className='ml-3'>Work</span>
      </h2>
      <ol className='mt-6 space-y-4'>
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className='flex gap-4'>
            <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
              <Image src={role.logo} alt='' className='h-7 w-7' unoptimized />
            </div>
            <dl className='flex flex-auto flex-wrap gap-x-2'>
              <dt className='sr-only'>Company</dt>
              <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>
                {role.company}
              </dd>
              <dt className='sr-only'>Role</dt>
              <dd className='text-xs text-zinc-500 dark:text-zinc-400'>
                {role.title}
              </dd>
              <dt className='sr-only'>Date</dt>
              <dd
                className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
                aria-label={`${role.start} until ${role.end.label ?? role.end.dateTime}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden='true'>—</span>{' '}
                <time dateTime={role.end.dateTime.toString()}>
                  {role.end.label ?? role.end.dateTime.toString()}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button variant='secondary' className='group mt-6 w-full'>
        Download CV
        <ChevronDown className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
      </Button>
    </div>
  );
};

const Resume = () => {
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-10'>Experience</h2>
        <ResumeInfo />
      </div>
    </section>
  );
};

export default Resume;
