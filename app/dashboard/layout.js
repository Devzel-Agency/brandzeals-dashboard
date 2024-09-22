import Dashboardnavbar from "@/components/dashboardnavbar";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <Dashboardnavbar/>
        {children}
       
      </body>
    </html>
  );
}
