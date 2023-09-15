/* eslint-disable react/prop-types */

const Badge = (props) => {
   const { text, bgColor } = props

   return <div className={`uppercase ${bgColor} text-white text-xs rounded-full px-2 pt-1 pb-0.5`}>{text}</div>
}

export default Badge
