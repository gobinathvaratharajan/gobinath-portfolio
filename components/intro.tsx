import Image from 'next/image'
import authorImage from '@/public/images/authors/me.jpg'
import { Button } from '@/components/ui/button'
import { Video, Send } from 'lucide-react'

const Intro = () => {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Gobinath.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in India. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p>
        <div className="mt-4 flex gap-3">
            <Button size="sm" variant="default">
                <Video className="mr-2 h-4 w-4" />Book a call
            </Button>
            <Button size="sm" variant="outline">
            <Send className="mr-2 h-4 w-4" /> Message
        </Button>
        </div>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale transition-all duration-300 hover:grayscale-0'
          src={authorImage}
          alt='Gobinath Varatharajan'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}

export default Intro;

