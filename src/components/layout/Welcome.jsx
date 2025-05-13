import { Code2 } from "lucide-react"

export default function Welcome() {

    return(
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center hero-animated-bg text-white">
        <Code2 className="h-24 w-24 animate-pulse text-blue-800" />
        <h1 className="mt-8 text-4xl font-bold tracking-tight">Salihou.DEV</h1>
        <p className="mt-2 text-xl text-blue-800">
          Portfolio Loading...
        </p>
       
      </div>
    )
}