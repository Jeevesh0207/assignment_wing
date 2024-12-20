import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserPlus, MessageCircle, MoreHorizontal } from 'lucide-react'

const members = [
  { id: 1, name: "John Doe", avatar: "/placeholder.svg?height=40&width=40", role: "Admin" },
  { id: 2, name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40", role: "Member" },
  { id: 3, name: "Alice Johnson", avatar: "/placeholder.svg?height=40&width=40", role: "Member" },
]

export default function MembersList() {
  return (
    <div>
      <ScrollArea className="h-[300px] w-full pr-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between space-x-4 mb-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{member.name}</div>
                <div className="text-sm text-muted-foreground">{member.role}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </ScrollArea>
      <Button className="w-full mt-4 bg-active-icon">
        <UserPlus className="mr-2 h-4 w-4" /> Invite Member
      </Button>
    </div>
  )
}

