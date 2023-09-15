import {useJobFilterContext} from "../context/JobFilterProvider"
import Job from "./Job"

const Jobs = () => {
   const { filteredJobsData } = useJobFilterContext()

   return (
      <div className="flex flex-col gap-5 mt-20 mb-32">
         { filteredJobsData.map(job => (
            <Job key={job.id} job={job} />
         ))}
      </div>
   )
}

export default Jobs
