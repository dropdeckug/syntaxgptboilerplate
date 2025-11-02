import AnimatedLogo from "@/components/AnimatedLogo";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <AnimatedLogo />
          
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm">
              Powered by AI
            </Badge>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              SyntaxGPT
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              Start building amazing projects here with AI-powered development tools
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Spotify-Inspired Components</h2>
            <p className="text-muted-foreground text-lg">
              Beautiful, modern UI components designed for your next project
            </p>
          </div>

          {/* Tabs Demo */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Tab Navigation</CardTitle>
              <CardDescription>Transparent tabs with animated underline</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <p className="text-muted-foreground">
                    This is the overview tab content. Notice the smooth animated underline on the active tab.
                  </p>
                </TabsContent>
                <TabsContent value="analytics" className="mt-6">
                  <p className="text-muted-foreground">Analytics content goes here.</p>
                </TabsContent>
                <TabsContent value="reports" className="mt-6">
                  <p className="text-muted-foreground">Reports content goes here.</p>
                </TabsContent>
                <TabsContent value="notifications" className="mt-6">
                  <p className="text-muted-foreground">Notifications content goes here.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Button Variants */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Button Styles</CardTitle>
              <CardDescription>Rounded buttons with hover animations</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </CardContent>
          </Card>

          {/* Badge Variants */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
