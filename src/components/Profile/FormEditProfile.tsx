import { Button, Input, Textarea } from '@heroui/react'
import { Tables } from '@/types/database.types'
import Image from 'next/image'

interface FormEditProfileProps {
    name?: Tables<'users'>['name']
    avatarUrl?: Tables<'users'>['avatar_url']
    bannerUrl?: Tables<'users'>['banner_url']
    biography?: Tables<'users'>['biography']
    location?: Tables<'users'>['location']
    webSite?: Tables<'users'>['web_site']
}

export default function FormEditProfile ({ name, avatarUrl, bannerUrl, biography, location, webSite }: FormEditProfileProps) {
  return (
    <div className='w-full h-full'>
      <form>
        <div className='relative w-full h-64'>
          <div className='absolute top-0 left-0 w-full h-48'>
            {bannerUrl ? <Image className='max-w-full h-full object-cover' src={bannerUrl} width={750} height={128} alt='Banner' /> : <div className='w-full h-48 bg-zinc-800' />}
          </div>
          <div className='absolute left-0 bottom-0 w-full h-32 z-[2]'>
            <div className='ml-4 w-32 h-full rounded-full bg-zinc-950 outline -outline-offset-2 outline-4 outline-black hover:brightness-90 overflow-hidden'>
              <div>
                <Image
                  className='object-cover'
                  src={avatarUrl ?? ''}
                  width={128}
                  height={128}
                  alt='Avatar User Profile'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-full px-4 py-4'>
          <div className='flex flex-col gap-6'>
            <Input
              radius='sm'
              variant='bordered'
              label='Nombre'
              defaultValue={name}
              classNames={{
                inputWrapper: ['border-small border-zinc-700 group-data-[focus=true]:border-medium group-data-[focus=true]:border-sky-500'],
                label: ['text-default-400 group-data-[focus-within=true]:text-sky-500']
              }}
            />
            <Textarea
              radius='sm'
              minRows={2}
              maxRows={2}
              variant='bordered'
              label='Biografía'
              defaultValue={biography ?? ''}
              classNames={{
                inputWrapper: ['border-small border-zinc-700 group-data-[focus=true]:border-medium group-data-[focus=true]:border-sky-500 min-h-[82px]'],
                label: ['text-default-400 group-data-[focus-within=true]:text-sky-500']
              }}
            />
            <Input
              radius='sm'
              variant='bordered'
              label='Ubicación'
              defaultValue={location ?? ''}
              classNames={{
                inputWrapper: ['border-small border-zinc-700 group-data-[focus=true]:border-medium group-data-[focus=true]:border-sky-500'],
                label: ['text-default-400 group-data-[focus-within=true]:text-sky-500']
              }}
            />
            <Input
              radius='sm'
              variant='bordered'
              label='Sitio Web'
              defaultValue={webSite ?? ''}
              classNames={{
                inputWrapper: ['border-small border-zinc-700 group-data-[focus=true]:border-medium group-data-[focus=true]:border-sky-500'],
                label: ['text-default-400 group-data-[focus-within=true]:text-sky-500']
              }}
            />
            <Button variant='solid' radius='sm' size='lg' className='bg-white text-black font-semibold'>
              Guardar
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
