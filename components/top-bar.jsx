"use client";

import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { Menu, X, MessageSquareText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Profile", href: "#" },
  { name: "Stake", href: "#" },
];

export default function TopBar() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Adaptive Learning Platform</span>
            <div className="h-8 w-auto flex items-center font-bold text-primary text-xl">
              <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center mr-2">
                A
              </div>
              GuidEd
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {isConnected ? (
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => disconnect()}
            >
              {address?.slice(0, 6)}...{address?.slice(-4)} (Disconnect)
              <ChevronDown className="h-4 w-4" />
            </Button>
          ) : (
            connectors.map((connector) => (
              <Button
                key={connector.id}
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => connect({ connector })}
              >
                Connect {connector.name}
                <ChevronDown className="h-4 w-4" />
              </Button>
            ))
          )}

          <Button variant="ghost" size="icon" className="text-primary">
            <MessageSquareText className="h-5 w-5" />
            <span className="sr-only">AI Chatbot</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
