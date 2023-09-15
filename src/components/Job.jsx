/* eslint-disable react/prop-types */
import Badge from "./Badge";
import FilterBadge from "./FilterBadge";

const Job = (props) => {
   const { job } = props

   return (
      <div className={`bg-white flex justify-between w-[70rem] rounded-md shadow-lg px-8 py-6 ${ job.featured == true && "border-l-4 border-[#5ba4a4]" }`}>

         <div className="flex items-center">
            <div className="flex gap-5">
               <div>
                  <img src={job.logo} alt={`${job.company} Logo`} />
               </div>
               <div className="flex flex-col justify-between text-start">
                  <div className="flex items-center gap-2">
                     <div className="text-[#5ba4a4] font-semibold">{job.company}</div>
                     <div className="flex items-center gap-1">
                        { job.new == true && <Badge text="New!" bgColor="bg-[#5ba4a4]" /> }
                        { job.featured == true && <Badge text="Featured" bgColor="bg-[#2c3a3a]" /> }
                     </div>
                  </div>
                  <div className="text-[#2c3a3a] text-lg font-semibold hover:text-[#5ba4a4] cursor-pointer">{job.position}</div>
                  <div className="flex items-center gap-3 text-sm text-[#7b8e8e]">
                     <div>{job.postedAt}</div> <span>•</span> <div>{job.contract}</div> <span>•</span> <div>{job.location}</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex items-center gap-3">
            <FilterBadge text={job.role} />
            <FilterBadge text={job.level} />
            { job.tools.map((tool, toolIndex) => <FilterBadge key={toolIndex} text={tool} />)}
            { job.languages.map((lang, langIndex) => <FilterBadge key={langIndex} text={lang} />)}
         </div>

      </div>
   )
}

export default Job
