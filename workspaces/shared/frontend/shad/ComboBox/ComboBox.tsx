'use client'
import { useState, useRef } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from 'utils'
import { Button } from 'shad/base/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from 'shad/base/command'
import { Popover, PopoverContent, PopoverTrigger } from 'shad/base/popover'
import setNativeValue from '../utils/setNativeValue'

type Props = {
  name: string
  placeholder?: string
  search?: boolean
  options: [{ label: string; value: string | number }]
  onChange: () => {}
  onValueChange: () => {}
}

const ComboBox = (props: Props) => {
  const { name, options, placeholder, search = false, onChange, onValueChange } = props
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const selectRef = useRef()

  const onSelect = currentValue => {
    setValue(currentValue === value ? '' : currentValue)
    setOpen(false)
    selectRef.current.value = currentValue
    selectRef.current.dispatchEvent(new Event('change', { bubbles: true }))
    if (onValueChange) onValueChange(currentValue)
  }

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value ? options.find(option => option.value === value)?.label : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            {search && <CommandInput placeholder="Search..." />}

            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {options.map(option => (
                <CommandItem key={option.value} onSelect={onSelect}>
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === option.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <select hidden name={name} ref={selectRef} onChange={onChange}>
        <option val={null}>{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  )
}

export default ComboBox
