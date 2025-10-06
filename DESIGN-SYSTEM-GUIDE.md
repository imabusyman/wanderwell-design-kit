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

**Blazor Razor Component:**
```razor
@* NavBar.razor *@
@inject NavigationManager Navigation
@inject IAuthService AuthService
@inject ThemeService ThemeService

<nav class="navbar @(isScrolled ? "scrolled" : "")">
    <div class="navbar-container">
        <a href="/" class="navbar-logo">
            <svg class="icon-logo" width="24" height="24">
                <use href="#icon-map-pin"></use>
            </svg>
            <span class="logo-text">TravelAI</span>
        </a>

        @* Desktop Navigation *@
        <div class="nav-links desktop-only">
            <NavLink href="/" class="nav-link" Match="NavLinkMatch.All">
                Home
            </NavLink>
            @if (AuthService.IsAuthenticated)
            {
                <NavLink href="/dashboard" class="nav-link">
                    Dashboard
                </NavLink>
                <NavLink href="/planner" class="nav-link">
                    Trip Planner
                </NavLink>
                <NavLink href="/profile" class="nav-link">
                    Profile
                </NavLink>
            }
        </div>

        @* Actions *@
        <div class="nav-actions desktop-only">
            <button class="btn-icon" @onclick="ThemeService.ToggleTheme">
                @if (ThemeService.IsDarkMode)
                {
                    <svg class="icon" width="20" height="20">
                        <use href="#icon-sun"></use>
                    </svg>
                }
                else
                {
                    <svg class="icon" width="20" height="20">
                        <use href="#icon-moon"></use>
                    </svg>
                }
            </button>

            @if (AuthService.IsAuthenticated)
            {
                <button class="btn btn-outline" @onclick="HandleLogout">
                    Logout
                </button>
            }
            else
            {
                <button class="btn btn-outline" @onclick='() => Navigation.NavigateTo("/login")'>
                    Login
                </button>
                <button class="btn btn-primary" @onclick='() => Navigation.NavigateTo("/signup")'>
                    Sign Up
                </button>
            }
        </div>

        @* Mobile Menu Toggle *@
        <button class="mobile-menu-toggle mobile-only" @onclick="ToggleMobileMenu">
            <svg class="icon" width="24" height="24">
                <use href="@(isMobileMenuOpen ? "#icon-x" : "#icon-menu")"></use>
            </svg>
        </button>
    </div>

    @* Mobile Menu *@
    @if (isMobileMenuOpen)
    {
        <div class="mobile-menu">
            <NavLink href="/" class="mobile-nav-link" @onclick="CloseMobileMenu">
                Home
            </NavLink>
            @if (AuthService.IsAuthenticated)
            {
                <NavLink href="/dashboard" class="mobile-nav-link" @onclick="CloseMobileMenu">
                    Dashboard
                </NavLink>
                <NavLink href="/planner" class="mobile-nav-link" @onclick="CloseMobileMenu">
                    Trip Planner
                </NavLink>
                <NavLink href="/profile" class="mobile-nav-link" @onclick="CloseMobileMenu">
                    Profile
                </NavLink>
                <button class="btn btn-outline btn-full" @onclick="HandleLogout">
                    Logout
                </button>
            }
            else
            {
                <button class="btn btn-outline btn-full" @onclick='() => { Navigation.NavigateTo("/login"); CloseMobileMenu(); }'>
                    Login
                </button>
                <button class="btn btn-primary btn-full" @onclick='() => { Navigation.NavigateTo("/signup"); CloseMobileMenu(); }'>
                    Sign Up
                </button>
            }
        </div>
    }
</nav>

@code {
    private bool isScrolled = false;
    private bool isMobileMenuOpen = false;

    protected override void OnInitialized()
    {
        AuthService.OnAuthStateChanged += StateHasChanged;
        ThemeService.OnThemeChanged += StateHasChanged;
    }

    private void ToggleMobileMenu()
    {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    private void CloseMobileMenu()
    {
        isMobileMenuOpen = false;
    }

    private async Task HandleLogout()
    {
        await AuthService.LogoutAsync();
        Navigation.NavigateTo("/");
        CloseMobileMenu();
    }

    public void Dispose()
    {
        AuthService.OnAuthStateChanged -= StateHasChanged;
        ThemeService.OnThemeChanged -= StateHasChanged;
    }
}
```

**NavBar.razor.css:**
```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    z-index: 1000;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.navbar-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--primary);
}

.logo-text {
    font-size: 1.25rem;
    font-weight: 700;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--foreground);
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: var(--primary);
}

.nav-link.active {
    color: var(--primary);
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.mobile-menu-toggle {
    display: none;
}

.mobile-menu {
    display: none;
}

@media (max-width: 768px) {
    .desktop-only {
        display: none;
    }

    .mobile-only {
        display: block;
    }

    .mobile-menu-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .mobile-menu {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        background: var(--card);
        border-top: 1px solid var(--border);
    }

    .mobile-nav-link {
        padding: 0.75rem 1rem;
        text-decoration: none;
        color: var(--foreground);
        border-radius: 6px;
        transition: background 0.2s ease;
    }

    .mobile-nav-link:hover,
    .mobile-nav-link.active {
        background: var(--muted);
        color: var(--primary);
    }

    .btn-full {
        width: 100%;
    }
}
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

## 🔷 Detailed Blazor Component Examples

### TripCard Component

**TripCard.razor:**
```razor
@* TripCard.razor *@
<div class="trip-card" @onclick="() => OnCardClick.InvokeAsync(Trip.Id)">
    <div class="trip-card-image">
        <img src="@Trip.ImageUrl" alt="@Trip.Title" />
        <div class="trip-card-badge badge-@GetStatusClass()">
            @Trip.Status
        </div>
    </div>
    
    <div class="trip-card-content">
        <h3 class="trip-card-title">@Trip.Title</h3>
        
        <div class="trip-card-meta">
            <div class="meta-item">
                <svg class="icon" width="16" height="16">
                    <use href="#icon-map-pin"></use>
                </svg>
                <span>@Trip.Destination</span>
            </div>
            
            <div class="meta-item">
                <svg class="icon" width="16" height="16">
                    <use href="#icon-calendar"></use>
                </svg>
                <span>@Trip.StartDate.ToString("MMM d") - @Trip.EndDate.ToString("MMM d, yyyy")</span>
            </div>
            
            <div class="meta-item">
                <svg class="icon" width="16" height="16">
                    <use href="#icon-dollar-sign"></use>
                </svg>
                <span>@Trip.Budget.ToString("C0")</span>
            </div>
            
            <div class="meta-item">
                <svg class="icon" width="16" height="16">
                    <use href="#icon-users"></use>
                </svg>
                <span>@Trip.TravelerCount @(Trip.TravelerCount == 1 ? "traveler" : "travelers")</span>
            </div>
        </div>
        
        <div class="trip-card-footer">
            <button class="btn btn-outline btn-sm" @onclick:stopPropagation="true" @onclick="() => OnViewDetails.InvokeAsync(Trip.Id)">
                View Details
            </button>
        </div>
    </div>
</div>

@code {
    [Parameter, EditorRequired]
    public TripModel Trip { get; set; } = default!;
    
    [Parameter]
    public EventCallback<int> OnCardClick { get; set; }
    
    [Parameter]
    public EventCallback<int> OnViewDetails { get; set; }
    
    private string GetStatusClass()
    {
        return Trip.Status.ToLower() switch
        {
            "upcoming" => "primary",
            "in-progress" => "secondary",
            "completed" => "success",
            "cancelled" => "destructive",
            _ => "default"
        };
    }
}
```

**TripCard.razor.css:**
```css
.trip-card {
    background: var(--card);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 24px -6px rgba(0, 0, 0, 0.12);
    transition: all 0.3s ease;
    cursor: pointer;
}

.trip-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.2);
}

.trip-card-image {
    position: relative;
    height: 192px;
    overflow: hidden;
}

.trip-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.trip-card:hover .trip-card-image img {
    transform: scale(1.1);
}

.trip-card-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.badge-primary {
    background: var(--primary);
    color: white;
}

.badge-secondary {
    background: var(--secondary);
    color: white;
}

.badge-success {
    background: #10b981;
    color: white;
}

.badge-destructive {
    background: var(--destructive);
    color: white;
}

.trip-card-content {
    padding: 1.5rem;
}

.trip-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--foreground);
}

.trip-card-meta {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--muted-foreground);
}

.meta-item .icon {
    color: var(--primary);
}

.trip-card-footer {
    display: flex;
    justify-content: flex-end;
}
```

**TripModel.cs:**
```csharp
// Models/TripModel.cs
public class TripModel
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Destination { get; set; } = string.Empty;
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public decimal Budget { get; set; }
    public int TravelerCount { get; set; }
    public string Status { get; set; } = "Upcoming";
    public string ImageUrl { get; set; } = "/images/default-trip.jpg";
}
```

---

### BudgetWidget Component

**BudgetWidget.razor:**
```razor
@* BudgetWidget.razor *@
@inject IBudgetService BudgetService

<div class="budget-widget">
    <div class="widget-header">
        <h3 class="widget-title">Trip Budget</h3>
        <svg class="icon-header" width="24" height="24">
            <use href="#icon-dollar-sign"></use>
        </svg>
    </div>
    
    <div class="budget-summary">
        <div class="budget-row">
            <span class="budget-label">Total Budget</span>
            <span class="budget-value total">@Budget.Total.ToString("C0", CultureInfo)</span>
        </div>
        <div class="budget-row">
            <span class="budget-label">Spent</span>
            <span class="budget-value spent">@Budget.Spent.ToString("C0", CultureInfo)</span>
        </div>
    </div>
    
    <div class="progress-bar-container">
        <div class="progress-bar">
            <div class="progress-fill" style="width: @SpentPercentage%"></div>
        </div>
        <span class="progress-label">@SpentPercentage% spent</span>
    </div>
    
    <div class="budget-remaining @(RemainingAmount >= 0 ? "positive" : "negative")">
        <span class="remaining-label">Remaining</span>
        <span class="remaining-amount">@RemainingAmount.ToString("C0", CultureInfo)</span>
    </div>
    
    <div class="budget-breakdown">
        <h4 class="breakdown-title">Spending Breakdown</h4>
        <div class="breakdown-grid">
            @foreach (var category in Budget.Categories)
            {
                <div class="breakdown-item">
                    <div class="breakdown-header">
                        <svg class="icon-category" width="16" height="16">
                            <use href="#icon-@category.Icon"></use>
                        </svg>
                        <span class="category-name">@category.Name</span>
                    </div>
                    <div class="category-amount">@category.Amount.ToString("C0", CultureInfo)</div>
                    <div class="category-bar">
                        <div class="category-fill" style="width: @category.Percentage%"></div>
                    </div>
                </div>
            }
        </div>
    </div>
    
    @if (IsEditable)
    {
        <div class="widget-actions">
            <button class="btn btn-primary btn-full" @onclick="HandleEditBudget">
                Edit Budget
            </button>
        </div>
    }
</div>

@code {
    [Parameter, EditorRequired]
    public BudgetModel Budget { get; set; } = default!;
    
    [Parameter]
    public bool IsEditable { get; set; } = true;
    
    [Parameter]
    public string Currency { get; set; } = "USD";
    
    [Parameter]
    public EventCallback OnEditBudget { get; set; }
    
    private CultureInfo CultureInfo => new CultureInfo("en-US");
    
    private double SpentPercentage => Budget.Total > 0 
        ? Math.Round((double)(Budget.Spent / Budget.Total * 100), 1) 
        : 0;
    
    private decimal RemainingAmount => Budget.Total - Budget.Spent;
    
    private async Task HandleEditBudget()
    {
        await OnEditBudget.InvokeAsync();
    }
}
```

**BudgetWidget.razor.css:**
```css
.budget-widget {
    background: var(--card);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 24px -6px rgba(0, 0, 0, 0.12);
}

.widget-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.widget-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--foreground);
}

.icon-header {
    color: var(--secondary);
}

.budget-summary {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.budget-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.budget-label {
    font-size: 0.875rem;
    color: var(--muted-foreground);
}

.budget-value {
    font-size: 1.125rem;
    font-weight: 600;
}

.budget-value.total {
    color: var(--foreground);
}

.budget-value.spent {
    color: var(--secondary);
}

.progress-bar-container {
    margin: 1.5rem 0;
}

.progress-bar {
    height: 8px;
    background: var(--muted);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
}

.progress-fill {
    height: 100%;
    background: var(--secondary);
    transition: width 0.5s ease;
}

.progress-label {
    font-size: 0.75rem;
    color: var(--muted-foreground);
}

.budget-remaining {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1.5rem;
}

.budget-remaining.positive {
    background: rgba(16, 185, 129, 0.1);
}

.budget-remaining.negative {
    background: rgba(239, 68, 68, 0.1);
}

.remaining-label {
    font-size: 0.875rem;
    font-weight: 600;
}

.budget-remaining.positive .remaining-amount {
    color: #10b981;
    font-size: 1.5rem;
    font-weight: 700;
}

.budget-remaining.negative .remaining-amount {
    color: #ef4444;
    font-size: 1.5rem;
    font-weight: 700;
}

.budget-breakdown {
    border-top: 1px solid var(--border);
    padding-top: 1.5rem;
}

.breakdown-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.breakdown-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.breakdown-item {
    padding: 0.75rem;
    border-radius: 6px;
    background: var(--muted);
}

.breakdown-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.icon-category {
    color: var(--primary);
}

.category-name {
    font-size: 0.875rem;
    font-weight: 600;
}

.category-amount {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.category-bar {
    height: 4px;
    background: var(--background);
    border-radius: 2px;
    overflow: hidden;
}

.category-fill {
    height: 100%;
    background: var(--primary);
    transition: width 0.5s ease;
}

.widget-actions {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
}

@media (max-width: 640px) {
    .breakdown-grid {
        grid-template-columns: 1fr;
    }
}
```

**BudgetModel.cs:**
```csharp
// Models/BudgetModel.cs
public class BudgetModel
{
    public decimal Total { get; set; }
    public decimal Spent { get; set; }
    public List<BudgetCategory> Categories { get; set; } = new();
}

public class BudgetCategory
{
    public string Name { get; set; } = string.Empty;
    public string Icon { get; set; } = "dollar-sign";
    public decimal Amount { get; set; }
    public double Percentage { get; set; }
}
```

---

### Dashboard Page Example

**Dashboard.razor:**
```razor
@page "/dashboard"
@inject ITripService TripService
@inject IBudgetService BudgetService
@inject NavigationManager Navigation
@attribute [Authorize]

<div class="dashboard-page">
    <div class="dashboard-header">
        <div>
            <h1 class="page-title">My Trips</h1>
            <p class="page-subtitle">Manage and explore your travel adventures</p>
        </div>
        <button class="btn btn-primary" @onclick="HandleCreateTrip">
            <svg class="icon" width="20" height="20">
                <use href="#icon-plus"></use>
            </svg>
            New Trip
        </button>
    </div>
    
    @if (isLoading)
    {
        <div class="loading-state">
            <div class="spinner"></div>
            <p>Loading your trips...</p>
        </div>
    }
    else
    {
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon" style="background: rgba(30, 58, 138, 0.1);">
                    <svg width="24" height="24">
                        <use href="#icon-map-pin"></use>
                    </svg>
                </div>
                <div class="stat-content">
                    <div class="stat-value">@stats.TotalTrips</div>
                    <div class="stat-label">Total Trips</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon" style="background: rgba(20, 184, 166, 0.1);">
                    <svg width="24" height="24">
                        <use href="#icon-calendar"></use>
                    </svg>
                </div>
                <div class="stat-content">
                    <div class="stat-value">@stats.UpcomingTrips</div>
                    <div class="stat-label">Upcoming</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon" style="background: rgba(249, 115, 22, 0.1);">
                    <svg width="24" height="24">
                        <use href="#icon-sparkles"></use>
                    </svg>
                </div>
                <div class="stat-content">
                    <div class="stat-value">@stats.CompletedTrips</div>
                    <div class="stat-label">Completed</div>
                </div>
            </div>
        </div>
        
        <div class="dashboard-grid">
            <div class="trips-section">
                <h2 class="section-title">Upcoming Trips</h2>
                <div class="trips-grid">
                    @foreach (var trip in upcomingTrips)
                    {
                        <TripCard 
                            Trip="@trip" 
                            OnCardClick="HandleTripClick"
                            OnViewDetails="HandleViewDetails" />
                    }
                    
                    @if (!upcomingTrips.Any())
                    {
                        <div class="empty-state">
                            <svg width="64" height="64">
                                <use href="#icon-calendar"></use>
                            </svg>
                            <h3>No upcoming trips</h3>
                            <p>Start planning your next adventure!</p>
                            <button class="btn btn-primary" @onclick="HandleCreateTrip">
                                Create Trip
                            </button>
                        </div>
                    }
                </div>
            </div>
            
            <div class="sidebar">
                <BudgetWidget 
                    Budget="@currentBudget"
                    IsEditable="true"
                    OnEditBudget="HandleEditBudget" />
                    
                <div class="quick-actions">
                    <h3 class="section-title">Quick Actions</h3>
                    <button class="action-btn" @onclick='() => Navigation.NavigateTo("/planner")'>
                        <svg class="icon" width="20" height="20">
                            <use href="#icon-map"></use>
                        </svg>
                        <span>Trip Planner</span>
                    </button>
                    <button class="action-btn" @onclick='() => Navigation.NavigateTo("/destinations")'>
                        <svg class="icon" width="20" height="20">
                            <use href="#icon-compass"></use>
                        </svg>
                        <span>Explore Destinations</span>
                    </button>
                    <button class="action-btn" @onclick="HandleViewHistory">
                        <svg class="icon" width="20" height="20">
                            <use href="#icon-clock"></use>
                        </svg>
                        <span>Trip History</span>
                    </button>
                </div>
            </div>
        </div>
    }
</div>

@code {
    private bool isLoading = true;
    private List<TripModel> upcomingTrips = new();
    private DashboardStats stats = new();
    private BudgetModel currentBudget = new();
    
    protected override async Task OnInitializedAsync()
    {
        await LoadDashboardData();
    }
    
    private async Task LoadDashboardData()
    {
        isLoading = true;
        try
        {
            upcomingTrips = await TripService.GetUpcomingTripsAsync();
            stats = await TripService.GetDashboardStatsAsync();
            
            if (upcomingTrips.Any())
            {
                currentBudget = await BudgetService.GetTripBudgetAsync(upcomingTrips.First().Id);
            }
        }
        finally
        {
            isLoading = false;
        }
    }
    
    private void HandleCreateTrip()
    {
        Navigation.NavigateTo("/trips/create");
    }
    
    private void HandleTripClick(int tripId)
    {
        Navigation.NavigateTo($"/trips/{tripId}");
    }
    
    private void HandleViewDetails(int tripId)
    {
        Navigation.NavigateTo($"/trips/{tripId}/details");
    }
    
    private void HandleEditBudget()
    {
        // Open budget edit modal or navigate to edit page
    }
    
    private void HandleViewHistory()
    {
        Navigation.NavigateTo("/trips/history");
    }
}

public class DashboardStats
{
    public int TotalTrips { get; set; }
    public int UpcomingTrips { get; set; }
    public int CompletedTrips { get; set; }
}
```

---

### Service Layer Examples

**ITripService.cs:**
```csharp
// Services/ITripService.cs
public interface ITripService
{
    Task<List<TripModel>> GetUpcomingTripsAsync();
    Task<List<TripModel>> GetAllTripsAsync();
    Task<TripModel?> GetTripByIdAsync(int id);
    Task<DashboardStats> GetDashboardStatsAsync();
    Task<TripModel> CreateTripAsync(TripModel trip);
    Task<TripModel> UpdateTripAsync(TripModel trip);
    Task<bool> DeleteTripAsync(int id);
}
```

**TripService.cs:**
```csharp
// Services/TripService.cs
public class TripService : ITripService
{
    private readonly HttpClient _httpClient;
    private readonly ILogger<TripService> _logger;
    
    public TripService(HttpClient httpClient, ILogger<TripService> logger)
    {
        _httpClient = httpClient;
        _logger = logger;
    }
    
    public async Task<List<TripModel>> GetUpcomingTripsAsync()
    {
        try
        {
            var response = await _httpClient.GetAsync("api/trips/upcoming");
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadFromJsonAsync<List<TripModel>>() ?? new();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching upcoming trips");
            return new();
        }
    }
    
    public async Task<DashboardStats> GetDashboardStatsAsync()
    {
        try
        {
            var response = await _httpClient.GetAsync("api/trips/stats");
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadFromJsonAsync<DashboardStats>() ?? new();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching dashboard stats");
            return new();
        }
    }
    
    public async Task<TripModel> CreateTripAsync(TripModel trip)
    {
        var response = await _httpClient.PostAsJsonAsync("api/trips", trip);
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadFromJsonAsync<TripModel>() ?? trip;
    }
    
    // ... other methods
}
```

**Program.cs Registration:**
```csharp
// MauiProgram.cs
builder.Services.AddScoped<ITripService, TripService>();
builder.Services.AddScoped<IBudgetService, BudgetService>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddSingleton<ThemeService>();

// Configure HttpClient
builder.Services.AddHttpClient<ITripService, TripService>(client =>
{
    client.BaseAddress = new Uri("https://your-api-url.com");
});
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
