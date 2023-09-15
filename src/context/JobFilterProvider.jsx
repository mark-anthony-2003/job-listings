/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { JobLists } from "../data/JobLists"

const JobFilterContent = createContext()

export const JobFilterProvider = ({ children }) => {
   const [filteredJobs, setFilteredJobs] = useState([])

   const handleFilterItem = (text) => {
      if (filteredJobs.includes(text)) {
         setFilteredJobs(filteredJobs.filter(filteredJob => filteredJob !== text))
      } else {
         setFilteredJobs([...filteredJobs, text])
      }
   }

   // individual clear item
   const handleClearItem = (jobToRemove) => {
      const updatedFilteredJobs = filteredJobs.filter((filteredJob) => filteredJob !== jobToRemove)
      setFilteredJobs(updatedFilteredJobs)
   }

   // clear all items
   const handleClearItems = () => setFilteredJobs([])

   const filteredJobsData = filteredJobs.length
      ? JobLists.filter((job) => {
      return (
         filteredJobs.includes(job.role) ||
         filteredJobs.includes(job.level) ||
         job.languages.some((language) => filteredJobs.includes(language)) ||
         job.tools.some((tool) => filteredJobs.includes(tool))
      )
   }) : JobLists

   return (
      <JobFilterContent.Provider
         value={{ handleFilterItem, filteredJobs, handleClearItem, handleClearItems, filteredJobsData }}
      >
         { children }
      </JobFilterContent.Provider>
   )
}

export const useJobFilterContext = () => useContext(JobFilterContent)
