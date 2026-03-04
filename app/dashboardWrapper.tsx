// app/components/DashboardWrapper.tsx
import React from "react";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Sidebar would go here */}
      <main className="dark:bg-black-bg flex w-full flex-col bg-gray-50 md:pl-64">
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
