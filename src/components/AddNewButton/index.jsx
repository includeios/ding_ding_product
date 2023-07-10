import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function AddNewButton() {
  return (
    <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
        新增
    </Button>
  )
}