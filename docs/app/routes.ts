import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  layout("layout/index.tsx", [
    route('about', 'routes/aaa.tsx'),
  ])
] satisfies RouteConfig
