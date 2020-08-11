import React from "react";

import '@adaptabletools/adaptable-react-aggrid/index.css'; // this also includes the light theme
import '@adaptabletools/adaptable-react-aggrid/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine-dark.css";

import { AgGridReact } from "@ag-grid-community/react";
import AdaptableReact from '@adaptabletools/adaptable-react-aggrid';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

import {LicenseManager} from "@ag-grid-enterprise/core";

import { useGrid } from './grid-config';
LicenseManager.setLicenseKey("CompanyName=Vakt Global Limited,LicensedApplication=VAKT,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=5,LicensedProductionInstancesCount=1,AssetReference=AG-008165,ExpiryDate=22_May_2021_[v2]_MTYyMTYzODAwMDAwMA==177710523d6e6207c1afc12ad79488d2");

interface GridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columnDefs: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowData: any[];
};

export const Grid = ({columnDefs, rowData}: GridProps) => {

  const { gridOptions, adaptableOptions } = useGrid(columnDefs, rowData);
  return (
    <div className="ag-theme-balham-dark" style={{ display: "flex", flexFlow: "column", height: "500px" }}>
      <AdaptableReact
        style={{ flex: "none" }}
        gridOptions={gridOptions}
        adaptableOptions={adaptableOptions}
      />
      <div className="ag-theme-alpine-dark" style={{ flex: 1 }}>
        <AgGridReact
          gridOptions={gridOptions}
          modules={AllEnterpriseModules}
        />
      </div>
    </div>
  );
};
