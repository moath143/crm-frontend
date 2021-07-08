import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
// import Entry from "./page/entry/Entry.page";
// import Dashboard from "./page/dashboard/Dashboard.page";
import Addticket from "./page/new-ticket/Addticket.page";
import TicketList from "./page/ticket-list/TicketList.page";
import Ticket from "./page/ticket/Ticket.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <Addticket /> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;

/*
! [1]: Layout Folder => {partials folder, DefaultLayout file} ========> App.js
* [1][1]: partial folder {footer and header file} ================> defaultLayout.js

! [2]: Page Folder => every page for prototype ex.{dashboard, entry and new-ticket}
* [2][1]: dashboard => Dashboard.js and inside it {every thing about components of dashboard}
* [2][2]: entry => Entry.js and inside it {every thing about components of login and register form}
* [2][3]: new-ticket => Addticket.js and inside it {every thing about components of add ticket form}


! [3]: Components Folder => {add-ticket-form, breadcrumb, login, password-reset, ticket-table}
* [3][1]: add-ticket-form => Add-new-ticket.js component
* [3][2]: breadcrumb => Breadcrumb.js
* [3][3]: login => Login.js
* [3][4]: password-reset => Passwordreset.js
* [3][5]: ticket-table => TicketTable.js


! [4]: Assets Folder => {data, images}
* [4][1]: data => json files for excute data
* [4][2]: images => images for project


! [5]: Utils Folder => Validation.js
*/
