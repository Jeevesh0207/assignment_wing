import { useState } from "react";
import { Separator } from "@/components/Setting/separator";
import { SidebarNav } from "@/components/Setting/sidebar-nav";
import { ProfileForm } from "@/components/Setting/profile-form";
import { AccountForm } from "@/components/Setting/account-form";
import { NotificationsForm } from "@/components/Setting/notifications-form";
import { SecurityForm } from "@/components/Setting/security-form";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "#profile",
  },
  {
    title: "Account",
    href: "#account",
  },
  {
    title: "Notifications",
    href: "#notifications",
  },
  {
    title: "Security",
    href: "#security",
  },
];

export default function Setting() {
  const [metadata] = useState({
    title: "Settings",
    description: "Manage your account settings and preferences.",
  });

  return (
    <div className="w-full h-screen overflow-scroll no-scrollbar">
      <div className="container mx-auto space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-medium tracking-tight">
            {metadata.title}
          </h2>
          <p className="text-muted-foreground text-[15px]">{metadata.description}</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-6">
              <div id="profile">
                <h3 className="text-lg font-medium text-colors_01">Profile</h3>
                <ProfileForm />
              </div>
              <Separator />
              <div id="account">
                <h3 className="text-lg font-medium text-colors_01">Account</h3>
                <AccountForm />
              </div>
              <Separator />
              <div id="notifications">
                <h3 className="text-lg font-medium text-colors_01">Notifications</h3>
                <NotificationsForm />
              </div>
              <Separator />
              <div id="security">
                <h3 className="text-lg font-medium text-colors_01">Security</h3>
                <SecurityForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
