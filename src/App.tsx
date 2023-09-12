import { FileVideo, Github } from "lucide-react"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { Textarea } from "./components/ui/textarea"


export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-small text-muted-foreground">Desenvolvido com ❤ no NLW da RocketSeat</span>
          <Separator orientation="vertical" className="h-6"/>
          <Button variant={"outline"}><Github className="w-4 h-4 mr-2"/> Github</Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-row-2 gap-4 flex-1">
            <Textarea className="resize-none p-5 leading-relaxed"
            placeholder="Inclua o prompt para IA..."/>
            <Textarea className="resize-none p-5 leading-relaxed"
            placeholder="Resultado gerado pela IA..." readOnly/>
          </div>
          <p className="text-small text-muted-foreground">Lembre-se você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adcionar o conteúdo da transcrição do vídeo selecioando.</p>
        </div>
        <aside className="w-80">
          <form className="space-y-6">
            <label htmlFor="video" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sn flex-col gap-2 justify-center text-muted-foreground hover:bg-primary/5 items-center"><FileVideo className="w-4 h-4"/> Seleciona um vídeo</label>
          
            <input type="file" id="video" accept="video/mp4" className="sr-only"/>
          </form>
        </aside>
      </main>
    </div>

  )
}


