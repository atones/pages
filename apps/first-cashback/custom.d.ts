declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png' {
  import { StaticImport } from 'next/dist/shared/lib/get-img-props'
  const content: StaticImport
  export default content
}
