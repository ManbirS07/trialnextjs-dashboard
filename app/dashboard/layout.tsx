import SideNav from '@/app/ui/dashboard/sidenav';
 
//When SHOULD you create another layout?
//Only when the structure changes, not the content.
//child uses the same layout as parent
//In this case, customers and invoices share the same layout as dashboard
//The layout file is the best way to create a shared layout that all pages in your application 
//can use.
export default function Layout({ children }: { children: React.ReactNode }) {
    //children are the props passed(jsx, components) whenever we wrap this layout component
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}