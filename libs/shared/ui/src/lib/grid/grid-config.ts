import { GridOptions } from '@ag-grid-community/all-modules';
import { AdaptableOptions, PredefinedConfig } from '@adaptabletools/adaptable/types';

const demoConfig: PredefinedConfig = {
  Theme: {
    CurrentTheme: 'dark',
  },
  Dashboard: {
    VisibleButtons: ['ColumnChooser', 'CalculatedColumn', 'FreeTextColumn'],
  },
} as PredefinedConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGrid = (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  // create the AdapTable Options object including any plugins
  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'id',
    userName: 'bargesUser',
    adaptableId: 'Movement',
    userInterfaceOptions: { // show the AdapTable ToolPanel
      showAdaptableToolPanel: true,
    },
    predefinedConfig: demoConfig,
  };

  return { gridOptions, adaptableOptions };
};
