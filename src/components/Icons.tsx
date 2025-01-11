export const IconTwitter = ({ size }: {size: string}) => {
  return (
    <svg className={`${size} fill-slate-100`} viewBox='0 0 24 24' aria-hidden='true'>
      <g>
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
      </g>
    </svg>
  )
}

export const IconGoogle = () => {
  return (
    <svg className='size-5' version='1.1' viewBox='0 0 48 48'>
      <g>
        <path fill='#EA4335' d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z' />
        <path fill='#4285F4' d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z' />
        <path fill='#FBBC05' d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z' />
        <path fill='#34A853' d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z' />
        <path fill='none' d='M0 0h48v48H0z' />
      </g>
    </svg>
  )
}

export const IconHome = () => {
  return (
    <svg className='size-7 fill-current stroke-2 stroke-white' viewBox='0 0 24 24'><path d='M21.591 7.146 12.52 1.157a.937.937 0 0 0-1.04 0l-9.071 5.99A.906.906 0 0 0 2 7.904v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904a.934.934 0 0 0-.408-.758z' /></svg>
  )
}

export const IconUsers = () => {
  return (
    <svg className='size-7' viewBox='0 0 24 24' aria-hidden='true'><path d='M7.501 19.917 7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672a9.115 9.115 0 0 0-1.212 1.656 4.388 4.388 0 0 0-1.658-.329c-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9a3.467 3.467 0 0 1-2.116-.73 3.483 3.483 0 0 1-1.384-2.77c0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77a3.467 3.467 0 0 1-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z' /></svg>
  )
}

export const IconBolt = () => {
  return (
    <svg className='size-7' viewBox='0 0 24 24' aria-hidden='true'><path d='M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z' /></svg>
  )
}

export const IconHeart = ({ className }: {className: string}) => {
  return (
    <svg className={`${className}`} viewBox='0 0 24 24'><path clipRule='evenodd' d='M12 6c-1.8-2.1-4.8-2.74-7.06-.82a5.33 5.33 0 0 0-.8 7.4c1.47 1.89 5.92 5.87 7.38 7.16.17.14.25.21.35.24.08.03.17.03.25 0 .1-.03.18-.1.34-.24 1.46-1.3 5.92-5.27 7.39-7.16a5.3 5.3 0 0 0-.8-7.4C16.75 3.28 13.8 3.9 12 6Z' strokeLinecap='round' strokeLinejoin='round' /></svg>
  )
}
