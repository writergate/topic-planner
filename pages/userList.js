import * as React from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function UserList() {
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 500,
    maxColumns: 7,
  });

  return (
    <div style={{ width: '100%' }}>
      <Button
        sx={{ mb: 2 }}
        onClick={() => setCheckboxSelection(!checkboxSelection)}
      >
        Toggle checkbox selection
      </Button>
      <div style={{ height: 700 }}>
        <DataGrid checkboxSelection={checkboxSelection} {...data} />
      </div>
    </div>
  );
}

export default UserList;
