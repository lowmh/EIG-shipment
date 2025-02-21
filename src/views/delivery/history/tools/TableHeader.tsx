import { Box, Button } from '@mui/material'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** React
import { useCallback } from 'react'

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
}

const TableHeader = ({ value, handleFilter, toggle }: TableHeaderProps) => {
  const handleAddShipment = useCallback(() => {
    toggle()
  }, [toggle])

  return (
    <Box
      sx={{
        py: 4,
        px: 6,
        rowGap: 2,
        columnGap: 4,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Button color="secondary" variant="tonal" startIcon={<Icon icon="tabler:upload" />}>
        Export
      </Button>

      <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <CustomTextField
          value={value}
          sx={{ mr: 4 }}
          placeholder="Search Shipment"
          onChange={(e) => handleFilter(e.target.value)}
        />

        <Button onClick={handleAddShipment} variant="contained" sx={{ '& svg': { mr: 2 } }}>
          <Icon fontSize="1.125rem" icon="tabler:plus" />
          Add New Shipment
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
