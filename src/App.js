import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
// import Entry from "./page/entry/Entry.page";
// import Dashboard from "./page/dashboard/Dashboard.page";
import Addticket from "./page/new-ticket/Addticket.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <Addticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
