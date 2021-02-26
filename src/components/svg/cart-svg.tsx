import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CartSvg: React.FC<any> = ({ color = '#181725' }) => {
  return (
    <Svg width={23} height={21} viewBox="0 0 23 21" fill="none">
      <Path
        d="M9.178 20.352a2.445 2.445 0 110-4.89 2.445 2.445 0 010 4.89zm8.558 0a2.445 2.445 0 110-4.89 2.445 2.445 0 010 4.89zM1.796 3.14a1.176 1.176 0 010-2.351h1.406c1.103 0 2.057.765 2.297 1.841L7.03 9.53a2.352 2.352 0 002.296 1.841h9.185l1.763-7.055H8.849a1.176 1.176 0 010-2.35h11.426a2.35 2.35 0 012.281 2.922l-1.763 7.053a2.351 2.351 0 01-2.281 1.781H9.327a4.703 4.703 0 01-4.591-3.682L3.202 3.14H1.795z"
        fill={color}
      />
    </Svg>
  )
}