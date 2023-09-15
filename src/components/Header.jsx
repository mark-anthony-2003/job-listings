import headerDesktop from '../assets/images/bg-header-desktop.svg'
import iconRemove from '../assets/images/icon-remove.svg'
import { useJobFilterContext } from '../context/JobFilterProvider'

const Header = () => {
   const { filteredJobs, handleClearItem, handleClearItems } = useJobFilterContext()

   return (
      <div className="bg-[#5ba4a4] w-full relative fixed">
         <img src={headerDesktop} alt="headerDesktop" className="w-full" />

         <div className="w-full flex justify-center">
            { !filteredJobs.length == 0 && (
               <div className="absolute -bottom-8 shadow-lg rounded-md bg-white w-[70.3rem] px-10 py-4 flex items-center">
                  <div className="flex-1 h-6">
                     <div className="flex items-center gap-2 h-full">
                        { filteredJobs.map((filteredJob, filteredJobIndex) => (
                           <div key={filteredJobIndex} className="text-[#5ba4a4] text-sm bg-[#eef6f6] h-full w-18 flex justify-center items-center rounded-sm overflow-hidden">
                              <div className="bg-transparent px-2 pt-1 h-full ">{filteredJob}</div>
                              <div onClick={() => handleClearItem(filteredJob)} className="bg-[#5ba4a4] hover:bg-[#2c3a3a] h-full w-6 cursor-pointer flex justify-center items-center">
                                 <img src={iconRemove} alt="iconRemove" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div onClick={handleClearItems} className="text-[#2c3a3a] hover:underline hover:text-[#5ba4a4] cursor-pointer h-6">Clear</div>
               </div>
            )}
         </div>
      </div>
   )
}

export default Header
