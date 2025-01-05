import AsideNavigation from './AsideNavigation'
import LinkProfileServer from './LinkProfileServer'

export default function AsideNavigationDesktop () {
  return (
    <AsideNavigation LinkProfile={<LinkProfileServer />} />
  )
}
