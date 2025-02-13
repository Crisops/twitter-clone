import AsideNavigation from '@/components/Home/AsideNavigation'
import LinkProfileServer from '@/components/Home/LinkProfileServer'

export default function AsideNavigationDesktop () {
  return (
    <AsideNavigation LinkProfile={<LinkProfileServer />} />
  )
}
