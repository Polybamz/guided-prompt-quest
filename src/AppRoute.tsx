import useRouteTransition from "./hooks/useRouteTranstion"
import { Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"


export const AppRouter =()=>{
    useRouteTransition()

    return (
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    )

}

