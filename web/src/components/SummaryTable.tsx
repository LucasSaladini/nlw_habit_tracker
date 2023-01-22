import { generateDatesFromYearBeginning } from "../utils/generateDatesFromYearBeginning"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()

export function SummaryTable() {
    return (
        <div className="w-full flex">
            {/* Display week days vertically based on const weekDays */}
            <div className="grid grid-rows-7 grid-flow-row gap-3 mt-10">
                {weekDays.map((weekDay, i) => {
                    return (
                        <div 
                            key={`${weekDay}-${i}`} 
                            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
                        >
                                {weekDay}
                        </div>
                    )
                })}
            </div>
            {/* Squares on the right of each week day */}
            <div className="grid grid-rows-7 grid-flow-col gap-3 mt-11">
                {summaryDates.map(date => {
                    return <HabitDay key={date.toString()}/>
                })}
            </div>
        </div>
    )
}