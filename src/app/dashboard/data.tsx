import {
  ArrowLeftRight,
  LayoutDashboard,
  Calendar,
  Activity,
  ChevronRight,
  User,
  ChevronLeft,
  Settings,
  LogOut,
  LucideProps,
FileBarChart 
} from 'lucide-react'

type Link = {
  title: string
  label?: string
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<LucideProps> & React.RefAttributes<SVGSVGElement>
  >
  variant: 'default' | 'ghost'
  href: string
}

const topLinks: Link[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    variant: 'default',
    href: '/dashboard'
  },
  {
    title: 'Transactions',
    icon: ArrowLeftRight,
    variant: 'ghost',
    href: '/dashboard/transactions'
  },
  {
    title: 'Calendar',
    icon: Calendar,
    variant: 'ghost',
    href: '/dashboard/calendar'
  },
  {
    title: 'Reports',
    icon: FileBarChart,
    variant: 'ghost',
    href: '/dashboard/reports'
  }
]

const bottomLinks: Link[] = [
  {
    title: 'Log Out',
    icon: LogOut,
    variant: 'ghost',
    href: '/logout'
  }
]

const adminTopLinks: Link[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    variant: 'default',
    href: '/dashboard'
  },
  {
    title: 'Transactions',
    icon: ArrowLeftRight,
    variant: 'ghost',
    href: '/dashboard/transactions'
  },
  {
    title: 'Calendar',
    icon: Calendar,
    variant: 'ghost',
    href: '/dashboard/calendar'
  },
  {
    title: 'Reports',
    icon: FileBarChart,
    variant: 'ghost',
    href: '/dashboard/reports'
  },
  {
    title: 'Employees',
    icon: User,
    variant: 'ghost',
    href: '/dashboard/employees'
  }
]

const adminBottomLinks: Link[] = [
  {
    title: 'Settings',
    icon: Settings,
    variant: 'ghost',
    href: '/dashboard/admin/settings'
  },
  {
    title: 'Log Out',
    icon: LogOut,
    variant: 'ghost',
    href: '/logout'
  }
]

const transactions = [
  {
    "month": 0,
    "income": 0.00,
    "expense": 0.00,
    "total": 0.00
  },
  {
    "month": 1,
    "income": 0.00,
    "expense": 0.00,
    "total": 0.00
  },
  {
    "month": 2,
    "income": 0.00,
    "expense": 0.00,
    "total": 0.00
  },
  {
    "month": 3,
    "income": 0.00,
    "expense": 0.00,
    "total": 0.00
  },
  {
    "month": 4,
    "income": 8540.42,
    "expense": 8112.55,
    "total": 427.87
  },
  {
    "month": 5,
    "income": 6496.45,
    "expense": 4386.52,
    "total": 2109.93
  },
  {
    "month": 6,
    "income": 6514.35,
    "expense": 9174.88,
    "total": -2660.53
  },
  {
    "month": 7,
    "income": 6009.06,
    "expense": 4704.32,
    "total": 1304.74
  },
  {
    "month": 8,
    "income": 5648.38,
    "expense": 6570.49,
    "total": -922.11
  },
  {
    "month": 9,
    "income": 6063.35,
    "expense": 7189.61,
    "total": -1126.26
  },
  {
    "month": 10,
    "income": 5499.28,
    "expense": 7018.41,
    "total": -1519.13
  },
  {
    "month": 11,
    "income": 7754.06,
    "expense": 9266.01,
    "total": -1511.95
  }
]

export { topLinks, bottomLinks, adminTopLinks, adminBottomLinks, transactions }