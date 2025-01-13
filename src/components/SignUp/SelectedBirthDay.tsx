import { Select, SelectItem } from '@nextui-org/react'
import { Birthday } from '@/lib/data-date'
import { ChangeEvent } from 'react'
import { useAuth } from '@/hooks/useStore'

interface SelectedBirthdayProps {
  label: string
  name: string
  date: Birthday[]
 }

export const SelectedBirthday = ({ label, name, date }: SelectedBirthdayProps) => {
  const { initialForm, setFormAuth } = useAuth(state => state)

  const handleOnSelectedChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target
    const birthday = { ...initialForm.birthday, [name]: value }

    setFormAuth({ ...initialForm, birthday })
  }

  return (
    <Select label={label} name={name} radius='sm' variant='bordered' size='md' onChange={handleOnSelectedChange}>
      {
        date.map((el) => (
          <SelectItem key={el.key}>
            {el.label}
          </SelectItem>
        ))
      }
    </Select>
  )
}
