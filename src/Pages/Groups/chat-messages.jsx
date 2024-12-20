import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const messages = [
  {
    id: 1,
    sender: "John Doe",
    content: "Hello everyone!",
    timestamp: "10:00 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    sender: "Jane Smith",
    content: "Hi John, how are you?",
    timestamp: "10:05 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    sender: "Alice Johnson",
    content: "Good morning team!",
    timestamp: "10:10 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function ChatMessages() {
  return (
    <ScrollArea className="h-[400px] w-full pr-4">
      {messages.map((msg) => (
        <div key={msg.id} className="flex items-start space-x-4 mb-4">
          <Avatar>
            <AvatarImage src={msg.avatar} alt={msg.sender} />
            <AvatarFallback>{msg.sender[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-colors_01">{msg.sender}</span>
              <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
            </div>
            <p className="text-sm text-colors_02">{msg.content}</p>
          </div>
        </div>
      ))}
    </ScrollArea>
  )
}

