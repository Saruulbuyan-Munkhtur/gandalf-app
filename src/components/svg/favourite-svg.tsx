import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const FavouriteSvg: React.FC<any> = ({ color = '#181725' }) => {
  return (
    <Svg width={24} height={20} viewBox="0 0 24 20" fill="none">
      <Path
        d="M3.93 8.843l7.825 7.825 7.824-7.825a3.688 3.688 0 10-5.216-5.216l-2.608 2.608-2.608-2.607a3.688 3.688 0 00-5.216 5.215zm6.956-6.956l.869.87.87-.87a6.147 6.147 0 118.692 8.694l-8.691 8.693a1.23 1.23 0 01-1.74 0l-8.693-8.692a6.148 6.148 0 118.692-8.693v-.002z"
        fill={color}
      />
    </Svg>
  )
}
