import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from "@syncfusion/ej2-react-spreadsheet";
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';

import "./xls-editor.styles.css";

const XLSEditor = () => {
  const beforeOpen = (args) => {
    // your code snippets here
  }

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
            {/* <RangesDirective>
                <RangeDirective dataSource={defaultData}></RangeDirective>
            </RangesDirective> */}
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
