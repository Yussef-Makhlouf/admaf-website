# ADMAF Website - Project Structure & Components Documentation

## 📋 Project Overview
**Name**: مركز أبو ظبي للفنون والثقافة - ADMAF (Abu Dhabi Center for Arts & Culture)  
**Type**: Next.js 15 + React 19 + TypeScript  
**Language**: Arabic (RTL)  
**Framework**: Next.js with Tailwind CSS  
**Styling**: Tailwind CSS + Custom Theme Colors  
**UI Library**: Radix UI + shadcn/ui  
**Status**: In Development

---

## 🏗️ Project Architecture

```
admaf-website/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with Navbar & Footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx             # About page with vision, mission, board
│   ├── activities/
│   │   ├── data.ts              # Activities data
│   │   ├── page.tsx             # Activities listing page
│   │   └── [id]/
│   │       └── page.tsx         # Activity detail page
│   ├── awards/
│   │   ├── data.ts              # Awards data
│   │   ├── page.tsx             # Awards listing page
│   │   └── [id]/
│   │       └── page.tsx         # Award detail page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── educational-programs/
│   │   ├── page.tsx             # Main programs page
│   │   ├── awards/              # Programs > Awards
│   │   │   └── page.tsx
│   │   ├── grants/              # Programs > Grants
│   │   │   └── page.tsx
│   │   └── initiatives/         # Programs > Initiatives
│   │       └── page.tsx
│   ├── festival/
│   │   └── page.tsx             # Festival page
│   ├── partnerships/
│   │   └── page.tsx             # Partnerships page
│   └── publications/
│       ├── loading.tsx          # Loading component
│       └── page.tsx             # Publications page
│
├── components/                   # Reusable components
│   ├── navbar.tsx               # Navigation bar (desktop & mobile)
│   ├── footer.tsx               # Footer with links & info
│   ├── hero.tsx                 # Hero section on homepage
│   ├── featured-content.tsx     # Featured activities section
│   ├── publications-showcase.tsx # Publications display
│   ├── festival-highlight.tsx   # Festival highlight section
│   ├── festival.tsx             # Festival info section
│   ├── activities.tsx           # Activities carousel component
│   ├── awards.tsx               # Awards display component
│   ├── publications.tsx         # Publications list component
│   ├── partners.tsx             # Partners logos section
│   ├── theme-provider.tsx       # Theme configuration
│   ├── layout/                  # Layout components
│   ├── ui/                      # UI component library (from shadcn/ui)
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   ├── tooltip.tsx
│   │   └── use-mobile.tsx
│   └── use-toast.ts
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
│
├── lib/                          # Utility functions
│   └── utils.ts                 # Helper functions (cn classname utility)
│
├── public/                       # Static assets
│   └── images/                  # Image files
│
├── styles/                       # Global styles
│   └── globals.css              # Tailwind directives
│
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.mjs              # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
└── components.json              # shadcn/ui config

```

---

## 📦 Dependencies

### Core Framework
- **Next.js 15.2.4** - React framework
- **React 19** - UI library
- **React DOM 19** - DOM rendering
- **TypeScript** - Type safety

### UI Components & Design
- **Radix UI** - Unstyled, accessible components
  - @radix-ui/react-accordion
  - @radix-ui/react-dialog
  - @radix-ui/react-dropdown-menu
  - @radix-ui/react-tabs
  - @radix-ui/react-navigation-menu
  - And 20+ more Radix components
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - CSS-in-JS pattern
- **tailwind-merge** - Merge Tailwind classes

### UI Features
- **Embla Carousel** - Carousel component
- **Framer Motion** - Animation library
- **Recharts** - Data visualization
- **Sonner** - Toast notifications
- **next-themes** - Theme management (light/dark)

### Forms & Validation
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Form resolvers
- **Zod** - Schema validation
- **date-fns** - Date utilities
- **input-otp** - OTP input component
- **react-day-picker** - Date picker

### Fonts
- **Cairo Font** - Arabic font (from Google Fonts)
- **Amiri Font** - Arabic font (from Google Fonts)

### Utilities
- **clsx** - Conditional classnames
- **cmdk** - Command palette
- **vaul** - Drawer component
- **react-resizable-panels** - Resizable panels
- **@heroui/react** - Additional UI components

---

## 🎨 Theme Colors (Custom ADMAF Palette)

```typescript
admaf: {
  burgundy: "#8B1538",    // Primary brand color
  gold: "#D4AF37",        // Accent color
  cream: "#F8F6F0",       // Light background
  charcoal: "#2C2C2C",    // Dark text
}
```

---

## 🗂️ Component Details & Usage

### 1. **Layout Components**

#### `Navbar` (`components/navbar.tsx`)
**Location**: Used in `app/layout.tsx`
**Features**:
- Sticky header with logo
- Desktop navigation menu with submenu support
- Mobile hamburger menu
- Search icon
- Language selector (العربية/EN)
- Navigation items with submenu (Educational Programs)
- Responsive design

**Navigation Structure**:
```
- الصفحة الرئيسية (Home)
- نبذة عنا (About)
- مهرجان أبوظبي (Festival)
- الأنشطة (Activities)
- المنشورات (Publications)
- البرنامج التعليمي والمجتمعي (Educational Programs)
  - المبادرات (Initiatives)
  - جوائز مجموعة أبوظبي (Awards)
  - المنح والدعم (Grants)
- الشراكات (Partnerships)
- تواصل معنا (Contact)
```

#### `Footer` (`components/footer.tsx`)
**Location**: Used in `app/layout.tsx`
**Features**:
- 4-column grid layout (About, Quick Links, Programs, Contact)
- Social media icons
- Contact information (address, phone, email)
- Copyright info
- Footer links (Privacy, Terms)
- Dark background with white text

### 2. **Homepage Components**

#### `Hero` (`components/hero.tsx`)
**Location**: Homepage hero section
**Features**:
- Full-screen height section
- Background image with overlay
- Main headline: "حيث تتواصل الفنون والثقافة والإبداع والابتكار"
- Call-to-action buttons
- Animated chevron down indicator
- Arabic typography

#### `FeaturedContent` (`components/featured-content.tsx`)
**Location**: Below hero on homepage
**Features**:
- Displays 3 featured activities
- Card layout with images
- Activity type badges
- Date, location, attendee info
- View details button
- "View All Activities" CTA
- Hover animations

**Sample Data Structure**:
```typescript
{
  id: number,
  type: string,
  title: string,
  description: string,
  image: string,
  date: string,
  location: string,
  category: string,
}
```

#### `PublicationsShowcase` (`components/publications-showcase.tsx`)
**Location**: Below featured content on homepage
**Features**:
- Grid of 4 publication cards
- Publication types: Magazine, Report, Book, Guide
- Book-like layout with aspect ratio 3/4
- View and Download buttons
- Year and issue information
- Background: `admaf-cream` color

#### `FestivalHighlight` (`components/festival-highlight.tsx`)
**Location**: Bottom section of homepage
**Features**:
- 2-column layout (text + image)
- Festival information
- Key details (date, location, participants)
- Call-to-action buttons
- Decorative gold circle with edition number

### 3. **Page Components**

#### About Page (`app/about/page.tsx`)
**Sections**:
1. **النبذة عنا** (About section)
   - Main description with images
   - Founding year: 1996

2. **الراعي** (Patron)
   - Sponsor information
   - Royal patronage details

3. **المؤسس** (Founder)
   - Founder biography

4. **مجلس الأمناء** (Board of Trustees)
   - List of board members
   - Board image

5. **المستشارين** (Advisors)
   - Horizontal scrolling advisor cards
   - Profile images
   - Advisor roles

6. **الرؤية** (Vision)
   - Vision statement
   - Mission description

7. **الركائز الاستراتيجية** (Strategic Pillars)
   - Three main pillars with descriptions
   - Strategic image

8. **Partners** Component

#### Activities Page (`app/activities/page.tsx`)
**Features**:
- Hero section with page title
- Tab filters by category:
  - الكل (All)
  - مؤتمرات (Conferences)
  - معارض (Exhibitions)
  - ورش عمل (Workshops)
  - ندوات (Seminars)
  - مهرجانات (Festivals)
- Advanced filter button
- Activity grid with cards
- Click to view details
- Dynamic routing with [id]

**Activity Data Structure**:
```typescript
{
  id: number,
  title: string,
  description: string,
  image: string,
  date: string,
  location: string,
  category: string,
  status: string,
  attendees: string,
}
```

#### Awards Page (`app/awards/page.tsx`)
**Features**:
- Award listings
- Dynamic routing with [id]
- Detailed award information

#### Publications Page (`app/publications/page.tsx`)
**Features**:
- Loading state with `loading.tsx`
- Publications listing
- Download/View functionality

#### Festival Page (`app/festival/page.tsx`)
**Content**:
- Festival history and description
- Annual events information
- Image showcase

#### Contact Page (`app/contact/page.tsx`)
- Contact form
- Contact information
- Map integration (optional)

#### Educational Programs Pages (`app/educational-programs/*`)
- Nested routes for:
  - `/educational-programs/initiatives`
  - `/educational-programs/awards`
  - `/educational-programs/grants`

#### Partnerships Page (`app/partnerships/page.tsx`)
- Partner listings
- Logo galleries

### 4. **Shared Components**

#### `Activities` (`components/activities.tsx`)
**Features**:
- Carousel-style activities display
- 5 sample activities
- Navigation buttons (previous/next)
- Activity tags
- Responsive grid layout

#### `Awards` (`components/awards.tsx`)
**Features**:
- Main featured award (2/3 width)
- Side awards (1/3 width)
- Award descriptions
- "More" button

#### `Festival` (`components/festival.tsx`)
**Features**:
- Festival description sections
- Festival image
- Historical information

#### `Publications` (`components/publications.tsx`)
**Features**:
- Publications grid (4 columns)
- Publication types displayed
- Image with book layout

#### `Partners` (`components/partners.tsx`)
**Features**:
- 8 partner logos
- Grayscale with hover effect
- 8-column responsive grid
- "More" button

### 5. **UI Components Library** (shadcn/ui)

All 40+ Radix UI-based components available:

**Form Components**:
- `Button` - Various sizes and variants
- `Input` - Text input
- `Textarea` - Multi-line text
- `Select` - Dropdown select
- `Checkbox` - Checkbox input
- `Radio-Group` - Radio buttons
- `Switch` - Toggle switch
- `Label` - Form labels
- `Form` - Form builder

**Layout Components**:
- `Card` - Container component
- `Tabs` - Tab navigation
- `Accordion` - Collapsible sections
- `Breadcrumb` - Navigation breadcrumb

**Dialog Components**:
- `Dialog` - Modal dialog
- `Alert-Dialog` - Alert dialog
- `Drawer` - Slide-out drawer
- `Popover` - Popup content
- `Hover-Card` - Hover tooltip

**Navigation**:
- `Navigation-Menu` - Mega menu
- `Dropdown-Menu` - Dropdown menu
- `Context-Menu` - Right-click menu
- `Menubar` - Menu bar
- `Pagination` - Page pagination

**Display Components**:
- `Badge` - Status badge
- `Avatar` - User avatar
- `Progress` - Progress bar
- `Skeleton` - Loading placeholder
- `Separator` - Visual divider
- `Carousel` - Image carousel

**Data Display**:
- `Table` - Data table
- `Chart` - Data visualization
- `Calendar` - Date picker calendar

**Utility Components**:
- `Sonner` - Toast notifications
- `Toaster` - Toast container
- `Use-Toast` - Hook for toast
- `Use-Mobile` - Mobile detection hook

---

## 🔧 Configuration Files

### `tailwind.config.ts`
- Custom ADMAF color palette
- Animation definitions (accordion, fade-in)
- Container settings (max-width: 1400px)
- Radix UI animation keyframes

### `next.config.mjs`
- Next.js optimization settings

### `tsconfig.json`
- TypeScript strict mode
- Path aliases (@/components, @/app, etc.)

### `package.json`
- Project metadata
- Scripts: dev, build, start, lint
- All dependencies and versions

---

## 📱 Responsive Design

- **Mobile First**: Tailwind mobile-first approach
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Mobile Menu**: Hamburger menu for screens < md
- **Grid Layouts**: Adaptive columns based on screen size
- **Font Sizes**: Responsive typography

---

## 🌍 Internationalization (i18n)

- **Language**: Arabic (العربية)
- **Direction**: RTL (Right-to-Left)
- **Fonts**: Cairo (main), Amiri (headings)
- **HTML attributes**: `lang="ar" dir="rtl"`

---

## 🎯 Key Features

1. **Sticky Navigation** - Navbar stays at top
2. **Mobile Responsive** - Full mobile support
3. **Dark Mode Ready** - next-themes integration
4. **Accessible** - Radix UI built-in accessibility
5. **Performance** - Image optimization, code splitting
6. **SEO Ready** - Next.js metadata support
7. **Dynamic Routes** - [id] parameters for detail pages
8. **Loading States** - Built-in loading.tsx support
9. **Theme Customization** - ThemeProvider component
10. **Rich Animations** - Framer Motion integration

---

## 📊 Data Management

- **Static Data**: Stored in `.ts` files (data.ts files)
- **Component Props**: Type-safe TypeScript interfaces
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React hooks (useState, useContext)

---

## 🚀 Performance Features

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Font Optimization**: next/font for Google Fonts
- **CSS Optimization**: Tailwind purging
- **SEO Optimization**: Metadata in layout.tsx

---

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `Hero`, `Navbar`)
- **Functions**: camelCase (e.g., `activitiesData`)
- **Files**: kebab-case (e.g., `featured-content.tsx`)
- **CSS Classes**: kebab-case with Tailwind
- **Tailwind Custom**: `admaf-` prefix (e.g., `admaf-burgundy`)

---

## 🔗 Page Hierarchy

```
/ (Home)
├── /about
├── /festival
├── /activities
│   └── /activities/[id]
├── /awards
│   └── /awards/[id]
├── /contact
├── /educational-programs
│   ├── /educational-programs/initiatives
│   ├── /educational-programs/awards
│   └── /educational-programs/grants
├── /partnerships
└── /publications
```

---

## 🎨 Component Usage Examples

### Using Button Component
```typescript
import { Button } from "@/components/ui/button"

<Button className="bg-admaf-burgundy hover:bg-admaf-burgundy/90">
  اكتشف المزيد
</Button>
```

### Using Card Component
```typescript
import { Card, CardContent } from "@/components/ui/card"

<Card>
  <CardContent className="p-6">
    Content here
  </CardContent>
</Card>
```

### Using Navigation Menu
```typescript
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
```

### Using Toast Notifications
```typescript
import { useToast } from "@/hooks/use-toast"

const { toast } = useToast()
toast({
  title: "Success",
  description: "Operation completed"
})
```

---

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Radix UI**: https://www.radix-ui.com
- **shadcn/ui**: https://ui.shadcn.com
- **Lucide Icons**: https://lucide.dev

---

**Last Updated**: December 3, 2025  
**Version**: 0.1.0
