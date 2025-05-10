import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Wand, Image, FileText, Package, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Generator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    
    // Mock generation process
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsGenerating(false), 500);
          return 100;
        }
        return newProgress;
      });
    }, 600);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Product Generator</h1>
        <p className="text-muted-foreground">
          Generate complete digital products with AI in minutes
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border border-dark-border bg-dark-card">
          <CardHeader>
            <CardTitle>Generate New Product</CardTitle>
            <CardDescription>
              Input your product details or select a niche to automate everything
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Product Type</label>
              <Select defaultValue="planner">
                <SelectTrigger>
                  <SelectValue placeholder="Select product type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="planner">Digital Planner</SelectItem>
                    <SelectItem value="ebook">eBook</SelectItem>
                    <SelectItem value="template">Template Bundle</SelectItem>
                    <SelectItem value="journal">Journal</SelectItem>
                    <SelectItem value="worksheet">Worksheet Set</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Target Niche</label>
              <Select defaultValue="productivity">
                <SelectTrigger>
                  <SelectValue placeholder="Select target niche" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="productivity">Productivity</SelectItem>
                    <SelectItem value="mental-health">Mental Health</SelectItem>
                    <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                    <SelectItem value="finance">Personal Finance</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Product Title</label>
              <Input 
                placeholder="Enter a title or leave blank to auto-generate" 
                defaultValue="Ultimate AI-Powered Productivity Planner 2025"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Product Description</label>
              <Textarea 
                placeholder="Enter a description or leave blank to auto-generate"
                rows={3}
                defaultValue="A comprehensive digital planner with AI-powered productivity features, habit tracking, and goal setting tools."
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-1">
                <Badge variant="outline" className="bg-dark-bg">30 AI Credits</Badge>
                <Badge variant="outline" className="bg-dark-bg">~15 min</Badge>
              </div>
              <Select defaultValue="premium">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleGenerate} 
              disabled={isGenerating} 
              className="w-full bg-tech-blue hover:bg-tech-blue/90"
            >
              <Wand className="mr-2 h-4 w-4" />
              {isGenerating ? "Generating..." : "Generate Product"}
            </Button>
          </CardFooter>
          {isGenerating && (
            <div className="px-6 pb-4">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Generating components...</span>
                <span>{progress}%</span>
              </div>
            </div>
          )}
        </Card>

        <Card className="border border-dark-border bg-dark-card">
          <CardHeader>
            <CardTitle>Generation Options</CardTitle>
            <CardDescription>
              Customize what components to include in your product
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="components">
              <TabsList className="w-full bg-dark-bg">
                <TabsTrigger value="components" className="flex-1">Components</TabsTrigger>
                <TabsTrigger value="style" className="flex-1">Style</TabsTrigger>
                <TabsTrigger value="advanced" className="flex-1">Advanced</TabsTrigger>
              </TabsList>
              <div className="mt-4 space-y-4">
                <TabsContent value="components">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-tech-blue" />
                        <div>
                          <p className="font-medium">Content Pages</p>
                          <p className="text-xs text-muted-foreground">
                            Main content with instructions
                          </p>
                        </div>
                      </div>
                      <Select defaultValue="30">
                        <SelectTrigger className="w-[80px]">
                          <SelectValue placeholder="Pages" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="20">20</SelectItem>
                          <SelectItem value="30">30</SelectItem>
                          <SelectItem value="50">50</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image className="h-5 w-5 text-tech-blue" />
                        <div>
                          <p className="font-medium">Custom Cover</p>
                          <p className="text-xs text-muted-foreground">
                            AI-generated product cover
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Check className="h-4 w-4" />
                        Included
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-tech-blue" />
                        <div>
                          <p className="font-medium">Templates</p>
                          <p className="text-xs text-muted-foreground">
                            Reusable templates included
                          </p>
                        </div>
                      </div>
                      <Select defaultValue="5">
                        <SelectTrigger className="w-[80px]">
                          <SelectValue placeholder="Count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">None</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="style">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Visual Style</label>
                      <Select defaultValue="modern">
                        <SelectTrigger>
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minimal">Minimal</SelectItem>
                          <SelectItem value="modern">Modern</SelectItem>
                          <SelectItem value="colorful">Colorful</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="playful">Playful</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Color Scheme</label>
                      <div className="grid grid-cols-5 gap-2">
                        {["#3a86ff", "#ff006e", "#38b000", "#9d4edd", "#fb5607"].map((color) => (
                          <div 
                            key={color}
                            className="h-8 rounded-md cursor-pointer border-2 border-transparent hover:border-white"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Format</label>
                      <Select defaultValue="pdf">
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="canva">Canva Template</SelectItem>
                          <SelectItem value="powerpoint">PowerPoint</SelectItem>
                          <SelectItem value="google-docs">Google Docs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="advanced">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Competitor Products to Clone</label>
                      <Input placeholder="Enter URL of competitor product" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">SEO Keywords</label>
                      <Textarea 
                        placeholder="Enter keywords separated by commas"
                        rows={2}
                        defaultValue="productivity planner, digital planner 2025, goal planning, habit tracker"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="dfy" />
                      <label
                        htmlFor="dfy"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Done-For-You (30% revenue share)
                      </label>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
