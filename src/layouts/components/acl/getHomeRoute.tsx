/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'Driver') return '/carrier/shipment'
  else return '/carrier/shipment'
}

export default getHomeRoute
