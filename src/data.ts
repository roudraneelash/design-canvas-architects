
import { Home, FolderKanban, MessageSquare } from 'lucide-react';
import { ReactNode } from 'react';

export interface NavItem {
  name: string;
  href: string;
  icon?: ReactNode;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/contact" },
];
