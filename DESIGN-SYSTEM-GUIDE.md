# TravelAI Design System Reference
## For .NET MAUI Blazor Implementation

This React prototype serves as a complete design reference for your .NET MAUI Blazor Hybrid application. Below you'll find all the design tokens, component specifications, and implementation guidelines.

---

## 🎨 Color Palette

### Light Mode
```css
/* Primary Colors */
Deep Blue: hsl(221, 78%, 32%) → #1E3A8A
Teal: hsl(172, 79%, 40%) → #14B8A6
Sunset Orange: hsl(24, 95%, 53%) → #F97316

/* Neutrals */
Background: hsl(220, 14%, 96%) → #F3F4F6
Foreground: hsl(221, 78%, 12%)
Card: hsl(0, 0%, 100%) → #FFFFFF

/* Semantic */
Muted: hsl(220, 14%, 92%)
Border: hsl(220, 13%, 91%)
```

### Dark Mode
```css
/* Primary Colors */
Deep Blue: hsl(221, 78%, 55%)
Teal: hsl(172, 79%, 45%)
Sunset Orange: hsl(24, 95%, 58%)

/* Neutrals */
Background: hsl(222, 47%, 11%) → #1F2937
Foreground: hsl(0, 0%, 98%)
Card: hsl(217, 33%, 17%)
```

### MAUI Implementation
```xml
<!-- In Resources/Styles/Colors.xaml -->
<Color x:Key="Primary">#1E3A8A</Color>
<Color x:Key="Secondary">#14B8A6</Color>
<Color x:Key="Accent">#F97316</Color>
<Color x:Key="Background">#F3F4F6</Color>

<!-- For Blazor CSS -->
<style>
    :root {
        --primary: #1E3A8A;
        --secondary: #14B8A6;
        --accent: #F97316;
    }
</style>
```

---

## 📝 Typography

### Font Family
**Inter** (Google Fonts)
- Weights: 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- Usage: Both headings and body text

### Type Scale
```css
/* Headings */
H1: 3.5rem (56px) / Bold / Line height: 1.1
H2: 2.5rem (40px) / Bold / Line height: 1.2
H3: 1.5rem (24px) / Bold / Line height: 1.3
H4: 1.25rem (20px) / SemiBold / Line height: 1.4

/* Body */
Body Large: 1.25rem (20px) / Regular
Body: 1rem (16px) / Regular
Body Small: 0.875rem (14px) / Regular
Caption: 0.75rem (12px) / Regular
```

### MAUI Implementation
```xml
<!-- In App.xaml -->
<Style TargetType="Label" x:Key="H1">
    <Setter Property="FontFamily" Value="Inter"/>
    <Setter Property="FontSize" Value="56"/>
    <Setter Property="FontAttributes" Value="Bold"/>
</Style>
```

---

## 🧱 Component Specifications

### NavBar Component
**Height:** 64px (4rem)
**Background:** Card color with 80% opacity + backdrop blur
**Border:** Bottom border (1px, border color)
**Padding:** 16px horizontal

**Elements:**
- Logo: MapPin icon (24x24) + "TravelAI" text (20px, bold)
- Nav links: 14px, SemiBold, with hover effects
- Action buttons: Standard button components
- Mobile breakpoint: 768px (show hamburger menu)

**Blazor Implementation:**
```razor
<nav class="navbar">
    <div class="container">
        <a href="/" class="logo">
            <Icon Name="MapPin" Size="24" />
            <span>TravelAI</span>
        </a>
        <!-- Navigation items -->
    </div>
</nav>
```

### Card Component
**Padding:** 24px (1.5rem)
**Border Radius:** 8px (0.5rem)
**Background:** Card color
**Shadow:** `0 4px 24px -6px rgba(0,0,0,0.12)`
**Hover:** Translate Y -4px, increase shadow

**Blazor/XAML:**
```xml
<Frame Padding="24" CornerRadius="8" HasShadow="True">
    <!-- Content -->
</Frame>
```

### Button Component
**Variants:**

1. **Default (Primary)**
   - Background: Primary color
   - Text: White
   - Hover: 90% opacity
   - Padding: 16px 32px
   - Border radius: 6px

2. **Secondary**
   - Background: Secondary color
   - Text: White
   - Hover: 80% opacity

3. **Outline**
   - Background: Transparent
   - Border: 1px solid border color
   - Text: Foreground color
   - Hover: Muted background

**Sizes:**
- Small: height 36px, padding 12px 24px
- Default: height 40px, padding 16px 32px
- Large: height 44px, padding 20px 40px

### Trip Card Component
**Dimensions:** Flexible width, min-height 400px
**Structure:**
- Image section: 192px height
- Content section: 24px padding
- Status badge: Top-right absolute position

**Elements:**
- Title: H3 (24px, bold)
- Destination: 14px with MapPin icon
- Date range: Calendar icon + formatted dates
- Budget: DollarSign icon + amount
- Travelers: Users icon + count

### Budget Widget Component
**Structure:**
- Header with title and icon
- Progress bar (8px height)
- Total/Spent/Remaining display
- Category breakdown (4 items, 2x2 grid)

**Progress Bar:**
- Height: 8px
- Border radius: 4px
- Background: Muted color
- Fill: Secondary color

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Mobile: 0px - 767px (default)
Tablet: 768px - 1023px (md:)
Desktop: 1024px - 1279px (lg:)
Wide: 1280px+ (xl:)
```

### Layout Patterns
**Mobile:**
- Single column layout
- Collapsible navigation (hamburger)
- Stacked cards
- Full-width components

**Tablet:**
- 2-column grid for cards
- Side-by-side for main content + sidebar
- Expanded navigation

**Desktop:**
- 3-column grid for cards
- 2:1 ratio for main content:sidebar
- Full navigation visible

---

## 🎭 Animations & Transitions

### Hover Effects
```css
/* Lift Effect */
transition: transform 0.3s ease, box-shadow 0.3s ease
hover: translateY(-4px) + enhanced shadow

/* Fade */
transition: opacity 0.3s ease
hover: opacity 0.9

/* Scale */
transition: transform 0.2s ease
hover: scale(1.05)
```

### Page Transitions
```css
/* Fade In */
from: opacity 0, translateY(10px)
to: opacity 1, translateY(0)
duration: 300ms

/* Slide In */
from: translateX(100%)
to: translateX(0)
duration: 300ms
```

### MAUI Implementation
```xml
<!-- In XAML -->
<VisualElement.Behaviors>
    <toolkit:AnimationBehavior>
        <toolkit:FadeInAnimation Duration="300" />
    </toolkit:AnimationBehavior>
</VisualElement.Behaviors>
```

---

## 🗺️ Page Layouts

### Landing Page (Index)
**Sections:**
1. Hero (90vh) - Full-width background image with overlay
2. Features (3-column grid on desktop)
3. Destinations (3-column card grid)
4. CTA (Full-width with gradient background)
5. Footer

**Hero Structure:**
- Background image with gradient overlay
- Centered content (max-width: 896px)
- H1 + subtitle + 2 CTAs
- Stats row (3 columns)

### Dashboard
**Layout:**
- Header (title + action button)
- Stats cards (3 columns)
- Main content (2 columns on desktop):
  - Left: Trip cards grid (2 columns)
  - Right: Budget widget + quick actions

### Trip Planner
**Layout:**
- Map view (400px height)
- Waypoints list (drag-drop enabled)
- Route preferences form
- Sidebar: Budget + trip details form

### Profile
**Layout:**
- Left sidebar (1/3): Profile card + stats
- Right content (2/3): Forms (personal info, preferences, notifications)

---

## 🔧 Syncfusion Control Mapping

### For Map View
```razor
<!-- Use Syncfusion Maps -->
<SfMaps>
    <MapsLayers>
        <MapsLayer ShapeData="@ShapeData">
            <MapsMarkers>
                <!-- Waypoint markers -->
            </MapsMarkers>
        </MapsLayer>
    </MapsLayers>
</SfMaps>
```

### For Drag-Drop Waypoints
```razor
<!-- Use Syncfusion ListView with DragAndDrop -->
<SfListView DataSource="@Waypoints" 
            EnableDragAndDrop="true">
</SfListView>
```

### For Progress Bars
```razor
<!-- Use Syncfusion ProgressBar -->
<SfProgressBar Type="@ProgressType.Linear"
               Value="@ProgressValue"
               Height="8">
</SfProgressBar>
```

---

## 📦 Asset Specifications

### Images
- Hero image: 1920x1080px (16:9)
- Destination cards: 1024x768px (4:3)
- Trip cards: 800x600px (4:3)

### Icons
**Library:** Lucide Icons (or Fluent UI for MAUI)
**Size:** 16px, 20px, 24px
**Stroke width:** 2px

**Common Icons:**
- MapPin: Logo, location indicators
- Calendar: Date displays
- DollarSign: Budget/pricing
- Users: Traveler count
- Navigation: Map controls
- Sparkles: AI features
- Plus: Add actions

---

## 🌐 State Management

### Authentication State
- Login/Logout toggles navigation visibility
- Shows/hides Dashboard, Planner, Profile links
- Can be managed via FusionAuth OIDC

### Theme Toggle
- Light/Dark mode switching
- Persist user preference
- Affects all color tokens

### Trip Data
- Store in local state or Supabase
- Real-time sync for collaborative features

---

## ✅ Implementation Checklist

### Phase 1: Foundation
- [ ] Set up color tokens in MAUI Resources
- [ ] Configure Inter font family
- [ ] Create base styles for typography
- [ ] Set up responsive breakpoints

### Phase 2: Core Components
- [ ] NavBar with authentication state
- [ ] Button variants (default, secondary, outline)
- [ ] Card component with elevation
- [ ] Badge component for status

### Phase 3: Page Components
- [ ] Hero section with background image
- [ ] Destination card with hover effects
- [ ] Trip card with all metadata
- [ ] Budget widget with progress bars

### Phase 4: Pages
- [ ] Landing page with all sections
- [ ] Dashboard with stats and trip grid
- [ ] Trip Planner with map integration
- [ ] Profile with forms and preferences

### Phase 5: Polish
- [ ] Add page transitions
- [ ] Implement hover/focus states
- [ ] Test dark mode
- [ ] Responsive testing on all breakpoints

---

## 📚 Additional Resources

**React Prototype:**
- View live demo in browser
- Inspect element styles in DevTools
- Test all interactions and states

**Design System Files:**
- `src/index.css` - All design tokens
- `tailwind.config.ts` - Theme configuration
- Component files in `src/components/`

**Color Conversion:**
- All HSL values provided for easy conversion
- Use online tools: https://hslpicker.com/

---

## 💡 Tips for .NET Team

1. **Color Consistency:** Use the exact HSL/hex values provided - don't approximate
2. **Typography:** Inter font is free and works great on all platforms
3. **Component Reuse:** Create shared Razor components for buttons, cards, etc.
4. **Responsive Design:** Use CSS Grid and Flexbox (supported in Blazor)
5. **Icons:** Fluent UI icons are similar to Lucide and work well in MAUI
6. **Animations:** MAUI Toolkit provides excellent animation helpers

---

**Questions?** Refer to the live React prototype for any clarification on layouts, spacing, or interactions. Every component has been built to be developer-ready for translation to Blazor/MAUI.
