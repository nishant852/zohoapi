import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Reg} from './pages/reg';

window.ZOHO.embeddedApp.on("PageLoad",function(data)
{
  function fetchData(record)
  {
    console.log(record.name);
   
    let pushData = {
      "Vendor_Name": record.name ,
      "Email": record.email ,
      "Phone": record.mobile 
   
}
window.ZOHO.CRM.API.insertRecord({Entity:"Vendors",APIData:pushData,Trigger:["workflow"]})
.then(function(v){
  console.log(v);
});
window.ZOHO.CRM.UI.Popup.closeReload()
.then(function(data){
  console.log(data)
});
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Reg data={data} fetch={fetchData} />
    
    </React.StrictMode>
  );
})
window.ZOHO.embeddedApp.init();
