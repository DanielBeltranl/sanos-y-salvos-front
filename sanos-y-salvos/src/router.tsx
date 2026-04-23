import {Route, Routes} from "react-router";
import {RolSelectorView} from "./context/rolSelectionPage/rolSelectorView.tsx";


export const AppRouter = () => {

    return (
            <Routes>
                <Route path="/" element={<RolSelectorView/>}/>
            </Routes>

    )

}