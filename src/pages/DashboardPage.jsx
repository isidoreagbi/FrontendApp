import MainContent from "../components/Dashboard/MainContent";
import Notification from "../components/Dashboard/Notification";
import Sidebar from "../components/Dashboard/Sidebar";


function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Notification />

     
        <MainContent />
      </div>
    </div>
  );
}

export default DashboardPage;
