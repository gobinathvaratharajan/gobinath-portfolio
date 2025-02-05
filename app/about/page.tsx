import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import portraitImage from '@/public/images/authors/me.jpg';

const navigation = [
  {
    name: 'Follow on LinkedIn',
    href: 'https://www.linkedin.com/in/gobinath-varatharajan-banumathi-gobinath-4103201a8/',
    icon: (props: any) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        ></path>
      </svg>
    ),
  },
  {
    name: 'Follow on X',
    href: 'https://x.com/Gobinath_VB',
    icon: (props: any) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
      </svg>
    ),
  },
  {
    name: 'Follow on GitHub',
    href: 'https://github.com/gobinathvaratharajan',
    icon: (props: any) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div className='container max-w-4xl'>
      <Head>
        <title>About - Gobinath Varatharajan</title>
        <meta
          name='description'
          content='I’m Gobinath Varatharajan. I live in Tamil Nadu, India, where I design the future.'
        />
      </Head>
      <div className='container mx-auto mt-16 sm:mt-32'>
        <div className='grid grid-cols-1 gap-y-16 sm:gap-y-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
          <div className='order-1 lg:order-none lg:ml-6'>
            {' '}
            <div className='max-w-xs px-2.5 lg:max-w-none'>
              <Image
                src={portraitImage}
                alt=''
                sizes='(min-width: 720px) 32rem, 20rem'
                className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
              />
            </div>
          </div>
          <div className='order-2 lg:order-first'>
            {' '}
            <h1 className='text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl'>
              I’m Gobinath. I live in India, where I design the future.
            </h1>
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <p>
                I’m a passionate Software Engineer with over 3 years of
                experience crafting super-fast, responsive web apps using React,
                TypeScript, and all things JavaScript. I love making things
                smooth and snappy—whether it&apos;s optimizing client-side
                performance, building reusable UI components, or managing state
                like a pro.
              </p>
              <p>
                I&apos;m a wizard at integrating with RESTful APIs, ensuring
                frontend tests are rock-solid, and keeping the CI/CD workflows
                running like a well-oiled machine. Working in Agile teams is my
                jam, and I&apos;m always focusing on monitoring performance and
                maintaining top-tier code quality.
              </p>
              <p>Let&apos;s build something amazing together! 🚀</p>
            </div>
          </div>
          <div className='order-3 lg:order-last'>
            {' '}
            <ul role='list'>
              {navigation.map(item => (
                <li key={item.name} className='mt-4 flex'>
                  <Link
                    href={item.href}
                    className='group flex text-sm font-medium text-zinc-800 hover:text-teal-500 dark:text-zinc-200'
                  >
                    <item.icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
                    <span className='ml-4'>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
