import Image from "next/image"

export function ZenplateBadge() {
  return (
    <div className="relative w-[120px] h-[120px]">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZenplateAI.jpg-TNDQ4OziVarupu7ih6CFK8QyceMHcj.jpeg"
        alt="Zenplate.ai Badge"
        width={120}
        height={120}
        style={{
          objectFit: "contain",
          background: "transparent",
        }}
      />
    </div>
  )
}

