import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Smartphone, BookOpen, TrendingUp, Globe, Award, ArrowRight, CheckCircle2, Target, Heart, Zap, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {user && (
            <div className="flex justify-end mb-4">
              <Button
                variant="outline"
                onClick={signOut}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Building Trust, Simplifying<br />
            <span className="text-primary">Micro-Insurance</span> for Every Indian
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Addressing low insurance penetration (3.7% of GDP) and high protection gap (90%) through community-driven solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {user ? (
              <>
                <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate('/dashboard')}>
                  Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => navigate('/plans')}>
                  Explore Plans
                </Button>
              </>
            ) : (
              <>
                <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate('/auth')}>
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => navigate('/auth')}>
                  Join as Community Agent
                </Button>
              </>
            )}
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => navigate('/plans')}>
              Learn More
            </Button>
          </div>
          
          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gamified Learning</h3>
                <p className="text-muted-foreground">Interactive, vernacular education for better understanding</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community Trust</h3>
                <p className="text-muted-foreground">Verified agents you know and trust from your community</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Inclusive Technology</h3>
                <p className="text-muted-foreground">Mobile-first PWA accessible to everyone, everywhere</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Promoting financial inclusion for millions of underserved Indians through innovative, community-driven micro-insurance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-destructive/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Low Awareness</h3>
              <p className="text-muted-foreground">Limited understanding of insurance benefits in rural areas</p>
            </div>
            <div className="text-center">
              <div className="bg-destructive/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Poor Accessibility</h3>
              <p className="text-muted-foreground">Tier 2 and Tier 3 cities lack adequate insurance infrastructure</p>
            </div>
            <div className="text-center">
              <div className="bg-destructive/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordability Gap</h3>
              <p className="text-muted-foreground">Traditional insurance products don't meet micro-insurance needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to get protected</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/50" />
              <CardContent className="pt-8">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Learn Through Games</h3>
                <p className="text-muted-foreground">
                  Interactive, gamified lessons in your language help you understand insurance concepts easily
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-secondary/50" />
              <CardContent className="pt-8">
                <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <Users className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Connect with Trusted Agents</h3>
                <p className="text-muted-foreground">
                  Get personalized guidance from verified community insurance agents you know and trust
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
              <CardContent className="pt-8">
                <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Access Affordable Protection</h3>
                <p className="text-muted-foreground">
                  Choose from flexible, modular micro-insurance products designed for your needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground">Technology designed for inclusion</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Smartphone className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Mobile-First PWA</h3>
                <p className="text-muted-foreground text-sm">Progressive web app accessible from any device</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-secondary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Offline-First</h3>
                <p className="text-muted-foreground text-sm">Works seamlessly even in low connectivity areas</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Globe className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Vernacular Support</h3>
                <p className="text-muted-foreground text-sm">Visual and language learning in your native tongue</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-secondary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Modular Insurance</h3>
                <p className="text-muted-foreground text-sm">Flexible micro-insurance products for every need</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Users className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Agent of Trust</h3>
                <p className="text-muted-foreground text-sm">Human touchpoints integrated with digital tools</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Award className="h-10 w-10 text-secondary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Blockchain Ready</h3>
                <p className="text-muted-foreground text-sm">Future-proof with distributed ledger integration</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Community Impact</h2>
            <p className="text-lg text-muted-foreground">Real stories, real change</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-accent">
              <CardContent className="pt-6">
                <Heart className="h-10 w-10 text-accent-foreground mb-4" />
                <p className="text-accent-foreground italic mb-4">
                  "GramSure helped me understand insurance for the first time. The gamified lessons made it so simple!"
                </p>
                <p className="text-sm font-semibold text-accent-foreground">- Early Adopter, Rural Maharashtra</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent">
              <CardContent className="pt-6">
                <CheckCircle2 className="h-10 w-10 text-accent-foreground mb-4" />
                <p className="text-accent-foreground italic mb-4">
                  "As a community agent, I can now help my neighbors secure their future while earning income."
                </p>
                <p className="text-sm font-semibold text-accent-foreground">- Verified Agent, Tier 2 City</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent">
              <CardContent className="pt-6">
                <TrendingUp className="h-10 w-10 text-accent-foreground mb-4" />
                <p className="text-accent-foreground italic mb-4">
                  "The offline feature means I can access my policy even when traveling to remote areas."
                </p>
                <p className="text-sm font-semibold text-accent-foreground">- Gig Worker, Tier 3 City</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">10K+</p>
              <p className="text-muted-foreground">Users Reached</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">500+</p>
              <p className="text-muted-foreground">Community Agents</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Cities Covered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">95%</p>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technology Built for Everyone</h2>
            <p className="text-lg text-muted-foreground">Lightweight, secure, and accessible</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Smartphone className="h-6 w-6 text-primary mr-2" />
                  Progressive Web App
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">No app store downloads required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Works on all devices and platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Automatic updates and improvements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  Security & Innovation
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Blockchain-ready architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">IoT integration roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">End-to-end data encryption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market & Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Market & Roadmap</h2>
            <p className="text-lg text-muted-foreground">Growing with India's insurance sector</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <TrendingUp className="h-7 w-7 text-primary mr-2" />
                Market Potential
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b">
                      <span className="text-muted-foreground">Market Size by FY26</span>
                      <span className="text-2xl font-bold text-primary">$222B</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b">
                      <span className="text-muted-foreground">Annual Growth Rate</span>
                      <span className="text-2xl font-bold text-secondary">10-17%</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-semibold mb-2">Target Segments:</p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2" />
                          Gig workers and informal sector
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2" />
                          Students and young professionals
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2" />
                          Underserved rural communities
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Target className="h-7 w-7 text-primary mr-2" />
                Development Roadmap
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          1
                        </div>
                        <div className="w-0.5 h-full bg-primary/30 mt-2" />
                      </div>
                      <div className="pb-8">
                        <h4 className="font-semibold mb-1">MVP Launch</h4>
                        <p className="text-sm text-muted-foreground">Core PWA with gamified learning and agent network</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="bg-secondary text-secondary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          2
                        </div>
                        <div className="w-0.5 h-full bg-secondary/30 mt-2" />
                      </div>
                      <div className="pb-8">
                        <h4 className="font-semibold mb-1">Scale Micro-Insurance</h4>
                        <p className="text-sm text-muted-foreground">Expand product portfolio and geographic reach</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          3
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Advanced Features</h4>
                        <p className="text-sm text-muted-foreground">Blockchain integration and IoT capabilities</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Protected?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of Indians who trust GramSure for affordable, accessible micro-insurance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => navigate('/dashboard')}>
                  <Smartphone className="mr-2 h-5 w-5" />
                  View Dashboard
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => navigate('/plans')}>
                  <Users className="mr-2 h-5 w-5" />
                  Browse Plans
                </Button>
              </>
            ) : (
              <>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => navigate('/auth')}>
                  <Smartphone className="mr-2 h-5 w-5" />
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => navigate('/auth')}>
                  <Users className="mr-2 h-5 w-5" />
                  Become a Verified Agent
                </Button>
              </>
            )}
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Shield className="h-6 w-6 text-primary mr-2" />
                GramSure
              </h3>
              <p className="text-sm text-muted-foreground">
                Building trust through community-driven micro-insurance for every Indian.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Become an Agent</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Language</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Available in multiple Indian languages
              </p>
              <Button variant="outline" size="sm">
                <Globe className="mr-2 h-4 w-4" />
                Select Language
              </Button>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 GramSure. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
