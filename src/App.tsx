//importação de ícones
import { FileVideo, Github, Upload, Wand2 } from "lucide-react"
//importação de botão 
import { Button } from "./components/ui/button"
//importação de separador de componentes
import { Separator } from "./components/ui/separator"
//importação de componente de área de texto
import { Textarea } from "./components/ui/textarea"
//importação de caixa de texto 
import { Label } from "./components/ui/label"
//importação de componente de seleção de ações 
import { SelectTrigger,Select, SelectValue, SelectContent, SelectItem } from "./components/ui/select"
//importação de componente de regulagem slider
import { Slider } from "./components/ui/slider"


export function App() {
  return (
    //Div que engloba toda página ocupando a tela inteira com display flex column
    <div className="min-h-screen flex flex-col">
      //Divisão que engloba o header da aplicação 
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-small text-muted-foreground">Desenvolvido com ❤ </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant={"outline"}><Github className="w-4 h-4 mr-2" /> Github</Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-row-2 gap-4 flex-1">
            <Textarea className="resize-none p-5 leading-relaxed"
              placeholder="Inclua o prompt para IA..." />
            <Textarea className="resize-none p-5 leading-relaxed"
              placeholder="Resultado gerado pela IA..." readOnly />
          </div>
          <p className="text-small text-muted-foreground">Lembre-se você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adcionar o conteúdo da transcrição do vídeo selecioando.</p>
        </div>
        <aside className="w-80">
          <form className="space-y-6">
            <label htmlFor="video" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sn flex-col gap-2 justify-center text-muted-foreground hover:bg-primary/5 items-center"><FileVideo className="w-4 h-4" /> Seleciona um vídeo</label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" />
            <Separator />
            <div className="space-y-1">
              <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
              <Textarea id="transcription_prompt" className="h-20 leading-relaxed resize-none" placeholder="Inclua palavras chaves mencionadas no vídeo separadas por vírgula (,)"></Textarea>
            </div>
            <Button type="submit" className="w-full">
              Carregar um vídeo <Upload className="w-4 h-4 ml-2 "/>
            </Button>
          </form>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="youtube">Título do youtube</SelectItem>
                  <SelectItem value="descricao">Descrição</SelectItem>
                </SelectContent>
              </Select>
              <Separator />
            </div>
            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0}
              max={1}
              step={0.1}/>
              <span className="block text-xs text-muted-foreground italic leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros</span>
              <Separator />
            </div>
            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </main> 
    </div>

  )
}


