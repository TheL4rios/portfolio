import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden flex flex-col gap-5 justify-center items-center">
            <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 font-mono">
                404
            </h1>
            <img
                src="https://cataas.com/cat/gif"
                className="w-[256px] h-[256px] object-cover rounded-lg"
            />
            <InteractiveHoverButton href="/" className="bg-transparent text-white border-white">
                Go Home
            </InteractiveHoverButton>
        </div>
    )
}
