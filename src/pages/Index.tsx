import AnimatedLogo from "@/components/AnimatedLogo";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <AnimatedLogo />
          
          <div className="space-y-4">
            
            <h1 className="text-6xl font-bold text-foreground">
              SyntaxGPT
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A modern Spotify-inspired boilerplate for your next amazing project</p>
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
    </div>;
};
export default Index;