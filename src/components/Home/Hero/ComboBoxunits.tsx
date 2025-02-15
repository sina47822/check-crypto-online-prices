"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Units } from '@/constant/units'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxUnitsProps {
  onSelect: (unit: string) => void // Accept an onSelect prop to handle the unit selection
}

export function ComboboxUnits({ onSelect }: ComboboxUnitsProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  // Handle selection of a unit and trigger the onSelect callback
  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue)
    setOpen(false)
    onSelect(currentValue) // Trigger the onSelect function with the selected unit
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] h-[70px] justify-between"
        >
          {value
            ? Units.find((unit) => unit.value === value)?.label
            : "USD"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search unit..." />
          <CommandList>
            <CommandEmpty>No unit found.</CommandEmpty>
            <CommandGroup>
              {Units.map((unit) => (
                <CommandItem
                  key={unit.value}
                  value={unit.value}
                  onSelect={() => handleSelect(unit.value)} // Use handleSelect for the onSelect logic
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === unit.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {unit.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
