import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageCircle,
  UserPlus,
  FileUp,
  Send,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";
import { ThemeToggle } from "@/components/Theme/Theme";
import ChatMessages from "./chat-messages";
import MembersList from "./members-list";
import FilesList from "./files-list";

export default function Groups() {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Handle message send logic here
    setMessage("");
  };

  return (
    <div className="w-full h-screen bg-slate-100 flex items-center justify-center">
      <div className="container mx-auto p-4" style={{
        width:"100%"
      }}>
        <Card className="w-full max-w-8xl mx-auto">
          <CardHeader className="flex flex-col gap-5 md:flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-active-icon">Wingman Developers</CardTitle>
              <CardDescription className="text-colors_01 pt-1 box-border">
                A community for wingman enthusiasts
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2 text-colors_01">
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
              <ThemeToggle />
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chat" className="w-full mt-5">
              <TabsList className="grid w-full grid-cols-3 mb-4 bg-icon" >
                <TabsTrigger value="chat">
                  <MessageCircle className="mr-2 h-4 w-4" color="#115E56" />
                  <p className="text-active-icon">Chat</p>
                </TabsTrigger>
                <TabsTrigger value="members">
                  <UserPlus className="mr-2 h-4 w-4" color="#115E56"/>
                  <p className="text-active-icon">Members</p>
                </TabsTrigger>
                <TabsTrigger value="files">
                  <FileUp className="mr-2 h-4 w-4" color="#115E56"/>                 
                  <p className="text-active-icon">Files</p>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="chat">
                <ChatMessages />
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center space-x-2 mt-4"
                >
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit" className="bg-active-icon">
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="members">
                <MembersList />
              </TabsContent>
              <TabsContent value="files">
                <FilesList />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
