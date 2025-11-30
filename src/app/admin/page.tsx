"use client";

import AdminOrders from "@/features/order/components/adminOrders";

export default function Page() {
  return (
    <div>
      <h1 className="mb-8">All Orders</h1>
      <AdminOrders />
    </div>
  );
}
