import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { FileUp, Download, Trash2 } from 'lucide-react'

const files = [
  { id: 1, name: "Project Proposal.pdf", size: "2.5 MB", uploadedBy: "John Doe", date: "2023-05-15" },
  { id: 2, name: "Meeting Notes.docx", size: "1.2 MB", uploadedBy: "Jane Smith", date: "2023-05-14" },
  { id: 3, name: "Budget Spreadsheet.xlsx", size: "3.7 MB", uploadedBy: "Alice Johnson", date: "2023-05-13" },
]

export default function FilesList() {
  return (
    <div>
      <ScrollArea className="h-[300px] w-full pr-4">
        {files.map((file) => (
          <div key={file.id} className="flex items-center justify-between space-x-4 mb-4">
            <div>
              <div className="font-semibold">{file.name}</div>
              <div className="text-sm text-muted-foreground">
                {file.size} • Uploaded by {file.uploadedBy} on {file.date}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </ScrollArea>
      <Button className="w-full mt-4 bg-active-icon">
        <FileUp className="mr-2 h-4 w-4" /> Upload File
      </Button>
    </div>
  )
}

