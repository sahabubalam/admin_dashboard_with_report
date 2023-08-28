import './App.css';
import logo from './assets/images/logo.svg'
import {Route, Routes} from 'react-router-dom';
import {AppProvider} from "./contexts/apps";
import {useState} from "react";
import DataTable from "./components/salesReport/SalesReport1";
import Dashboard from "./components/dashboard/Dashboard";
import {Users} from "./components/users/Users";
import CommercialReport from './components/commercialReport/CommercialReport';
import DeliveryReport from './components/deliveryReport/DeliveryReport';
import AccountingReport from './components/accountReport/AccountingReport';
import InventoryReport from './components/inventoryReport/InventoryReport';
import Login from "./components/auth/Login";


function App() {

    const [collapsed, setCollapsed] = useState(false)
    const contextValue = {collapsed, setCollapsed, logo}

    return (
        <AppProvider value={contextValue}>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/user" element={<Users/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/sales-report-1" element={<DataTable/>}/>
                <Route path="/sales-report-2" element={<DataTable/>}/>
                <Route path="/delivery-report" element={<DeliveryReport/>}/>
                <Route path="/commercial-report" element={<CommercialReport/>}/>
                <Route path="/accounting-report" element={<AccountingReport/>}/>
                <Route path="/inventory-report" element={<InventoryReport/>}/>
                
            </Routes>
        </AppProvider>
    );
}

export default App;
