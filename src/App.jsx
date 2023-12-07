import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import router from './routes/index';
import { PostFilterContextProvider } from "./contexts/PostFilterContext";
export const queryClient = new QueryClient();


export default function App() {
  return (
    <PostFilterContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </PostFilterContextProvider>
  );
}