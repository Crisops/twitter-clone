
export default function HomePage() {
  return (
    <section className="relative w-screen">
      <div className="mx-auto max-w-[100rem]">
          <section className="grid grid-cols-[350px_1fr_500px]">
              <aside className="sticky top-0 h-screen border-r-1 border-zinc-900">
                <div className="">
                  1
                </div>
              </aside>
            <div className="h-[200vh]">2</div>
            <aside className="sticky top-0 h-screen border-l-1 border-zinc-900">
              <div className="">
                3
              </div>
            </aside>
          </section>
      </div>
    </section>
  )
}
