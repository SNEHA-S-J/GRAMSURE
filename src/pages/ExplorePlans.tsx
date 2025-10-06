import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Home, Car, Briefcase, Users, ArrowLeft, Check } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const plans = [
  {
    id: 1,
    name: "Health Shield",
    icon: Heart,
    description: "Comprehensive health coverage for you and your family",
    coverage: "₹1-5 Lakhs",
    premium: "₹299/month",
    features: ["Cashless treatment", "Pre & post hospitalization", "Ambulance coverage"],
    popular: true,
  },
  {
    id: 2,
    name: "Home Guard",
    icon: Home,
    description: "Protect your home from natural disasters and theft",
    coverage: "₹5-20 Lakhs",
    premium: "₹199/month",
    features: ["Fire & theft coverage", "Natural calamity", "Emergency assistance"],
    popular: false,
  },
  {
    id: 3,
    name: "Vehicle Care",
    icon: Car,
    description: "Complete protection for your two-wheeler or car",
    coverage: "As per vehicle value",
    premium: "₹499/month",
    features: ["Own damage", "Third party liability", "24/7 roadside assistance"],
    popular: false,
  },
  {
    id: 4,
    name: "Life Secure",
    icon: Shield,
    description: "Term life insurance for your family's future",
    coverage: "₹10-50 Lakhs",
    premium: "₹399/month",
    features: ["Income replacement", "Debt coverage", "Family protection"],
    popular: true,
  },
  {
    id: 5,
    name: "Business Protect",
    icon: Briefcase,
    description: "Liability coverage for small business owners",
    coverage: "₹5-15 Lakhs",
    premium: "₹599/month",
    features: ["Public liability", "Product liability", "Legal expenses"],
    popular: false,
  },
  {
    id: 6,
    name: "Community Care",
    icon: Users,
    description: "Group insurance for community organizations",
    coverage: "Customizable",
    premium: "Contact for quote",
    features: ["Flexible plans", "Group discounts", "Community support"],
    popular: false,
  },
];

const ExplorePlans = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(user ? '/dashboard' : '/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Explore Plans</h1>
            </div>
          </div>
          {user && (
            <Button onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Choose Your Protection</h2>
          <p className="text-muted-foreground">Affordable micro-insurance plans designed for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card key={plan.id} className={plan.popular ? "border-primary border-2" : ""}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 text-center">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{plan.coverage}</Badge>
                  </div>
                  <CardTitle className="mt-4">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-primary">{plan.premium}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-secondary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => {
                      if (!user) {
                        navigate('/auth');
                      }
                    }}
                  >
                    {user ? 'Get This Plan' : 'Sign Up to Get Started'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ExplorePlans;
