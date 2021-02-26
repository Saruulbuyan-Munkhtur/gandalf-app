import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

export const ExploreSvg: React.FC<any> = ({ color = '#181725' }) => {
  return (
    <Svg width={29} height={19} viewBox="0 0 29 19" fill="none">
      <Path
        d="M18.517 14.071a6 6 0 100-12 6 6 0 000 12zm6.32-1.094l3.58 3.58a.999.999 0 11-1.415 1.413l-3.58-3.58a8 8 0 111.414-1.414v.001z"
        fill={color}
      />
      <Rect
        x={0.37207}
        y={0.0707798}
        width={8.85499}
        height={2.39923}
        rx={1.19961}
        fill={color}
      />
      <Rect
        x={0.37207}
        y={7.50897}
        width={6.46414}
        height={2.39923}
        rx={1.19961}
        fill={color}
      />
      <Rect
        x={0.37207}
        y={14.9476}
        width={8.85499}
        height={2.39923}
        rx={1.19961}
        fill={color}
      />
    </Svg>
  )
}