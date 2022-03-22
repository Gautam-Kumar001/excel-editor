import { SpreadsheetComponent, SheetsDirective, SheetDirective } from "@syncfusion/ej2-react-spreadsheet";
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';

import "./xls-editor.styles.css";

const XLSEditor = () => {
  return (
    <div className="xls-editor">
      <SpreadsheetComponent
        allowOpen={true}
        allowSave={true} 
        openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
        saveUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save' 
      >
        <SheetsDirective>
          <SheetDirective>
            <ColumnsDirective>
                <ColumnDirective width={180}></ColumnDirective>
                <ColumnDirective width={130}></ColumnDirective>
                <ColumnDirective width={130}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
};

export default XLSEditor;
