import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <MapPin className="h-6 w-6" />
            <span className="font-heading">TravelAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  to="/dashboard"
                  className={`text-sm font-semibold transition-colors ${
                    isActive("/dashboard") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/planner"
                  className={`text-sm font-semibold transition-colors ${
                    isActive("/planner") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Trip Planner
                </Link>
                <Link
                  to="/profile"
                  className={`text-sm font-semibold transition-colors ${
                    isActive("/profile") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Profile
                </Link>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button onClick={toggleAuth} variant={isLoggedIn ? "outline" : "default"}>
              {isLoggedIn ? "Logout" : "Login"}
            </Button>
            {!isLoggedIn && (
              <Button variant="secondary">
                Sign Up
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`text-sm font-semibold ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {isLoggedIn && (
                <>
                  <Link
                    to="/dashboard"
                    className={`text-sm font-semibold ${
                      isActive("/dashboard") ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/planner"
                    className={`text-sm font-semibold ${
                      isActive("/planner") ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Trip Planner
                  </Link>
                  <Link
                    to="/profile"
                    className={`text-sm font-semibold ${
                      isActive("/profile") ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>
                </>
              )}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button onClick={toggleAuth} variant={isLoggedIn ? "outline" : "default"} className="w-full">
                  {isLoggedIn ? "Logout" : "Login"}
                </Button>
                {!isLoggedIn && (
                  <Button variant="secondary" className="w-full">
                    Sign Up
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
