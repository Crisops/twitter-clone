export interface Birthday {
  key: string
  label: string
}

export const days: Birthday[] = [
  { key: '1', label: '1' },
  { key: '2', label: '2' },
  { key: '3', label: '3' },
  { key: '4', label: '4' },
  { key: '5', label: '5' },
  { key: '6', label: '6' },
  { key: '7', label: '7' },
  { key: '8', label: '8' },
  { key: '9', label: '9' },
  { key: '10', label: '10' },
  { key: '11', label: '11' },
  { key: '12', label: '12' },
  { key: '13', label: '13' },
  { key: '14', label: '14' },
  { key: '15', label: '15' },
  { key: '16', label: '16' },
  { key: '17', label: '17' },
  { key: '18', label: '18' },
  { key: '19', label: '19' },
  { key: '20', label: '20' },
  { key: '21', label: '21' },
  { key: '22', label: '22' },
  { key: '23', label: '23' },
  { key: '24', label: '24' },
  { key: '25', label: '25' },
  { key: '26', label: '26' },
  { key: '27', label: '27' },
  { key: '28', label: '28' },
  { key: '29', label: '29' },
  { key: '30', label: '30' },
  { key: '31', label: '31' }
]

export const months: Birthday[] = [
  { key: 'january', label: 'Enero' },
  { key: 'february', label: 'Febrero' },
  { key: 'March', label: 'Marzo' },
  { key: 'April', label: 'Abril' },
  { key: 'May', label: 'Mayo' },
  { key: 'June', label: 'Junio' },
  { key: 'July', label: 'Julio' },
  { key: 'August', label: 'Agosto' },
  { key: 'September', label: 'Septiembre' },
  { key: 'October', label: 'Octubre' },
  { key: 'November', label: 'Noviembre' },
  { key: 'December', label: 'Diciembre' }
]

const currentYear = new Date().getFullYear()
export const years: Birthday[] = Array.from({ length: 120 }, (_, index) => ({
  key: `${currentYear - index}`,
  label: `${currentYear - index}`
}))
