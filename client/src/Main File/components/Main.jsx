import Projects from './Projects'

function Main() {

  return (
    <>
      <div className="relative min-h-[60vh] bg-[linear-gradient(rgba(196,196,196,0), #b0c3f3)] flex flex-wrap justify-start py-20 sm:pl-9">
        <Projects />
        <img src="https://www.pngall.com/wp-content/uploads/15/Baymax-PNG-Pic.png" alt="gif" className="hidden md:block w-32 absolute bottom-0 right-0" />
      </div>
    </>
  )
}

export default Main;