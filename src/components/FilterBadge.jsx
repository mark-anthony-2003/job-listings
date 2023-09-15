/* eslint-disable react/prop-types */
import { useJobFilterContext } from "../context/JobFilterProvider";

const FilterBadge = (props) => {
   const { text } = props
   const { handleFilterItem } = useJobFilterContext()

   return (
      <div 
         onClick={() => handleFilterItem(text)}
         className="text-[#5ba4a4] text-sm bg-[#eef6f6] rounded-sm px-2 pt-1 cursor-pointer hover:text-white hover:bg-[#5ba4a4]"
      > {text}
      </div>
   )
}

export default FilterBadge
