# Style Guide

Design system and component reference for ClaudeHub Dashboard.

## Colors

### Primary Palette (Blue)
| Name | Tailwind Class | Hex | Usage |
|------|---------------|-----|-------|
| Primary | `primary-600` | #2563eb | Buttons, links, accents |
| Primary Light | `primary-100` | #dbeafe | Backgrounds, hover states |
| Primary Dark | `primary-700` | #1d4ed8 | Hover states, emphasis |
| Primary 50 | `primary-50` | #eff6ff | Subtle backgrounds |

### Accent Palette (Amber)
| Name | Tailwind Class | Hex | Usage |
|------|---------------|-----|-------|
| Accent | `accent-500` | #f59e0b | CTAs, highlights, warnings |
| Accent Light | `accent-400` | #fbbf24 | Hover states |
| Accent Dark | `accent-600` | #d97706 | Active states |

### Neutral Palette
| Name | Tailwind Class | Hex | Usage |
|------|---------------|-----|-------|
| Gray 900 | `gray-900` | #111827 | Headings |
| Gray 700 | `gray-700` | #374151 | Body text |
| Gray 600 | `gray-600` | #4b5563 | Secondary text |
| Gray 500 | `gray-500` | #6b7280 | Muted text |
| Gray 200 | `gray-200` | #e5e7eb | Borders |
| Gray 100 | `gray-100` | #f3f4f6 | Backgrounds |
| Gray 50 | `gray-50` | #f9fafb | Subtle backgrounds |

### Status Colors
| Status | Class | Usage |
|--------|-------|-------|
| Success | `green-500` | Positive actions, confirmations |
| Error | `red-500` | Errors, destructive actions |
| Warning | `yellow-500` | Warnings, cautions |
| Info | `blue-500` | Information, tips |

## Typography

### Font
- **Primary Font**: Inter (via `next/font/google`)
- **Fallback**: System sans-serif

### Scale
| Element | Classes | Size | Weight |
|---------|---------|------|--------|
| H1 | `text-4xl font-bold` | 36px | 700 |
| H2 | `text-3xl font-bold` | 30px | 700 |
| H3 | `text-2xl font-semibold` | 24px | 600 |
| H4 | `text-xl font-semibold` | 20px | 600 |
| H5 | `text-lg font-medium` | 18px | 500 |
| Body | `text-base` | 16px | 400 |
| Small | `text-sm` | 14px | 400 |
| XSmall | `text-xs` | 12px | 400 |

### Line Heights
- Headings: `leading-tight` (1.25)
- Body: `leading-relaxed` (1.625)

## Component Classes

### Buttons

```html
<!-- Primary Button -->
<button class="btn-primary">Save Changes</button>

<!-- Secondary Button -->
<button class="btn-secondary">Cancel</button>

<!-- Outline Button -->
<button class="btn-outline">Learn More</button>

<!-- Accent Button -->
<button class="btn-accent">Get Started</button>
```

Button sizes (add to base class):
- Default: `py-2 px-4`
- Large: `py-3 px-6`
- Small: `py-1.5 px-3 text-sm`

### Cards

```html
<div class="card">
  <div class="p-6">
    <!-- Card content -->
  </div>
</div>
```

Card variants:
- Default: White background, subtle border, rounded corners
- Hover effect: Add `hover:shadow-lg transition-shadow`

### Form Inputs

```html
<input type="text" class="input" placeholder="Enter text..." />
<select class="input">...</select>
<textarea class="input" rows="4">...</textarea>
```

### Navigation Links

```html
<a href="/page" class="nav-link">Link Text</a>
<a href="/active" class="nav-link active">Active Link</a>
```

## Layout

### Container
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
```

### Grid Patterns
```html
<!-- 3-column grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- 4-column stats -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">

<!-- Sidebar layout -->
<div class="flex">
  <aside class="w-64 flex-shrink-0">...</aside>
  <main class="flex-1">...</main>
</div>
```

## Spacing

### Standard Spacing Scale
| Size | Pixels | Usage |
|------|--------|-------|
| `1` | 4px | Tight spacing |
| `2` | 8px | Icon gaps |
| `3` | 12px | Small gaps |
| `4` | 16px | Default gaps, small padding |
| `6` | 24px | Card padding, section gaps |
| `8` | 32px | Section padding |
| `12` | 48px | Large section gaps |
| `16` | 64px | Page sections |

### Common Patterns
- Card padding: `p-6`
- Section padding: `py-12` or `py-16`
- Grid gaps: `gap-4` or `gap-6`
- Stack spacing: `space-y-4`

## Icons

Using **Lucide React**. Import individually for tree-shaking:

```tsx
import { Home, Settings, User, ChevronRight } from 'lucide-react'
```

### Icon Sizes
| Size | Classes | Usage |
|------|---------|-------|
| XS | `h-3 w-3` | Badges, indicators |
| SM | `h-4 w-4` | Inline with text |
| MD | `h-5 w-5` | Buttons, inputs |
| LG | `h-6 w-6` | Navigation, headers |
| XL | `h-8 w-8` | Feature icons |
| 2XL | `h-12 w-12` | Hero icons |

### Icon + Text
```html
<button class="flex items-center space-x-2">
  <Icon class="h-5 w-5" />
  <span>Button Text</span>
</button>
```

## Shadows

| Class | Usage |
|-------|-------|
| `shadow-sm` | Cards, inputs |
| `shadow` | Dropdowns, modals |
| `shadow-lg` | Hover states, elevated cards |
| `shadow-xl` | Modals, popovers |

## Border Radius

| Class | Pixels | Usage |
|-------|--------|-------|
| `rounded` | 4px | Buttons, inputs |
| `rounded-lg` | 8px | Cards, modals |
| `rounded-xl` | 12px | Large cards |
| `rounded-full` | 50% | Avatars, pills |

## Animations

### Defined in globals.css
- `.animate-fadeIn` - Fade in with slight upward movement
- `.animate-slideUp` - Slide up from below

### Tailwind Transitions
```html
<!-- Color transition -->
<button class="transition-colors duration-200">

<!-- Shadow transition -->
<div class="transition-shadow duration-300">

<!-- All transitions -->
<div class="transition-all duration-200">
```

## Responsive Breakpoints

| Prefix | Min Width | Common Usage |
|--------|-----------|--------------|
| (none) | 0px | Mobile first |
| `sm:` | 640px | Mobile landscape |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |
| `2xl:` | 1536px | Extra large |

### Common Responsive Patterns
```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">

<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col md:flex-row">

<!-- Full width on mobile, fixed on desktop -->
<div class="w-full md:w-64">
```

## Charts (Recharts)

### Color Palette for Charts
```tsx
const CHART_COLORS = [
  '#2563eb', // primary-600
  '#f59e0b', // accent-500
  '#10b981', // green-500
  '#8b5cf6', // purple-500
  '#ec4899', // pink-500
]
```

### Standard Chart Container
```tsx
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    {/* ... */}
  </BarChart>
</ResponsiveContainer>
```

## Dark Mode (Future)

When implementing dark mode, use these class patterns:
```html
<div class="bg-white dark:bg-gray-900">
<p class="text-gray-900 dark:text-white">
<div class="border-gray-200 dark:border-gray-700">
```

---

*Last updated: January 2026*
