
import {Select, SelectItem} from "@nextui-org/react";
import {  months, days, years } from "@/lib/data-date";
import { ChangeEvent } from "react";
import { useCreateNewAccount } from "@/hooks/useStore";

export const SelectedBirthday = () => {

    const {initialForm, setInitialForm} = useCreateNewAccount(state => state)

    const handleOnSelectedChange = (e: ChangeEvent<HTMLSelectElement>) => {
        
        const {value, name} = e.target
        const birthday = {...initialForm.birthday, [name]: value}

        setInitialForm({ ...initialForm, birthday })
    }

    
  return (
    <div className="flex gap-4 mt-5">
        <Select label="Mes" name="month" radius="sm" variant="bordered" size="md" onChange={handleOnSelectedChange} selectedKeys={[initialForm.birthday.month]}>
            {
                months.map((month) => (
                    <SelectItem key={month.key} >
                        {month.label}
                    </SelectItem>
                ))
            }
        </Select>
        <Select label="Día" name="day" radius="sm" variant="bordered" size="md" onChange={handleOnSelectedChange} selectedKeys={[initialForm.birthday.day]}>
            {
                days.map((day) => (
                    <SelectItem key={day.key}>
                        {day.label}
                    </SelectItem>
                ))
            }
        </Select>
        <Select label="Año" name="year" radius="sm" variant="bordered" size="md" onChange={handleOnSelectedChange} selectedKeys={[initialForm.birthday.year]}>
            {
                years.map((year) => (
                    <SelectItem key={year.key}>
                        {year.label}
                    </SelectItem>
                ))
            }
        </Select>
    </div>
  )
}
