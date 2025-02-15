import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cryptoes } from '@/constant/cryptoPrice'
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

interface ComboboxCryptoProps {
  onSelect: (crypto: string, price: number) => void // Define the onSelect prop
}

export function ComboboxCrypto({ onSelect }: ComboboxCryptoProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  // Handle selection and call the onSelect function passed from the parent
  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue)
    setOpen(false)

    const selectedCrypto = cryptoes.find((crypto) => crypto.value === currentValue)
    if (selectedCrypto) {
      onSelect(currentValue, selectedCrypto.price) // Pass the selected crypto value and its price
    }
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
            ? cryptoes.find((framework) => framework.value === value)?.label
            : "BTC"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {cryptoes.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={() => handleSelect(framework.value)} // Use handleSelect for the onSelect logic
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
