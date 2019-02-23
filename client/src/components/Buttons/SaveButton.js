import React from 'react'
import { Button } from 'reactstrap';
import SaveIcon from '@material-ui/icons/Save';

export default function SaveButton() {
  return (
    <Button color="primary" size="lg">
        <SaveIcon className="mr-2" />
        Save Changes
    </Button>
  )
}
